import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="flex flex-col bg-slate-800 text-white p-36 gap-8">
      <p className="text-3xl font-bold">
        This is a test task for <i>Luna Edge</i> made by Denys Botsiun
      </p>
      <p className="text-2xl">
        Since time is limited, i had no time to spend it for design, so all the
        time was spent for functionality
      </p>
      <Link
        className="bg-transparent p-2 border-2 rounded-md border-orange-400 hover:bg-orange-400 transition-colors w-36 text-xl text-center"
        to="/app"
      >
        Go to app
      </Link>
    </main>
  );
};

export default Home;
