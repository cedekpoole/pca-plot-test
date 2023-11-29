import Flow from "../assets/flow.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import { Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    // Update this condition based on your requirement
    const shouldShowBack = location.pathname !== "/";
    setShowBackButton(shouldShowBack);
  }, [location]);

  return (
    <div className="flex items-center justify-between drop-shadow w-full px-4 py-1 bg-slate-100">
      <Link className="focus:outline-none" to="/">
        <img src={Flow} className="h-16 w-18" alt="Flow logo" />
      </Link>
      {showBackButton && <BackButton />}
    </div>
  );
}

export default Navbar;
