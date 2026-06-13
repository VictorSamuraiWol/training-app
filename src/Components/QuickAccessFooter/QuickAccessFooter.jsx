import './QuickAccessFooter.css';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { useNavigate } from 'react-router-dom';
import { TbTriangleInvertedFilled } from "react-icons/tb";

function QuickAccessFooter() {

  const { staticUsersContents, dbUsers, loginValidate, nameUser, setTypeTrain, 
    ableExercisesPage, ableNutritionPage, ableNotesPage, quickAccessTypeName 
  } = useContext(DataContext)

  const navigate = useNavigate()

  const [openQuickAccess, setOpenQuickAccess] = useState(false)

  const [disabledSelectNamesQuickAccess, setDisabledSelectNamesQuickAccess] = useState(false)

  const handleNavigate = (e) => {
    const quickAccessType = e.target.value

    if (quickAccessType.length === 1) {
      setTypeTrain(quickAccessType)
      navigate(`/exercises-page/${quickAccessType}`)
    
    } else {
      navigate(`/${quickAccessType}-page`)

    }

    return quickAccessType

  }

  function optionSelect(selectOption) {
    let select

    if (quickAccessTypeName === selectOption) {
      select = 'true'
      
    } else {
      select = 'false'

    }

    return select

  }

  {/* Static and Dynamic User Contents */}
  const exerNutriNotes = (staticUsersContents || dbUsers) && loginValidate && [...(staticUsersContents), ...(dbUsers)]
    .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
    .map(user => [
      user.exercises.map(exercise => exercise[0].type),
      user.nutrition.length > 0 ? 'nutrition' :  null,
      user.notes.length > 0 ? 'notes' :  null
    ])[0]

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

          {exerNutriNotes.flat(1).map((quickAccess, indice) => (
            <option 
              key={indice}
              value={quickAccess}
              className={`quick-access-selects-select-option 
                ${optionSelect(quickAccess) === 'true' && 'quick-access-selects-select-option-select'}`}
              onClick={() => setDisabledSelectNamesQuickAccess(true)}
              path={optionSelect(quickAccess)}
            >
              {quickAccess}
            </option>
          ))}

        </select>

      </div>
  )

}

export default QuickAccessFooter;
