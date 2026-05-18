import './Header.css';
import logo from '../../assets/images/logo-neonfit.png';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import example from '../../assets/images/profiles/example.png';
import profileVictor from '../../assets/images/profiles/profile-victor.png';
import profileLeimar from '../../assets/images/profiles/profile-leimar.png';
import Timer from '../Timer/Timer';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { TiDeleteOutline } from "react-icons/ti";

function Header({ compactUserName, isOnToggleTimersExercises, ableTimer, setAbleTimer }) {

  const { nameUser, setNameUser, setLoginValidate, staticUsersContents, dynamicUsersContents, loginValidate,
    ableExercisesPage
   } = useContext(DataContext)

  const [imagesDescriptions] = useState({
    example: example,
    profileVictor: profileVictor,
    profileLeimar: profileLeimar

  })

  function signOut() {
    setLoginValidate(false)
    setNameUser('')
    window.location.reload()

  }

  return (
    <div className='header'>
      <Link className='link-img' to='/'>
        <img
          className='link-img-logo-header' 
          src={logo} 
        />
      </Link>

      {ableTimer &&
      <div className={ableExercisesPage ? 
        'title-timer' :
        'new-title-timer'}
      >
      <TiDeleteOutline
        onClick={() => setAbleTimer(false)}
        className='timer-delete-icon'
      /> 

      {isOnToggleTimersExercises && <p className='title-timer-text'>Total Time:</p>}
      {!isOnToggleTimersExercises && <p className='title-timer-text'>Time:</p>}
      
      <Timer
        key='0'
        specificStyleTimer='specificStyleTimer' 
        specificStyleTimerDisplay='specificStyleTimerDisplay' 
        specificStyleTimerButton='specificStyleTimerButton'
        buttonPlayPauseId='0' 
      />
            
      </div>}

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
        .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
        .map(user => (
      <div
        key={user.name}
        className='container-login-signin'
      >
        <div className='container-login-signin-image-name'>
          {user.imageProfile && <img 
            src={imagesDescriptions[user.imageProfile]}
            className='container-login-signin-image-name-img' 
          />}

          {<p className='container-login-signin-image-name-short-text'>{compactUserName(user.name, 8)}</p>}
          {<p className='container-login-signin-image-name-long-text'>{compactUserName(user.name, 15)}</p>}

        </div>

        <Link className='link-container-button-signout' to='/'>
          <div className='container-button-signout'>
            <ButtonDefault
              onClick={signOut}
              nameButton='SIGN OUT'
              specificStylesButton='specificStylesSignoutButton'
            />
          </div>
        </Link>

      </div>))}

    </div>
  )
}

export default Header;
