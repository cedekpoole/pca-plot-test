import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
  const history = useNavigate();

  const goBack = () => {
    history(-1)
  };

  return (
    <button onClick={goBack} className="mr-5">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-1"/> Back
    </button>
  );
};

export default BackButton;