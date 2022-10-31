// Imports libraries
import { useEffect, useState } from "react";

// Imports additional functionality
import sanityClient from "../utils/sanity_connection";

export const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const projects = await sanityClient.fetch(`
          *[_type == "project"] {
            name,
            date,
            place,
            desc,
            type,
            link,
            tags
          }
        `);

        setProjects(projects);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
          setError(err);
        }
      }
    })();
  }, []);

  return (
    <main className="min-h-screen p-12 bg-green-100">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-1">
          Projects Page
        </h1>
        <h2 className="text-lg flex justify-center text-gray-600 mb-3">
          Welcome to Projects Page!
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:grid-cols-1">
          {projects &&
            projects.map((project, index) => (
              <article
                key={index}
                className="bg-white rounded-sm shadow-lg p-10"
              >
                <h3 className="font-bold text-4xl leading-loose">
                  <a href={project.link} rel="noopener noreferrer">
                    {project.name}
                  </a>
                </h3>
                <div className="text-gray-500 text-sm">
                  <span className="mr-2 text-xs">
                    <strong>Created At: </strong>
                    {new Date(project.date).toLocaleString()}
                  </span>
                  <span className="mr-2 text-xs">
                    <strong>Located: </strong>
                    {project.place}
                  </span>
                  <span className="mr-2 text-xs">
                    <strong>Type: </strong>
                    {project.type}
                  </span>
                  <div className="p-2">
                    <p className="text-lg leading-relaxed py-3 text-xl font-bold">
                      {project.desc}
                    </p>
                    <a
                      href={project.link}
                      className="text-red-500 text-xl font-bold hover:underline hover:text-red-600"
                      rel="noopener noreferrer"
                    >
                      View The Project{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};
