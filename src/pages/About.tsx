// Imports libraries
import { useState, useEffect } from "react";
import sanityClient from "../utils/sanity_connection";

// Imports styling utils
import bg from "../images/yellowstone.jpg";
import BlockContent from "@sanity/block-content-to-react";

export const About = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await sanityClient.fetch(`
          *[_type == "author"] {
            name,
            bio,
            "avatar": image.asset->url
          }
        `);

        setUser(res[0]);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err);
        }
      }
    })();
  }, []);

  if (!user) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <main className="grid grid-cols-1 grid-rows-1">
      <img
        className="col-span-full row-span-full"
        src={bg}
        alt="Yellowstone National Park"
      />
      <div className="col-span-full row-span-full flex bg-stone-200 bg-opacity-75 justify-center sm:justify-self-center sm:self-center sm:rounded">
        <section className="flex items-center p-5 lg:p-12 text-slate-100 shaded-text gap-4">
          <img src={user.avatar} alt={user.name} />
          <div>
            <h1 className="text-2xl lg:text-3xl mb-2">
              Hey there, I'm{" "}
              <span className="cursive underline">{user.name}</span>
            </h1>
            <div>
              <BlockContent
                blocks={user.bio}
                projectId={process.env.REACT_APP_SANITY_ID!}
                dataset={process.env.REACT_APP_SANITY_DATASET!}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
