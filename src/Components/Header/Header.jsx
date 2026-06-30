import './Header.css';
import logo from '../../assets/images/logo-neonfit.png';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import example from '../../assets/images/profiles/example.png';
import profileVictor from '../../assets/images/profiles/profile-victor.png';
import profileLeimar from '../../assets/images/profiles/profile-leimar.png';
import Timer from '../Timer/Timer';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";

function Header({ compactUserName, isOnToggleTimersExercises, ableTimer, setAbleTimer, setImagesProfilesList }) {

  const { nameUser, setNameUser, setLoginValidate, staticUsersContents, dbUsers, loginValidate,
    ableExercisesPage
   } = useContext(DataContext)

  const [imagesDescriptions] = useState({
    example: example,
    profileVictor: profileVictor,
    profileLeimar: profileLeimar,

  })

  const [isPinned, setIsPinned] = useState(false)

  function signOut() {
    setLoginValidate(false)
    setNameUser('')
    window.location.reload()

  }

  useEffect(() => {
    setImagesProfilesList(Object.keys(imagesDescriptions))

  },[setImagesProfilesList, imagesDescriptions])

  return (
    <div className='header'>
      <Link className='link-img' to='/'>
        <img
          className='link-img-logo-header' 
          src={logo} 
        />
      </Link>

      {ableTimer && ableExercisesPage &&
      <div 
        className={`title-timer ${isPinned && 'new-title-timer'}`}
      >
        {isPinned ? 
        <AiFillPushpin 
          onClick={() => setIsPinned(false)}
          className='timer-fixed-icon' 
        /> : 
        <AiOutlinePushpin 
          onClick={() => setIsPinned(true)}
          className='timer-fixed-icon' 
        />}

        <TiDeleteOutline
          onClick={() => setAbleTimer(false)}
          className='timer-delete-icon'
        /> 

        {isOnToggleTimersExercises && <p className='title-timer-text'>Total Time:</p>}
        {!isOnToggleTimersExercises && <p className='title-timer-text'>Time:</p>}
        
        <Timer
          key='0'
          _key='timer0'
          specificStyleTimer='specificStyleTimer' 
          specificStyleTimerDisplay='specificStyleTimerDisplay' 
          specificStyleTimerButton='specificStyleTimerButton'
          buttonPlayPauseId='0'
        />
            
      </div>}

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dbUsers) && loginValidate && [...(staticUsersContents), ...(dbUsers)]
        .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
        .map(user => (
      <div
        key={user.name}
        className='container-login-signin'
      >
        <div className='container-login-signin-image-name'>
          {user.image_profile && <img 
            src={imagesDescriptions[user.image_profile]}
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
