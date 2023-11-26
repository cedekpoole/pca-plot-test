import LandingPage from "./components/LandingPage";
import PCA from "./components/PCA";
import Volcano from "./components/Volcano";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/volcano-plot" element={<PCA />} />
      <Route path="/pca-plot" element={<Volcano />} />
    </Routes>
  );
}

export default App;
