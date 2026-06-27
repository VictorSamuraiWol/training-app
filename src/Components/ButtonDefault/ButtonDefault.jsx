import './ButtonDefault.css';
import { DataContext } from '../DataContext/DataContext';

function ButtonDefault({ onClick, specificStylesButton, nameButton, typeButton, imageReact }) {

  return (
    <button
      onClick={onClick}
      className={specificStylesButton}
      type={typeButton}
    >
      {imageReact}{nameButton}
    </button>
  )
}

export default ButtonDefault;
