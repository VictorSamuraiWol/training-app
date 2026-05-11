import './VideoModal.css';
import Modal from 'react-modal';
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import soundButton from '../../../assets/audios/click-sound.mp3';
import bgVideoModal from '../../../assets/images/bg-video-modal.png';
import LabelDefault from '../../LabelDefault/LabelDefault';
import InputDefault from '../../InputDefault/InputDefault';
import { useContext, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti"
import { GiClick } from "react-icons/gi";
import { DataContext } from '../../DataContext/DataContext';
import { AiFillYoutube } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TbTriangleInvertedFilled } from "react-icons/tb";

Modal.setAppElement('#root')

function VideoModal({ specificsStylesTogglesVideoModal }) {

  const { staticUsersContents, dinamicUsersContents, nameUser, loginValidate } = useContext(DataContext)

  const { compactUserName, selectIdVideoModal, setSelectIdVideoModal, setVisibleVideoYT, setSelectContainerVideoYTPosition
  } = useOutletContext()
  
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const clickSoundButton = new Audio(soundButton)
    
  const [openVideoModal, setOpenVideoModal] = useState(false)

  const [errorMessageVideoModal, setErrorMessageVideoModal] = useState('')

  const [radioCheckedInput1, setRadioCheckedInput1] = useState(true)
  const [radioCheckedInput2, setRadioCheckedInput2] = useState(false)
  const [radioCheckedInput3, setRadioCheckedInput3] = useState(false)
  const [radioCheckedInput4, setRadioCheckedInput4] = useState(false)
  const [radioCheckedInput5, setRadioCheckedInput5] = useState(false)
  const [radioCheckedInput6, setRadioCheckedInput6] = useState(false)

  function openModal() {
    setModalIsOpen(true)
    setVisibleVideoYT(false)
    clickSoundButton.play()

  }

  function closeModal() {
    setModalIsOpen(false)
    setErrorMessageVideoModal('')
    clickSoundButton.play()

  }

  function onChangeSelectVideoModal(e) {
    setSelectIdVideoModal(e.target.value)
    setOpenVideoModal(false)
    setErrorMessageVideoModal('')

  }

  function confirmVideoYT() {
    if (selectIdVideoModal !== '') {
      setVisibleVideoYT(true)
      setModalIsOpen(false)

    } else {
      setErrorMessageVideoModal('select a video')

    }

  }

  function captureValueRadioInput(e, id) {
    if (id === 1) {
      setSelectContainerVideoYTPosition('select-video-iframe-initial-left-center-right-position')
      setRadioCheckedInput1(true)
      setRadioCheckedInput2(false)
      setRadioCheckedInput3(false)
      setRadioCheckedInput4(false)
      setRadioCheckedInput5(false)
      setRadioCheckedInput6(false)

    } else if (id === 2) {
      setSelectContainerVideoYTPosition('select-video-iframe-top-center-position')
      setRadioCheckedInput1(false)
      setRadioCheckedInput2(true)
      setRadioCheckedInput3(false)
      setRadioCheckedInput4(false)
      setRadioCheckedInput5(false)
      setRadioCheckedInput6(false)

    } else if (id === 3) {
      setSelectContainerVideoYTPosition('select-video-iframe-top-right-position')
      setRadioCheckedInput1(false)
      setRadioCheckedInput2(false)
      setRadioCheckedInput3(true)
      setRadioCheckedInput4(false)
      setRadioCheckedInput5(false)
      setRadioCheckedInput6(false)

    } else if (id === 4) {
      setSelectContainerVideoYTPosition('select-video-iframe-bottom-left-position')
      setRadioCheckedInput1(false)
      setRadioCheckedInput2(false)
      setRadioCheckedInput3(false)
      setRadioCheckedInput4(true)
      setRadioCheckedInput5(false)
      setRadioCheckedInput6(false)

    } else if (id === 5) {
      setSelectContainerVideoYTPosition('select-video-iframe-bottom-center-position')
      setRadioCheckedInput1(false)
      setRadioCheckedInput2(false)
      setRadioCheckedInput3(false)
      setRadioCheckedInput4(false)
      setRadioCheckedInput5(true)
      setRadioCheckedInput6(false)

    } else if (id === 6) {
      setSelectContainerVideoYTPosition('select-video-iframe-bottom-right-position')
      setRadioCheckedInput1(false)
      setRadioCheckedInput2(false)
      setRadioCheckedInput3(false)
      setRadioCheckedInput4(false)
      setRadioCheckedInput5(false)
      setRadioCheckedInput6(true)

    }

  }

  return (
    <div className={`container-video-modal`}>
      <AiFillYoutube
        onClick={openModal}
        className={`image-react-video-modal ${specificsStylesTogglesVideoModal}`}
      />

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName='modalVideoOverlay'
          className='modalVideoContent'
      > 
        <div className='container-video-modal-delete'>
          <h1 className='container-video-modal-delete-text'>YouTube</h1>

          <TiDeleteOutline
              onClick={closeModal}
              className='container-video-modal-delete-icon'
          /> 

        </div>

        <div className='container-radios-inputs'>
          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 1)}
              specificStyleLabel={radioCheckedInput1 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='top-left position'
            />

            <InputDefault
              onClick={(e) => captureValueRadioInput(e, 1)}
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => setRadioCheckedInput1(e.target.checked)}
              checked={radioCheckedInput1}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 2)} 
              specificStyleLabel={radioCheckedInput2 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='top-center position' 
            />

            <InputDefault 
              onClick={(e) => captureValueRadioInput(e, 2)}
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => setRadioCheckedInput2(e.target.checked)}
              checked={radioCheckedInput2}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 3)}
              specificStyleLabel={radioCheckedInput3 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='top-right position' 
            />

            <InputDefault
              onClick={(e) => captureValueRadioInput(e, 3)}
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => setRadioCheckedInput3(e.target.checked)}
              checked={radioCheckedInput3}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 4)} 
              specificStyleLabel={radioCheckedInput4 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='bottom-left position' 
            />

            <InputDefault
              onClick={(e) => captureValueRadioInput(e, 4)} 
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => setRadioCheckedInput4(e.target.checked)}
              checked={radioCheckedInput4}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 5)} 
              specificStyleLabel={radioCheckedInput5 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='bottom-center position' 
            />

            <InputDefault
              onClick={(e) => captureValueRadioInput(e, 5)} 
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => setRadioCheckedInput5(e.target.checked)}
              checked={radioCheckedInput5}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 6)} 
              specificStyleLabel={radioCheckedInput6 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='bottom-right position' 
            />

            <InputDefault
              onClick={(e) => captureValueRadioInput(e, 6)} 
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => setRadioCheckedInput6(e.target.checked)}
              checked={radioCheckedInput6}
            />

          </div>

        </div>

        <div className='videos-selects'>
          <TbTriangleInvertedFilled className={`videos-selects-icon ${openVideoModal ? "videos-selects-icon-animation" : ""}`} />

          <select 
            value={selectIdVideoModal}
            onFocus={() => setOpenVideoModal(true)}
            onMouseDown={() => setOpenVideoModal(true)}
            onBlur={() => setOpenVideoModal(false)}
            onChange={onChangeSelectVideoModal}
            className='videos-selects-select'
          >
            <option 
              value='' 
              className='videos-selects-select-option'>select video
            </option>

            {/* Static Content */}
            {staticUsersContents && loginValidate && staticUsersContents
            .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
            .map(user => (
              user.videoYT && user.videoYT.map((video, indice) => 
                video && <option
                key={indice}
                value={video.id}
                className='videos-selects-select-option'
                >
                  {compactUserName(video.name, 60)}

                </option>)
            ))}

            {/* Dinamic Content */}
            {dinamicUsersContents && loginValidate && dinamicUsersContents
            .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
            .map(user => (
              user.videoYT && user.videoYT.map((video, indice) => 
                video && <option
                key={indice}
                value={video.id}
                className='videos-selects-select-option'
                >
                  {compactUserName(video.name, 60)}

                </option>)
            ))}

          </select>

        </div>

        <div className='videos-target'>
          {!selectIdVideoModal &&
          <img
            className='bg-video-modal-style'
            src={bgVideoModal}
            alt='img-bg-video-modal'
          />}

          {selectIdVideoModal && <iframe
            className='videos-target-iframe'
            src={`https://www.youtube.com/embed/${selectIdVideoModal}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />}

        </div>

        <div className='container-buttons'>
          <div className='container-buttons-confirm-button'>
            <ButtonDefault 
              onClick={confirmVideoYT}
              specificStylesButton='container-video-modal-button'
              imageReact={<FaCheck className='iconCheckVideoModal' />}
            />

            <span className='error-message-video-modal'>{errorMessageVideoModal}</span>
          </div>

          <ButtonDefault 
            onClick={closeModal}
            specificStylesButton='container-video-modal-button'
            imageReact={<MdCancel className='iconCancelVideoModal' />}
          />

        </div>

      </Modal>

    </div>

  )

}

export default VideoModal;
