import './InputDefault.css';

function InputDefault({ onChange, onClick, value, inputId, required, name, typeInput, specificStylesInput, checked }) {

  return(
    <input
      onChange={onChange}
      onClick={onClick}
      value={value}
      id={inputId}
      autoComplete='off'
      required={required}
      name={name}
      type={typeInput}
      className={specificStylesInput}
      checked={checked}
    />
  )

}

export default InputDefault;
