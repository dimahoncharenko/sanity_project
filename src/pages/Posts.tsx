// Imports libraries
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Imports additional functionality
import sanity_client from "../utils/sanity_connection";

export const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await sanity_client.fetch(`
          *[_type == "post"] {
            title,
            slug,
            image {
              asset -> {
                _id,
                url
              },
              alt
            }
          }
        `);

        setPosts(response);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
          setError(err);
        }
      }
    })();
  }, []);

  return (
    <main className="bg-slate-300 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-1">
          Posts Page
        </h1>
        <h2 className="text-lg flex justify-center text-gray-600 mb-3">
          Welcome to Posts Page
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts &&
            posts.map((post) => (
              <article key={post.slug.current}>
                <Link to={`/posts/${post.slug.current}`}>
                  <div className="h-64 relative rounded shadow bg-white">
                    <img
                      src={post.image.asset.url}
                      alt={post.image.alt}
                      className="w-full h-full rounded object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-slate-700 text-lg font-blog px-3 py-4 bg-slate-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};
