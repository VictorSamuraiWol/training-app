import './SelectDefault.css';
import { useState } from 'react';
import { TbTriangleInvertedFilled } from "react-icons/tb";

function SelectDefault({ setSelectValue, selectValue, onChangeOut, specificStylesSelect, optionDisabledName, 
  specificArray, compactUserName
}) {

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
        className={specificStylesSelect}
      >
        <option
          value=''
          disabled={openSelect}
          className='select-option-default'
        >
          {optionDisabledName}
        </option>

        {specificArray && specificArray.map((item, index) => (
          // object element
          typeof(item) === 'object' && Object.values(item)?.length > 1 ? 
            <option
                key={index + 1}
                value={item.id}
                className='select-option'
              >
                {compactUserName && compactUserName(item.name, 60)}
                {!compactUserName && item.name}
            </option>

          :
          // string element
          typeof(item) === 'string' &&
            <option
              key={index + 1}
              value={item}
              className='select-option'
            >
              {compactUserName && compactUserName(item, 60)}
              {!compactUserName && item}
            </option>            

        ))}

      </select>

    </div>
  )

}

export default SelectDefault;
