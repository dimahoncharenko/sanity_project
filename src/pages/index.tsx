// Imports styling utils
import serj from "../images/serj.jpg";

export const Home = () => {
  return (
    <main className="grid">
      <img
        className="row-span-full col-span-full w-full h-full object-cover"
        src={serj}
        alt="Author's picture."
      />
      <section className="row-span-full col-span-full justify-self-center self-center z-10">
        <h1 className="text-7xl text-yellow-300 text-center shaded-text">
          Welcome to my Portfolio
        </h1>
      </section>
    </main>
  );
};
