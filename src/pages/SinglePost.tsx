// Imports libraries
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageBuilder from "@sanity/image-url";
import BlockSection from "@sanity/block-content-to-react";

// Imports additional functionality
import sanityClient from "../utils/sanity_connection";

const builder = ImageBuilder(sanityClient);

const pickImage = (source: any) => {
  return builder.image(source);
};

export const SinglePost = () => {
  const { slug } = useParams();
  const [error, setError] = useState<Error | null>(null);
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await sanityClient.fetch(`
          *[slug.current == "${slug}"] {
            title,
            slug,
            image {
              asset -> {
                _id,
                url
              }
            },
            content,
            "avatar": author->image,
            "name": author->name
          }
        `);

        setPost(response[0]);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err);
        }
      }
    })();
  }, [slug]);

  if (!post) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <main className="min-h-screen p-12">
      <article className="container max-w-max shadow-lg rounded bg-slate-100 mx-auto my-12">
        <header className="grid grid-rows-1 grid-cols-1">
          <img
            className="row-span-full col-span-full object-cover rounded-t"
            src={post.image.asset.url}
            style={{ maxHeight: "400px" }}
          />
          <div className="w-full h-full row-span-full col-span-full flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded p-12 shadow">
              <h3 className="cursive text-5xl lg:text-5xl mb-4">
                {post.title}
              </h3>
              <div className="flex items-center justify-center text-gray-800">
                <img
                  src={pickImage(post.avatar).url()}
                  alt={post.name}
                  className="rounded-full object-cover w-10 h-10 shadow"
                />
                <p className="cursive text-2xl pl-2">{post.name}</p>
              </div>
            </div>
          </div>
        </header>
        <div className="py-5 lg:py-10 px-5 lg:px-10">
          <BlockSection
            className="block"
            blocks={post.content}
            projectId={process.env.REACT_APP_SANITY_ID!}
            dataset={process.env.REACT_APP_SANITY_DATASET!}
          />
        </div>
      </article>
    </main>
  );
};
