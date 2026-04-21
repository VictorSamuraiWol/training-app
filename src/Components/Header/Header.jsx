import './Header.css';
import logo from '../../assets/images/logo-neonfit.png';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import profileLeimar from '../../assets/images/profiles/profile-leimar.png';
import profileNewUser1 from '../../assets/images/profiles/profile-new-user-1.png';
import profileVictor from '../../assets/images/profiles/profile-victor.png';
import profileNewUser2 from '../../assets/images/profiles/profile-new-user-2.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';

function Header() {

  const { nameUser, setNameUser, setLoginValidate, usersContents } = useContext(DataContext)

  const [imagesDescriptions] = useState({
      profileVictor: profileVictor,
      profileNewUser2: profileNewUser2

  })

  function signOut() {
    setLoginValidate(false)
    setNameUser('')

  }

  return (
    <div className='header'>
      <Link className='link-img' to='/'>
        <img 
          className='link-img-logo' 
          src={logo} 
        />
      </Link>

      <h1 className='header-title'>NEONFIT APP</h1>

      {/* Static Content */}
      {/* Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <div className='container-login-signin'>
        <div className='container-login-signin-image-name'>
          <img 
            src={profileLeimar} 
            className='container-login-signin-image-name-img' 
          />

          <p className='container-login-signin-image-name-text'>{nameUser}</p>

        </div>

        <div className='container-button-signout'>
          <ButtonDefault
            onClick={signOut}
            nameButton='SIGN OUT'
            specificStylesButton='specificStylesSignoutButton'
          />
        </div>

      </div>}

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && <div className='container-login-signin'>
        <div className='container-login-signin-image-name'>
          <img 
            src={profileNewUser1} 
            className='container-login-signin-image-name-img' 
          />

          <p className='container-login-signin-image-name-text'>{nameUser}</p>

        </div>

        <div className='container-button-signout'>
          <ButtonDefault
            onClick={signOut}
            nameButton='SIGN OUT'
            specificStylesButton='specificStylesSignoutButton'
          />
        </div>

      </div>}

      {/* Dinamic Content */}
      {usersContents && usersContents
        .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
        .map(user => (
      <div
        key={user.name}
        className='container-login-signin'
      >
        <div className='container-login-signin-image-name'>
          <img 
            src={imagesDescriptions[user.imageProfile]} 
            // src={profileVictor}
            className='container-login-signin-image-name-img' 
          />

          <p className='container-login-signin-image-name-text'>{user.name}</p>

        </div>

        <div className='container-button-signout'>
          <ButtonDefault
            onClick={signOut}
            nameButton='SIGN OUT'
            specificStylesButton='specificStylesSignoutButton'
          />
        </div>

      </div>))}

    </div>
  )
}

export default Header;
