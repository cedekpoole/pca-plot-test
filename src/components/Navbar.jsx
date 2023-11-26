import Flow from '../assets/flow.png'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton';

function Navbar() {
    const location = useLocation();
    const [showBackButton, setShowBackButton] = useState(false);
  
    useEffect(() => {
      // Update this condition based on your requirement
      const shouldShowBack = location.pathname !== '/';
      setShowBackButton(shouldShowBack);
    }, [location]);

    return (
        <div className="flex items-center justify-between drop-shadow w-full px-4 py-1 bg-slate-100">
            <img src={Flow} className="h-16 w-18" alt="Flow logo" />
            {showBackButton && <BackButton />}
        </div>
    )
}

export default Navbar