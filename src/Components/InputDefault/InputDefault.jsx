import './InputDefault.css';

function InputDefault({ onChange, value, inputId, required, name }) {

  return(
    <input
      onChange={onChange}
      value={value}
      id={inputId} 
      autoComplete='off'
      required={required}
      name={name}
    />
  )

}

export default InputDefault;
