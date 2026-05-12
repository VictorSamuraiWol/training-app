import './Header.css';
import logo from '../../assets/images/logo-neonfit.png';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import example from '../../assets/images/profiles/example.png';
import profileVictor from '../../assets/images/profiles/profile-victor.png';
import profileLeimar from '../../assets/images/profiles/profile-leimar.png';
import soundButton from '../../assets/audios/click-sound.mp3';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';

function Header({ compactUserName }) {

  const { nameUser, setNameUser, setLoginValidate, staticUsersContents, dynamicUsersContents, loginValidate } = useContext(DataContext)

  const clickSoundButton = new Audio(soundButton)

  const [imagesDescriptions] = useState({
    example: example,
    profileVictor: profileVictor,
    profileLeimar: profileLeimar

  })

  function signOut() {
    setLoginValidate(false)
    setNameUser('')
    window.location.reload();

  }

  return (
    <div className='header'>
      <Link className='link-img' to='/'>
        <img
          onClick={() => clickSoundButton.play()}
          className='link-img-logo-header' 
          src={logo} 
        />
      </Link>

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
