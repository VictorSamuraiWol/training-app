import './ButtonDefault.css';
import { DataContext } from '../DataContext/DataContext';

function ButtonDefault({ onClick, specificStylesButton, nameButton, typeButton, imageReact }) {

  function multiFunctionsOnCLickAudio() {
    onClick && onClick()

  }

  return (
    <button
      onClick={multiFunctionsOnCLickAudio}
      className={specificStylesButton}
      type={typeButton}
    >
      {imageReact}{nameButton}
    </button>
  )
}

export default ButtonDefault;
