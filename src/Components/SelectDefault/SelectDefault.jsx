import './SelectDefault.css';
import { useState } from 'react';
import { TbTriangleInvertedFilled } from "react-icons/tb";

function SelectDefault({ optionDisabledName, specificArray, selectValue, setSelectValue, onChangeOut }) {

  const [openSelect, setOpenSelect] = useState(false)

  function onChange(e) {
    setSelectValue(e.target.value)

  }

  function onClick() {
    setOpenSelect(prev => !prev)

  }

  return (
    <div className='container-select'>
      <TbTriangleInvertedFilled className={`select-triangle-icon ${openSelect ? 
        "select-triangle-icon-animation" : ""}`}
      />
   
      <select
        value={selectValue}
        onChange={(e) => onChangeOut ? onChangeOut(e) : onChange(e)}
        onClick={onClick}
        onBlur={() => setOpenSelect(false)}
        className='select'
      >
        <option
          value=''
          disabled={openSelect}
          className='select-option-default'
        >
          {optionDisabledName}
        </option>

        {specificArray && specificArray.map((item, index) => (
          <option
            key={index + 1}
            value={item}
            className='select-option'
          >
            {item}
          </option>
        ))}

      </select>

    </div>
  )

}

export default SelectDefault;
