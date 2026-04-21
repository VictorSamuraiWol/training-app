import './ButtonDefault.css';

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
