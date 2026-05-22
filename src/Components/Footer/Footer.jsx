import './Footer.css';
import image from '../../assets/images/icone-wolverine-sem-fundo.png';
import Loader from '../Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { TbTriangleInvertedFilled } from "react-icons/tb";

function Footer() {

  const { staticUsersContents, dynamicUsersContents, loader, loginValidate, nameUser, typeTrain, setTypeTrain, 
    ableExercisesPage, ableNutritionPage, ableNotesPage } = useContext(DataContext)

  const navigate = useNavigate()

  const [openQuickAccess, setOpenQuickAccess] = useState(false)

  const [disabledSelectNamesQuickAccess, setDisabledSelectNamesQuickAccess] = useState(false)
  
  const handleNavigate = (e) => {
    const path = e.target.value
    let letterTypeTrain;

    if (path.includes('/exercises-page/')) {
      letterTypeTrain = path.split('/').pop()
      
    }

    setTypeTrain(letterTypeTrain)

    if (path) navigate(path)

    return letterTypeTrain

  }

  function optionSelect(optionSelect) {
    let select;

    if (optionSelect.includes(typeTrain)) {
      select = 'true'
      
    }    

    return select

  }

  return(
    <div className='footer'>
      {(ableExercisesPage || ableNutritionPage || ableNotesPage) && 
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
          {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
          .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
          .map(user => user.quickAccess && user.quickAccess)
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

      </div>}

      <img 
        className='footer-img' 
        src={image} 
        alt="icon wolverine" 
      />

      <p className='footer-text'>Created by Victor Cardoso. Feel free to connect on  
          <Link className='footer-link' id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.</Link>
      </p>

      {loader && <Loader />}

    </div>

  )

}

export default Footer;
