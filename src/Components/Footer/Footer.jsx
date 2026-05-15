import './Footer.css';
import image from '../../assets/images/icone-wolverine-sem-fundo.png';
import Loader from '../Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { TbTriangleInvertedFilled } from "react-icons/tb";

function Footer() {

  const { staticUsersContents, dynamicUsersContents, loader, loginValidate, nameUser, setTypeTrain, 
    ableExercisesPage, ableNutritionPage, ableNotesPage } = useContext(DataContext)

  const navigate = useNavigate()

  const [openQuickAccess, setOpenQuickAccess] = useState(false)
  
  const handleNavigate = (e) => {
    const type = e.target.value
    let path

    if (type.length === 1) {
      path = `/exercises-page/${type}`
      
    } else {
      path = type
      
    }
    
    setTypeTrain(type)

    if (path) navigate(path)

  }

  return(
    <div className='footer'>

      {(ableExercisesPage || ableNutritionPage || ableNotesPage) && 
      <div className='quick-access-selects'>        
        <TbTriangleInvertedFilled className={`quick-access-selects-icon ${openQuickAccess ? 
          "quick-access-selects-icon-animation" : ""}`} 
        />

        <select
          onChange={(e) => {handleNavigate(e); setOpenQuickAccess(false)}}
          onFocus={() => setOpenQuickAccess(true)}
          onMouseDown={() => setOpenQuickAccess(true)}
          onBlur={() => setOpenQuickAccess(false)}
          className='quick-access-selects-select'
        >
          <option
            value=''
            className='quick-access-selects-select-option'
          >
            Quick Access
          </option>

          {/* Static and Dynamic User Contents */}
          {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
          .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
          .map(user => user.exercises)[0]
          .map(exercises => exercises[0].type)
          .map(type => (
            <option 
              key={type}
              value={type}
              className='quick-access-selects-select-option'
            >
              {type}
            </option>
          ))}

          <option 
            value='/nutrition-page'
            className='quick-access-selects-select-option'>
              nutrition
          </option>
          
          <option 
            value='/notes-page'
            className='quick-access-selects-select-option'>
              notes
          </option>

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
