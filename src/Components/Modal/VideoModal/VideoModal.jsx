import './VideoModal.css';
import Modal from 'react-modal';
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
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

  const { staticUsersContents, dynamicUsersContents, nameUser, loginValidate } = useContext(DataContext)

  const { compactUserName, selectIdVideoModal, setSelectIdVideoModal, setVisibleVideoYT, setSelectContainerVideoYTPosition,
    setAbleVideoBanner, setAbleBanner
  } = useOutletContext()
  
  const [modalIsOpen, setModalIsOpen] = useState(false)
    
  const [openVideoModal, setOpenVideoModal] = useState(false)

  const [errorMessageVideoModal, setErrorMessageVideoModal] = useState('')

  const [selectedRadio, setSelectedRadio] = useState(null)

  function openModal() {
    setModalIsOpen(true)
    setVisibleVideoYT(false)
    selectedRadio === null && captureValueRadioInput('', 1)

  }

  function closeModal() {
    setModalIsOpen(false)
    setErrorMessageVideoModal('')

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
      setAbleVideoBanner(true)
      setAbleBanner(false)

    } else {
      setErrorMessageVideoModal('select a video')

    }

  }

  function captureValueRadioInput(e, id) {
    setSelectedRadio(id)

    id === 1 && setSelectContainerVideoYTPosition('select-video-iframe-initial-left-center-right-position')
    id === 2 && setSelectContainerVideoYTPosition('select-video-iframe-top-center-position')
    id === 3 && setSelectContainerVideoYTPosition('select-video-iframe-top-right-position')
    id === 4 && setSelectContainerVideoYTPosition('select-video-iframe-bottom-left-position')
    id === 5 && setSelectContainerVideoYTPosition('select-video-iframe-bottom-center-position')
    id === 6 && setSelectContainerVideoYTPosition('select-video-iframe-bottom-right-position')

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
              specificStyleLabel={selectedRadio === 1 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='top-left position'
            />

            <InputDefault
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => captureValueRadioInput(e, 1)}
              checked={selectedRadio === 1}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 2)} 
              specificStyleLabel={selectedRadio === 2 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='top-center position' 
            />

            <InputDefault 
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => captureValueRadioInput(e, 2)}
              checked={selectedRadio === 2}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 3)}
              specificStyleLabel={selectedRadio === 3 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='top-right position' 
            />

            <InputDefault
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => captureValueRadioInput(e, 3)}
              checked={selectedRadio === 3}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 4)}
              specificStyleLabel={selectedRadio === 4 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='bottom-left position' 
            />

            <InputDefault
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => captureValueRadioInput(e, 4)}
              checked={selectedRadio === 4}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 5)} 
              specificStyleLabel={selectedRadio === 5 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='bottom-center position' 
            />

            <InputDefault
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => captureValueRadioInput(e, 5)}
              checked={selectedRadio === 5}
            />

          </div>

          <div className='container-radios-inputs-label-input'>
            <LabelDefault
              onClick={(e) => captureValueRadioInput(e, 6)} 
              specificStyleLabel={selectedRadio === 6 ? 'selectSpecificStyleLabel' : 'specificStyleLabel'}
              nameLabel='bottom-right position' 
            />

            <InputDefault 
              typeInput='radio'
              specificStylesInput='container-radios-inputs-input'
              onChange={(e) => captureValueRadioInput(e, 6)}
              checked={selectedRadio === 6}
            />

          </div>

        </div>

        <div className='videos-selects'>
          <TbTriangleInvertedFilled className={`videos-selects-icon ${openVideoModal ? 
            "videos-selects-icon-animation" : ""}`} 
          />

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
              disabled
              className='videos-selects-select-option'>
                select video
            </option>

            {/* Static and Dynamic User Contents */}
            {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
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
