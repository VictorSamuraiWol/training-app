import './InputDefault.css';

function InputDefault({ onChange, onClick, value, inputId, required, name, typeInput, specificStylesInput, checked }) {

  return(
    <input
      onClick={onClick}
      onChange={onChange}
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
