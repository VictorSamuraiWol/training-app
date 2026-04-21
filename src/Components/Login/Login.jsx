import './Login.css';
import InputDefault from '../InputDefault/InputDefault';
import LabelDefault from '../LabelDefault/LabelDefault';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import ModalLogin from '../ModalLogin/ModalLogin';
import logo from '../../assets/images/logo-neonfit.png';
import { useContext, useState } from 'react';
import { DataContext } from '../DataContext/DataContext';
import { Link } from 'react-router-dom';

function Login({ setActivateNavigateDefault }) {
  
  const [passwordUser, setPasswordUser] = useState('')
  const [alertLoginMessage, setAlertLoginMessage] = useState('')

  const { usersContents, setLoginValidate, nameUser, setNameUser } = useContext(DataContext)

  const onLoginValidate = (e) => {
    e.preventDefault()

    let matchedStatic;
    let matchedDinamic;

    matchedStatic = (
      // static user 1
      (nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase()) && passwordUser.toLowerCase().trim() === 'Leimar'.toLowerCase() ||
      // static user 2
      (nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase()) && passwordUser.toLowerCase().trim() === 'New User 1'.toLowerCase()) 

    matchedDinamic = usersContents && usersContents.filter(user => 
      (user.name.toLowerCase() === nameUser.toLowerCase().trim()) && (user.password.toLowerCase() === passwordUser.toLowerCase().trim()))[0]

    if (matchedStatic || matchedDinamic) {
      setLoginValidate(true)
      setActivateNavigateDefault(true)

    } else {
      setLoginValidate(false)
      usersContents && setAlertLoginMessage('Invalid user')
      !usersContents && setAlertLoginMessage('Invalid static user')

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
          className='link-img-logo' 
          src={logo} 
        />
      </Link>

      <ModalLogin />

      <form onSubmit={onLoginValidate}>
        <div className='form-labels-inputs'>
          <div className='form-label-input'>
            <LabelDefault htmlFor='name' nameLabel='Name:' />
            <InputDefault
              onChange={onNameUserValidate}
              value={nameUser}
              inputId='name'
              required={true} 
            />
          </div>
          <div className='form-label-input'>
            <LabelDefault htmlFor='password' nameLabel='Password:' />
            <InputDefault
              onChange={onPasswordUserValidate}
              value={passwordUser}
              inputId='password'
              required={true}
            />
          </div>

          <span className='alert-login-message'>{alertLoginMessage}</span>

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
