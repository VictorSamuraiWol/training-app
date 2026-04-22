import './ModalLogin.css'
import Modal from 'react-modal'
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import { useContext, useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti"
import { GiClick } from "react-icons/gi";
import { DataContext } from '../DataContext/DataContext';

Modal.setAppElement('#root')

function ModalLogin() {

  const { usersContents } = useContext(DataContext)
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)

  }

  return (
    <div className='container'>
      <ButtonDefault 
        onClick={openModal} 
        nameButton='SHOW ALL NAMES AND PASSWORDS'
        specificStylesButton='container-modal-button'
        imageReact={<GiClick />}
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalLoginOverlay'
          className='modalLoginContent'
      > 
        <div className='container-modal-delete'>
          <h1 className='login-users-passwords-title'>LOGIN</h1>

          <TiDeleteOutline
              onClick={closeModal}
              className='cotainer-modal-delete-icon'
          /> 
        </div>

        <div className='login-users-passwords'>
          <div className='static-dinamic-content'>
            {/* Static Content */}
            {/* static user 1 */}
            <div className='login-users-passwords-users'>
              <div className='login-users-passwords-user'>
                <p className='login-users-passwords-user-name'>Name: Leimar</p>
                <p>;</p>
                <p className='login-users-passwords-password'>Password: Leimar</p>
              </div>

            </div>

            {/* static user 2 */}
            <div className='login-users-passwords-users'>
              <div className='login-users-passwords-user'>
                <p className='login-users-passwords-user-name'>Name: New User 1</p>
                <p>;</p>
                <p className='login-users-passwords-password'>Password: New User 1</p>
              </div>

            </div>

            {/* Dinamic Content */}
            {usersContents && usersContents.map(user => (
              <div 
                key={user.id}
                className='login-users-passwords-users'
              >
                <div className='login-users-passwords-user'>
                  <p className='login-users-passwords-user-name'>Name: {user.name}</p>
                  <p>;</p>
                  <p className='login-users-passwords-password'>Password: {user.password}</p>
                  <p></p>
                </div>

              </div>
            ))}

          </div>

      </div>

      </Modal>

    </div>

  )

}

export default ModalLogin;
