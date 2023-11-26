import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-28 rounded w-36 mx-4 text-center hover:text-white hover:no-underline" to="/volcano-plot">
        Volcano Plot
      </Link>
      <Link className="bg-green-500 hover:bg-green-700 text-white mb-28 font-bold py-2 px-4 w-36 rounded mx-4 text-center hover:text-white hover:no-underline" to="/pca-plot">
        PCA Plot
      </Link>
    </div>
  );
}

export default LandingPage;