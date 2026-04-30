import './Header.css';
import logo from '../../assets/images/logo-neonfit.png';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import profileVictor from '../../assets/images/profiles/profile-victor.png';
import profileLeimar from '../../assets/images/profiles/profile-leimar.png';
import profileNewUser2 from '../../assets/images/profiles/profile-new-user-2.png';
import profileNewUser3 from '../../assets/images/profiles/profile-new-user-3.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';

function Header({ compactUserName }) {

  const { nameUser, setNameUser, setLoginValidate, usersContents } = useContext(DataContext)

  const [imagesDescriptions] = useState({
      profileVictor: profileVictor,
      profileNewUser2: profileNewUser2,
      profileNewUser3: profileNewUser3

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
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && <div className='container-login-signin'>
        <div className='container-login-signin-image-name'>
          <img 
            src={profileVictor} 
            className='container-login-signin-image-name-img' 
          />

          <p className='container-login-signin-image-name-short-text'>{compactUserName('Victor Static', 8)}</p>
          <p className='container-login-signin-image-name-long-text'>{compactUserName('Victor Static', 15)}</p>

        </div>

        <div className='container-button-signout'>
          <ButtonDefault
            onClick={signOut}
            nameButton='SIGN OUT'
            specificStylesButton='specificStylesSignoutButton'
          />
        </div>

      </div>}

      {/* Leimar - Static User 2 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <div className='container-login-signin'>
        <div className='container-login-signin-image-name'>
          <img 
            src={profileLeimar} 
            className='container-login-signin-image-name-img' 
          />

          <p className='container-login-signin-image-name-short-text'>{compactUserName('Leimar', 8)}</p>
          <p className='container-login-signin-image-name-long-text'>{compactUserName('Leimar', 15)}</p>

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
            className='container-login-signin-image-name-img' 
          />

          {<p className='container-login-signin-image-name-short-text'>{compactUserName(user.name, 8)}</p>}
          {<p className='container-login-signin-image-name-long-text'>{compactUserName(user.name, 15)}</p>}


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
