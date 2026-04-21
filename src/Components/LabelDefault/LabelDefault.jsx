import './LabelDefault.css';

function LabelDefault({ htmlFor, nameLabel }) {

  return(
    <label htmlFor={htmlFor}>{nameLabel}</label>
  )

}

export default LabelDefault;
