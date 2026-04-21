import './InputDefault.css';

function InputDefault({ onChange, value, inputId, required }) {

  return(
    <input
      onChange={onChange}
      value={value}
      id={inputId} 
      autoComplete='off'
      required={required}
    />
  )

}

export default InputDefault;
