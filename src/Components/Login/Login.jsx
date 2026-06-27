import './Login.css';
import InputDefault from '../InputDefault/InputDefault';
import LabelDefault from '../LabelDefault/LabelDefault';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import LoginModal from '../Modal/LoginModal/LoginModal';
import logo from '../../assets/images/logo-neonfit.png';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { Link } from 'react-router-dom';

function Login({ setActivateNavigateDefault }) {
  
  const [passwordUser, setPasswordUser] = useState('')

  const [alertLoginMessage, setAlertLoginMessage] = useState('')

  const { staticUsersContents, dbUsers, setLoginValidate, nameUser, setNameUser } = useContext(DataContext)

  const onLoginValidate = (e) => {
    e.preventDefault()
    const errorMessage = document.querySelector('#alert-login-message')

    let matchedUsersContents;

    {/* Static and Dynamic User Contents */}
    matchedUsersContents = (staticUsersContents || dbUsers) && [...(staticUsersContents), ...(dbUsers)].filter(user =>
      (user.name.toLowerCase() === nameUser.toLowerCase().trim()) && 
      (user.password.toLowerCase() === passwordUser.toLowerCase().trim()))[0]

    if (matchedUsersContents) {
      setLoginValidate(true)
      setActivateNavigateDefault(true)

    } else {
      setLoginValidate(false)
      setAlertLoginMessage('Invalid user')
      errorMessage.classList.add('alert-login-message-able')
      errorMessage.classList.remove('alert-login-message-disable')

      setTimeout(() => {
        errorMessage.classList.add('alert-login-message-disable')
        errorMessage.classList.remove('alert-login-message-able')

      } , 3000)

    }

  }

  function onNameUserValidate(e) {
    setNameUser(e.target.value)

  }

  function onPasswordUserValidate(e) {
    setPasswordUser(e.target.value)

  }

  return(
    <div className='login'>
      <Link className='link-img' to='/'>
        <img
          className='link-img-logo-login'
          src={logo} 
        />
      </Link>

      <LoginModal />

      <form 
        onSubmit={onLoginValidate}
        className='form-login' 
      >
        <div className='form-labels-inputs'>
          <div className='form-label-input'>
            <LabelDefault htmlFor='name' nameLabel='Name:' />
            <InputDefault
              onChange={onNameUserValidate}
              value={nameUser}
              inputId='name'
              required={true}
              name='name'
            />
          </div>

          <div className='form-label-input short-pass'>
            <LabelDefault htmlFor='password' nameLabel='Pass:' />
            <InputDefault
              onChange={onPasswordUserValidate}
              value={passwordUser}
              inputId='password'
              required={true}
              name='password'
              // typeInput='password' obs: avoid use this to prevent leak, because this is a test project
            />
          </div>

          <div className='form-label-input long-pass'>
            <LabelDefault htmlFor='password' nameLabel='Password:' />
            <InputDefault
              onChange={onPasswordUserValidate}
              value={passwordUser}
              inputId='password'
              required={true}
              name='password'
              // typeInput='password' obs: avoid use this to prevent leak, because this is a test project
            />
          </div>

          <span
            id='alert-login-message'
            className='alert-login-message-disable'
          >
            {alertLoginMessage}
          </span>

        </div>


        <div className='container-button'>
          <ButtonDefault 
            nameButton='SIGN IN' 
            specificStylesButton='specificStylesLoginButton' 
            typeButton='submit' 
          />
        </div>

      </form>

    </div>
  )
}

export default Login;
