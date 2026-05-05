import './TrainingModal.css'
import Modal from 'react-modal'
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

  const { setUserId, setTypeTrain, loginValidate, nameUser, staticUsersContents, dinamicUsersContents } = useContext(DataContext)

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

  const whatTrainingType = (exercises) => {
    let training = false 

    exercises.forEach(exercise => {
      if (exercise !== "") {
        training = true

      }

    })

    return training

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
          {/* Static Content */}
          {staticUsersContents && loginValidate && staticUsersContents
          .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
          .map(user => (
          <div
            key={user.id}
            className='container-training-modal-trainings-users' 
          >
            {whatTrainingType([user.exercise1[0][1], user.exercise2[0][1], user.exercise3[0][1], user.exercise4[0][1], 
            user.exercise5[0][1], user.exercise6[0][1], user.exercise7[0][1], user.exercise8[0][1], user.exercise9[0][1], 
            user.exercise10[0][1], user.exercise11[0][1], user.exercise12[0][1], user.exercise13[0][1],
            user.exercise14[0][1], user.exercise15[0][1]]) === true && 
            <Link
              className='link-workout-A' 
              to='/exercises-page'
            >
              <ButtonDefault
                onClick={() => {clickButton('A'); setUserId(nameUser)}}
                nameButton='Workout A'
                specificStylesButton='specificStylesButtonA'
              />
            </Link>
            }

            {user.exercise1[1] && whatTrainingType([user.exercise1[1][1], user.exercise2[1][1], user.exercise3[1][1], user.exercise4[1][1], 
            user.exercise5[1][1], user.exercise6[1][1], user.exercise7[1][1], user.exercise8[1][1], user.exercise9[1][1], 
            user.exercise10[1][1], user.exercise11[1][1], user.exercise12[1][1], user.exercise13[1][1],
            user.exercise14[1][1], user.exercise15[1][1]]) === true &&
            <Link
              className='link-workout-B'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('B'); setUserId(nameUser)}}
                nameButton='Workout B'
                specificStylesButton='specificStylesButtonB'
              />
            </Link>}

            {user.exercise1[2] && whatTrainingType([user.exercise1[2][1], user.exercise2[2][1], user.exercise3[2][1], user.exercise4[2][1], 
            user.exercise5[2][1], user.exercise6[2][1], user.exercise7[2][1], user.exercise8[2][1], user.exercise9[2][1], 
            user.exercise10[2][1], user.exercise11[2][1], user.exercise12[2][1], user.exercise13[2][1],
            user.exercise14[2][1], user.exercise15[2][1]]) === true &&
            <Link
              className='link-workout-C'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('C'); setUserId(nameUser)}}
                nameButton='Workout C'
                specificStylesButton='specificStylesButtonC'
              />
            </Link>}
            {user.exercise1[3] && whatTrainingType([user.exercise1[3][1], user.exercise2[3][1], user.exercise3[3][1], user.exercise4[3][1], 
            user.exercise5[3][1], user.exercise6[3][1], user.exercise7[3][1], user.exercise8[3][1], user.exercise9[3][1], 
            user.exercise10[3][1], user.exercise11[3][1], user.exercise12[3][1], user.exercise13[3][1],
            user.exercise14[3][1], user.exercise15[3][1]]) === true &&
            <Link
              className='link-workout-D'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('D'); setUserId(nameUser)}}
                nameButton='Workout D'
                specificStylesButton='specificStylesButtonD'
              />
            </Link>}

            {user.exercise1[4] && whatTrainingType([user.exercise1[4][1], user.exercise2[4][1], user.exercise3[4][1], 
            user.exercise4[4][1], user.exercise5[4][1], user.exercise6[4][1], user.exercise7[4][1], user.exercise8[4][1], 
            user.exercise9[4][1], user.exercise10[4][1], user.exercise11[4][1], user.exercise12[4][1], 
            user.exercise13[4][1], user.exercise14[4][1], user.exercise15[4][1]]) === true &&
            <Link
              className='link-workout-E'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('E'); setUserId(nameUser)}}
                nameButton='Workout E'
                specificStylesButton='specificStylesButtonE'
              />
            </Link>}

            {user.exercise1[5] && whatTrainingType([user.exercise1[5][1], user.exercise2[5][1], user.exercise3[5][1], 
            user.exercise4[5][1], user.exercise5[5][1], user.exercise6[5][1], user.exercise7[5][1], user.exercise8[5][1], 
            user.exercise9[5][1], user.exercise10[5][1], user.exercise11[5][1], user.exercise12[5][1], 
            user.exercise13[5][1], user.exercise14[5][1], user.exercise15[5][1]]) === true &&
            <Link
              className='link-workout-F'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('F'); setUserId(nameUser)}}
                nameButton='Workout F'
                specificStylesButton='specificStylesButtonF'
              />
            </Link>}

            {user.exercise1[6] && whatTrainingType([user.exercise1[6][1], user.exercise2[6][1], user.exercise3[6][1], 
            user.exercise4[6][1], user.exercise5[6][1], user.exercise6[6][1], user.exercise7[6][1], user.exercise8[6][1], 
            user.exercise9[6][1], user.exercise10[6][1], user.exercise11[6][1], user.exercise12[6][1], 
            user.exercise13[6][1], user.exercise14[6][1], user.exercise15[6][1]]) === true &&
            <Link
              className='link-workout-G'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('G'); setUserId(nameUser)}}
                nameButton='Workout G'
                specificStylesButton='specificStylesButtonG'
              />
            </Link>}

            {user.exercise1[7] && whatTrainingType([user.exercise1[7][1], user.exercise2[7][1], user.exercise3[7][1], 
            user.exercise4[7][1], user.exercise5[7][1], user.exercise6[7][1], user.exercise7[7][1], user.exercise8[7][1], 
            user.exercise9[7][1], user.exercise10[7][1], user.exercise11[7][1], user.exercise12[7][1], 
            user.exercise13[7][1], user.exercise14[7][1], user.exercise15[7][1]]) === true &&
            <Link
              className='link-workout-H'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('H'); setUserId(nameUser)}}
                nameButton='Workout H'
                specificStylesButton='specificStylesButtonH'
              />
            </Link>}

            {user.exercise1[8] && whatTrainingType([user.exercise1[8][1], user.exercise2[8][1], user.exercise3[8][1], 
            user.exercise4[8][1], user.exercise5[8][1], user.exercise6[8][1], user.exercise7[8][1], user.exercise8[8][1], 
            user.exercise9[8][1], user.exercise10[8][1], user.exercise11[8][1], user.exercise12[8][1], 
            user.exercise13[8][1], user.exercise14[8][1], user.exercise15[8][1]]) === true &&
            <Link
              className='link-workout-I'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('I'); setUserId(nameUser)}}
                nameButton='Workout I'
                specificStylesButton='specificStylesButtonI'
              />
            </Link>}

            {user.exercise1[9] && whatTrainingType([user.exercise1[9][1], user.exercise2[9][1], user.exercise3[9][1], 
            user.exercise4[9][1], user.exercise5[9][1], user.exercise6[9][1], user.exercise7[9][1], user.exercise8[9][1], 
            user.exercise9[9][1], user.exercise10[9][1], user.exercise11[9][1], user.exercise12[9][1], 
            user.exercise13[9][1], user.exercise14[9][1], user.exercise15[9][1]]) === true &&
            <Link
              className='link-workout-J'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('J'); setUserId(nameUser)}}
                nameButton='Workout J'
                specificStylesButton='specificStylesButtonJ'
              />
            </Link>}

          </div>))}

          {/* Dinamic Content */}
          {dinamicUsersContents && loginValidate && dinamicUsersContents
          .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
          .map(user => (
          <div
            key={user.id}
            className='container-training-modal-trainings-users' 
          >
            {whatTrainingType([user.exercise1[0][1], user.exercise2[0][1], user.exercise3[0][1], user.exercise4[0][1], 
            user.exercise5[0][1], user.exercise6[0][1], user.exercise7[0][1], user.exercise8[0][1], user.exercise9[0][1], 
            user.exercise10[0][1], user.exercise11[0][1], user.exercise12[0][1], user.exercise13[0][1],
            user.exercise14[0][1], user.exercise15[0][1]]) === true && 
            <Link
              className='link-workout-A' 
              to='/exercises-page'
            >
              <ButtonDefault
                onClick={() => {clickButton('A'); setUserId(nameUser)}}
                nameButton='Workout A'
                specificStylesButton='specificStylesButtonA'
              />
            </Link>
            }

            {user.exercise1[1] && whatTrainingType([user.exercise1[1][1], user.exercise2[1][1], user.exercise3[1][1], user.exercise4[1][1], 
            user.exercise5[1][1], user.exercise6[1][1], user.exercise7[1][1], user.exercise8[1][1], user.exercise9[1][1], 
            user.exercise10[1][1], user.exercise11[1][1], user.exercise12[1][1], user.exercise13[1][1],
            user.exercise14[1][1], user.exercise15[1][1]]) === true &&
            <Link
              className='link-workout-B'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('B'); setUserId(nameUser)}}
                nameButton='Workout B'
                specificStylesButton='specificStylesButtonB'
              />
            </Link>}

            {user.exercise1[2] && whatTrainingType([user.exercise1[2][1], user.exercise2[2][1], user.exercise3[2][1], user.exercise4[2][1], 
            user.exercise5[2][1], user.exercise6[2][1], user.exercise7[2][1], user.exercise8[2][1], user.exercise9[2][1], 
            user.exercise10[2][1], user.exercise11[2][1], user.exercise12[2][1], user.exercise13[2][1],
            user.exercise14[2][1], user.exercise15[2][1]]) === true &&
            <Link
              className='link-workout-C'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('C'); setUserId(nameUser)}}
                nameButton='Workout C'
                specificStylesButton='specificStylesButtonC'
              />
            </Link>}
            {user.exercise1[3] && whatTrainingType([user.exercise1[3][1], user.exercise2[3][1], user.exercise3[3][1], user.exercise4[3][1], 
            user.exercise5[3][1], user.exercise6[3][1], user.exercise7[3][1], user.exercise8[3][1], user.exercise9[3][1], 
            user.exercise10[3][1], user.exercise11[3][1], user.exercise12[3][1], user.exercise13[3][1],
            user.exercise14[3][1], user.exercise15[3][1]]) === true &&
            <Link
              className='link-workout-D'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('D'); setUserId(nameUser)}}
                nameButton='Workout D'
                specificStylesButton='specificStylesButtonD'
              />
            </Link>}

            {user.exercise1[4] && whatTrainingType([user.exercise1[4][1], user.exercise2[4][1], user.exercise3[4][1], 
            user.exercise4[4][1], user.exercise5[4][1], user.exercise6[4][1], user.exercise7[4][1], user.exercise8[4][1], 
            user.exercise9[4][1], user.exercise10[4][1], user.exercise11[4][1], user.exercise12[4][1], 
            user.exercise13[4][1], user.exercise14[4][1], user.exercise15[4][1]]) === true &&
            <Link
              className='link-workout-E'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('E'); setUserId(nameUser)}}
                nameButton='Workout E'
                specificStylesButton='specificStylesButtonE'
              />
            </Link>}

            {user.exercise1[5] && whatTrainingType([user.exercise1[5][1], user.exercise2[5][1], user.exercise3[5][1], 
            user.exercise4[5][1], user.exercise5[5][1], user.exercise6[5][1], user.exercise7[5][1], user.exercise8[5][1], 
            user.exercise9[5][1], user.exercise10[5][1], user.exercise11[5][1], user.exercise12[5][1], 
            user.exercise13[5][1], user.exercise14[5][1], user.exercise15[5][1]]) === true &&
            <Link
              className='link-workout-F'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('F'); setUserId(nameUser)}}
                nameButton='Workout F'
                specificStylesButton='specificStylesButtonF'
              />
            </Link>}

            {user.exercise1[6] && whatTrainingType([user.exercise1[6][1], user.exercise2[6][1], user.exercise3[6][1], 
            user.exercise4[6][1], user.exercise5[6][1], user.exercise6[6][1], user.exercise7[6][1], user.exercise8[6][1], 
            user.exercise9[6][1], user.exercise10[6][1], user.exercise11[6][1], user.exercise12[6][1], 
            user.exercise13[6][1], user.exercise14[6][1], user.exercise15[6][1]]) === true &&
            <Link
              className='link-workout-G'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('G'); setUserId(nameUser)}}
                nameButton='Workout G'
                specificStylesButton='specificStylesButtonG'
              />
            </Link>}

            {user.exercise1[7] && whatTrainingType([user.exercise1[7][1], user.exercise2[7][1], user.exercise3[7][1], 
            user.exercise4[7][1], user.exercise5[7][1], user.exercise6[7][1], user.exercise7[7][1], user.exercise8[7][1], 
            user.exercise9[7][1], user.exercise10[7][1], user.exercise11[7][1], user.exercise12[7][1], 
            user.exercise13[7][1], user.exercise14[7][1], user.exercise15[7][1]]) === true &&
            <Link
              className='link-workout-H'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('H'); setUserId(nameUser)}}
                nameButton='Workout H'
                specificStylesButton='specificStylesButtonH'
              />
            </Link>}

            {user.exercise1[8] && whatTrainingType([user.exercise1[8][1], user.exercise2[8][1], user.exercise3[8][1], 
            user.exercise4[8][1], user.exercise5[8][1], user.exercise6[8][1], user.exercise7[8][1], user.exercise8[8][1], 
            user.exercise9[8][1], user.exercise10[8][1], user.exercise11[8][1], user.exercise12[8][1], 
            user.exercise13[8][1], user.exercise14[8][1], user.exercise15[8][1]]) === true &&
            <Link
              className='link-workout-I'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('I'); setUserId(nameUser)}}
                nameButton='Workout I'
                specificStylesButton='specificStylesButtonI'
              />
            </Link>}

            {user.exercise1[9] && whatTrainingType([user.exercise1[9][1], user.exercise2[9][1], user.exercise3[9][1], 
            user.exercise4[9][1], user.exercise5[9][1], user.exercise6[9][1], user.exercise7[9][1], user.exercise8[9][1], 
            user.exercise9[9][1], user.exercise10[9][1], user.exercise11[9][1], user.exercise12[9][1], 
            user.exercise13[9][1], user.exercise14[9][1], user.exercise15[9][1]]) === true &&
            <Link
              className='link-workout-J'
              to='/exercises-page'
            >
              <ButtonDefault 
                onClick={() => {clickButton('J'); setUserId(nameUser)}}
                nameButton='Workout J'
                specificStylesButton='specificStylesButtonJ'
              />
            </Link>}

          </div>))}
        
        </div>     

      </Modal>

    </div>
          
  )

}

export default TrainingModal;
