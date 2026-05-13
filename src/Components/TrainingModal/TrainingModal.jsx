import './TrainingModal.css';
import Modal from 'react-modal';
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import soundButton from '../../assets/audios/click-sound.mp3';
import { useContext, useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti"
import { GiClick } from "react-icons/gi";
import { DataContext } from '../DataContext/DataContext';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root')

function TrainingModal() {
 
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { setUserId, setTypeTrain, loginValidate, nameUser, staticUsersContents, dynamicUsersContents } = useContext(DataContext)

  const clickSoundButton = new Audio(soundButton)

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)
    clickSoundButton.play()

  }

  function clickButton(type) {
    setTypeTrain(type)

  }

  return (
    <div className='container'>
      <div className='container-training-modal'>
        <ButtonDefault 
          onClick={openModal} 
          nameButton='TRAININGs'
          specificStylesButton='container-training-modal-button'
        />

      </div>

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalTrainingOverlay'
          className='modalTrainingContent'
      > 
        <div className='container-training-modal-title-delete'>
          <h1 className='container-training-modal-title-delete-text'>Trainings</h1>

          <TiDeleteOutline
              onClick={closeModal}
              className='container-training-modal-title-delete-icon'
          /> 
        </div>

        <div className='container-training-modal-trainings'>
          {/* Static and Dynamic User Contents */}
          {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
          .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
          .map(user => ({id: user.id, exercises: user.exercises}))
          .map(id_exercises => (
          <div
            key={id_exercises.id}
            className='container-training-modal-trainings-users' 
          >
            {id_exercises.exercises
            .map(exercise => exercise[0].type)
            .map(type => (
            <Link
              key={type}
              className={`link link-workout-${type}`}
              to='/exercises-page'
            >
              <ButtonDefault
                onClick={() => {clickButton(type); setUserId(nameUser)}}
                nameButton={`Workout ${type}`}
                specificStylesButton={`specificStylesButton${Math.floor(Math.random() * 10) + 1}`}
              />
            </Link>))}
            
          </div>))}

        </div>     

      </Modal>

    </div>
          
  )

}

export default TrainingModal;
