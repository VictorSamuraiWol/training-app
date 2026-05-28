import './FinishWorkoutModal.css';
import Modal from 'react-modal';
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import endWorkoutGoodImage from '../../../assets/images/exercises-gif/end-workout-50-100-gif.gif';
import endWorkoutBadImage from '../../../assets/images/exercises-gif/end-workout-0-49-gif.gif';
import { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import { Link, useOutletContext } from 'react-router-dom';

Modal.setAppElement('#root')

function FinishWorkoutModal({ performanceEndWorkout, numPerformanceEndWorkout, totalEndWorkout, doneEndWorkout, 
  missedEndWorkout, setCheckedInputs, ableFinishWorkoutButton }) {

  const { setAbleTimer, setSelectIdVideoModal } = useOutletContext()
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)

  }

  return (
    <div className='container-finish-workout'>
      <ButtonDefault 
        onClick={ableFinishWorkoutButton() ? openModal : null} 
        nameButton='FINISH WORKOUT'
        specificStylesButton={ableFinishWorkoutButton() ? 
          'finish-workout-button' : 'finish-workout-button-inactive'}
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalFinishWorkoutOverlay'
          className='modalFinishWorkoutContent'
      > 
        <div className='container-finish-workout-modal-delete'>
          <h1 className='container-finish-workout-modal-delete-text'>FINISH WORKOUT</h1>

          <TiDeleteOutline
              onClick={closeModal}
              className='container-finish-workout-modal-delete-icon'
          /> 
        </div>

        <div className='container-image-texts'>
          {numPerformanceEndWorkout >= 0.5 && 
          <img
            src={endWorkoutGoodImage}
            alt='image-end-workout'
            className='container-image-text-img'
          />}

          {numPerformanceEndWorkout < 0.5 &&
          <img
            src={endWorkoutBadImage}
            alt='image-end-workout'
            className='container-image-text-img'
          />}

          <div className='container-texts'>
            <p className='container-texts-text'>Training Performance</p>
            <p className='container-texts-text-performance'>{performanceEndWorkout}</p>
            <p className='container-texts-text'>Total: {totalEndWorkout}</p>
            <p className='container-texts-text'>Completed: {doneEndWorkout}</p>
            <p className='container-texts-text'>Missed: {missedEndWorkout}</p>
          </div>


        </div>

        <div className='container-modal-finish-button'>
          <Link className='link-modal-finish-button' to='/'>
            <ButtonDefault
              onClick={() => {closeModal(); setCheckedInputs([]); setAbleTimer(false); setSelectIdVideoModal('')}}
              nameButton='FINISH'
              specificStylesButton='modal-finish-button' 
            />
          </Link>
        </div>

      </Modal>

    </div>

  )

}

export default FinishWorkoutModal;
