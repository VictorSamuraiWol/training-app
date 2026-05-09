import './LabelDefault.css';

function LabelDefault({ onClick, specificStyleLabel, htmlFor, nameLabel }) {

  return(
    <label
      onClick={onClick}
      className={specificStyleLabel}
      htmlFor={htmlFor}
    >
      {nameLabel}
    </label>

  )

}

export default LabelDefault;
