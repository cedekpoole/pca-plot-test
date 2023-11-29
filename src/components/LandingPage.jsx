import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="md:text-5xl sm:text-4xl text-3xl text-white mb-10 font-bold">
        Data Visualization Hub
      </h1>
      <div className="flex text-center">
        <Link
          className="transform transition bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 m-4 w-36 rounded-lg shadow-lg hover:scale-110 hover:text-white hover:no-underline"
          to="/volcano-plot"
        >
          Volcano Plot
        </Link>
        <Link
          className="transform transition bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 w-36 px-6 m-4 rounded-lg shadow-lg hover:scale-110 hover:text-white hover:no-underline"
          to="/pca-plot"
        >
          PCA Plot
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
