import './QuickAccessFooter.css';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { useNavigate } from 'react-router-dom';
import { TbTriangleInvertedFilled } from "react-icons/tb";

function QuickAccessFooter() {

  const { staticUsersContents, dbUsers, loginValidate, nameUser, typeTrain, setTypeTrain, 
    ableExercisesPage, ableNutritionPage, ableNotesPage } = useContext(DataContext)

  const navigate = useNavigate()

  const [openQuickAccess, setOpenQuickAccess] = useState(false)

  const [disabledSelectNamesQuickAccess, setDisabledSelectNamesQuickAccess] = useState(false)

  const handleNavigate = (e) => {
    const path = e.target.value
    let letterTypeTrain

    if (path.includes('/exercises-page/')) {
      letterTypeTrain = path.split('/').pop()
      
    }

    setTypeTrain(letterTypeTrain)

    if (path) navigate(path)

    return letterTypeTrain

  }

  function optionSelect(optionSelect) {
    let select

    if (optionSelect.includes(typeTrain)) {
      select = 'true'
      
    }    

    return select

  }

  return (
    (ableExercisesPage || ableNutritionPage || ableNotesPage) && 
      <div className='quick-access-selects'>        
        <TbTriangleInvertedFilled className={`quick-access-selects-icon ${openQuickAccess ? 
          "quick-access-selects-icon-animation" : ""}`} 
        />

        <select
          onClick={() => setDisabledSelectNamesQuickAccess(true)} 
          onChange={(e) => {handleNavigate(e); setOpenQuickAccess(false)}}
          onFocus={() => setOpenQuickAccess(true)}
          onBlur={() => {setOpenQuickAccess(false); setDisabledSelectNamesQuickAccess(false)}}
          onMouseDown={() => setOpenQuickAccess(true)}
          className='quick-access-selects-select'
        >
          <option
            value=''
            disabled={disabledSelectNamesQuickAccess}
            className='quick-access-selects-select-option'       
          >
            Quick Access
          </option>

          {/* Static and Dynamic User Contents */}
          {(staticUsersContents || dbUsers) && loginValidate && [...(staticUsersContents), ...(dbUsers)]
          .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
          .map(user => user.quick_access && user.quick_access)
          .map(quickAccessList => quickAccessList)[0]
          .map(quickAccess => (
            <option 
              key={quickAccess[0].name}
              value={quickAccess[1].path}
              className={`'quick-access-selects-select-option' 
                ${optionSelect(quickAccess[1].path) === 'true' && 'quick-access-selects-select-option-select'}`}
              onClick={() => setDisabledSelectNamesQuickAccess(true)}
              path={optionSelect(quickAccess[1].path)}
            >
              {quickAccess[0].name}
            </option>
          ))}

        </select>

      </div>
  )

}

export default QuickAccessFooter;
