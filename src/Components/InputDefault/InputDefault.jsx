import './InputDefault.css';

function InputDefault({ onChange, value, inputId, required, name, typeInput, specificStylesInput }) {

  return(
    <input
      onChange={onChange}
      value={value}
      id={inputId} 
      autoComplete='off'
      required={required}
      name={name}
      type={typeInput}
      className={specificStylesInput}
    />
  )

}

export default InputDefault;
