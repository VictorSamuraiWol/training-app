import './LoginModal.css'
import Modal from 'react-modal'
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import { useContext, useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti"
import { GiClick } from "react-icons/gi";
import { DataContext } from '../../DataContext/DataContext';

Modal.setAppElement('#root')

function LoginModal() {

  const { staticUsersContents, dbUsers } = useContext(DataContext)
  
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
        specificStylesButton='container-modal-button show-all-names-and-passwords'
        imageReact={<GiClick className='image-react-modal'/>}
      />

      <ButtonDefault 
        onClick={openModal} 
        nameButton='NAMES AND PASS'
        specificStylesButton='container-modal-button names-and-passwords'
        imageReact={<GiClick className='image-react-modal'/>}
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalLoginOverlay'
          className='modalLoginContent'
      > 
        <div className='container-login-modal-delete'>
          <h1 className='container-login-modal-delete-text'>LOGIN</h1>

          <TiDeleteOutline
              onClick={closeModal}
              className='container-login-modal-delete-icon'
          /> 
        </div>

        <div className='login-users-passwords'>
          <div className='static-dinamic-content'>
            {/* Static and Dynamic User Contents */}
            {(staticUsersContents || dbUsers) && [...(dbUsers), ...(staticUsersContents)]
            .map(user => (
              <div 
                key={user.id} 
                className='login-users-passwords-users'
              >
                <div className='login-users-passwords-user'>
                  <p className='login-users-passwords-user-name'>Name: {user.name}</p>
                  <p className='login-users-passwords-password'>Password: {user.password}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </Modal>

    </div>

  )

}

export default LoginModal;
