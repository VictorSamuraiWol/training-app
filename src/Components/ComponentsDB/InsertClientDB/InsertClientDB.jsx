import './InsertClientDB.css';
import Modal from 'react-modal'
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import LabelDefault from '../../LabelDefault/LabelDefault';
import InputDefault from '../../InputDefault/InputDefault';
import SelectDefault from '../../SelectDefault/SelectDefault';
import DescriptionIconsMenu from '../../DescriptionIconsMenu/DescriptionIconsMenu';
import { useEffect, useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti"
import { IoIosCreate } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useOutletContext } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { insertClient } from '../../Supabase/supabaseRequests/supabaseRequests'

Modal.setAppElement('#root')

function InsertClientDBModal({ onMouseOver, onMouseLeave, ableDescriptionIconsMenu, descriptionIconName }) {

  const { numImagesProfiles, numAudios, numGifs } = useOutletContext()
  
  const [newNameClient, setNewNameClient] = useState('')
  const [newWeightClient, setNewWeightClient] = useState('')
  const [newHeightClient, setNewHeightClient] = useState('')
  const [newPasswordClient, setNewPasswordClient] = useState('')
  const [newImageProfileClient, setNewImageProfileClient] = useState('')
  const [newAudioClient, setNewAudioClient] = useState('')
  const [newYoutubeTitleClient, setNewYoutubeTitleClient] = useState('')
  const [newYoutubeIDClient, setNewYoutubeIDClient] = useState('')
  const [newExerciseClient, setNewExerciseClient] = useState('')
  const [newGifClient, setNewGifClient] = useState('')
  const [newTitleNutritionClient, setNewTitleNutritionClient] = useState('')
  const [newTextNutritionClient, setNewTextNutritionClient] = useState('')
  const [newNotesClient, setNewNotesClient] = useState('')
  const [newTypeClient, setNewTypeClient] = useState('')

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [fieldsExercises, setFieldsExercises] = useState([{id: 0, letter: 'A'}])
  const [fieldsExercise, setFieldsExercise] = useState([{id: 0, value1: '', value2: '', position: 'A0'}])
  const [fieldsVideos, setFieldsVideos] = useState([{id: 0, value1: '', value2: ''}])
  const [fieldsNutrition, setFieldsNutrition] = useState([{id: 0, value1: '', value2: ''}])
  const [fieldsNotes, setFieldsNotes] = useState([{id: 0, value1: '', value2: null}])

  useEffect(() => {
    setNewYoutubeTitleClient(fieldsVideos.value1)
    setNewYoutubeIDClient(fieldsVideos.value2)
    setNewExerciseClient(fieldsExercise.value1)
    setNewGifClient(fieldsExercise.value2)
    setNewTitleNutritionClient(fieldsNutrition.value1)
    setNewTextNutritionClient(fieldsNutrition.value2)
    setNewNotesClient(fieldsNotes.value1)

  }, [fieldsVideos, fieldsExercise, fieldsNutrition, fieldsNotes])

  function openModal() {
    setModalIsOpen(true)

  }

  function closeModal() {
    setModalIsOpen(false)

  }

  // add field
  function addField(setFields, field, value1, value2) {
    const nextIndex = field.length      
    const letter = String.fromCharCode(65 + nextIndex)

    if (value1 || value2 || value1 === '' || value2 === '') {
      setFields([...field, {id: nextIndex, value1: value1, value2: value2}])

    } else {
      setFields([...field, {id: nextIndex, letter: letter}])

    }
    
  }

  // input field in each exercise
  function addFieldExercise(setFields, field, e, letter) {
    const nextIndex = fieldsExercise.filter(field => field.position.includes(letter)).length

    setFields([...field, {id: nextIndex, value: '', position: `${letter}${nextIndex}`}])

  }

  // remove last field and also specific all inputs fields the type training
  function removeLastField(setFields, removeAllInputs, fieldsExercise) {
    const lastTypeTarget = fieldsExercises.at(-1).value

    setFields(prevFields => prevFields.slice(0, -1))

    fieldsExercise && removeAllInputs(fieldsExercise.filter(field => !field.position?.includes(lastTypeTarget)))

  }

  // remove last field in relation to type training
  function removeLastFieldExercise(setFields, field, e) {
    const typeTarget = e.currentTarget.parentElement.parentElement.parentElement.children[0].children[1].textContent
    const lastIndex = field.findLastIndex(item => item.position.startsWith(typeTarget))

    setFields(field.filter((_, index) => index !== lastIndex))

  }

  async function onSaveNewClient(e) {
    e.preventDefault()

    // data new client
    const newClient = {
      name : newNameClient,
      weight: newWeightClient,
      height: newHeightClient,
      exercises: // array fieldsExercises
                fieldsExercises.map(field => (
                [{type: field.letter}, {exercises:
                                          // array fieldsExercise
                                          fieldsExercise.filter(exercise => exercise.position.includes(field.letter))
                                          .map(exercise => (
                                          [{exercise: exercise.value1}, {gif: exercise.value2}]
                                          ))
                                        }
                ])),
      nutrition:  // array fieldsNutrition
                  fieldsNutrition.map(nutri => (
                  [nutri.value1, [nutri.value2]]
                  )),
      notes:  // array fieldsNotes
              fieldsNotes.map(note => (
              [note.value1]
              )),
      password: newPasswordClient,
      image_profile: newImageProfileClient,
      audio: newAudioClient,
      video_yt: // array fieldsVideos
                fieldsVideos.map(video => (
                {name: video.value1, id: video.value2}
                ))    
    }

    if (newTypeClient === 'json') {
      try {
        const response = await fetch('http://localhost:3001/clients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newClient)

        })

        if (!response.ok) {
          throw new Error('Failed to create client')

        } else {
          console.log('Create client', 'client: ', newClient)

        }

      } catch (error) {
        console.error(error)

      }

    } else if (newTypeClient === 'db') {
      insertClient(newClient)

    }

  }

  // get values and put in new array of objects
  function onChangeArray(id, setArray, newValue1, newValue2, position) {
    if (newValue1) {
      !position && setArray(prev =>
        prev.map(field =>
          field.id === id
          ? {id: id, value1: newValue1, value2: field.value2 !== undefined ? field.value2 : null}
          : field
  
        )
      )

      position && setArray(prev =>
        prev.map(field =>
          field.position === position
          ? {id: id, value1: newValue1, value2: field.value2, position: position ? position : null}
          : field
  
        )
      )

    } else if (newValue2) {
      !position && setArray(prev =>
        prev.map(field =>
          field.id === id
          ? {id: id, value1: field.value1, value2: newValue2}
          : field
  
        )
      )

      position && setArray(prev =>
        prev.map(field =>
          field.position === position
          ? {id: id, value1: field.value1, value2: newValue2, position: position ? position : null}
          : field
  
        )
      )
      
    }

  }

  return (
    <div className='container-insert-client'>
      <DescriptionIconsMenu 
        ableDescriptionIconsMenu={ableDescriptionIconsMenu}
        descriptionIconName={descriptionIconName}
        name='Insert Client' 
      />

      <IoIosCreate 
        onClick={openModal}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className='insert-user-icon'
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        overlayClassName='modalInsertClientOverlay'
        className='modalInsertClientContent'
      > 
        <div className='container-insert-client-modal-delete'>
          <h1 className='container-insert-client-modal-delete-text'>Insert Client</h1>

          <TiDeleteOutline
            onClick={closeModal}
            className='container-insert-client-modal-delete-icon'
          />

        </div>

        <form
          onSubmit={onSaveNewClient}
          className='form-insert-client'
        >
          {/* info */}
          <div className='container-form-insert-client-info'>
            <div className='form-insert-client-info-name'>
              <LabelDefault nameLabel='Name:' />
              <InputDefault
                value={newNameClient}
                onChange={(e) => setNewNameClient(e.target.value)}
              />

            </div>

            <div className='container-form-insert-client-more-info'>
              <div className='form-insert-client-info-pass'>
                <LabelDefault nameLabel='Password:' />
                <InputDefault 
                  value={newPasswordClient}
                  onChange={(e) => setNewPasswordClient(e.target.value)}
                />

              </div>

              <div className='form-insert-client-info-weight'>
                <LabelDefault nameLabel='Weight:' />
                <InputDefault 
                  value={newWeightClient}
                  onChange={(e) => setNewWeightClient(e.target.value)}
                />
              
              </div>

              <div className='form-insert-client-info-height'>
                <LabelDefault nameLabel='Height:' />
                <InputDefault 
                  value={newHeightClient}
                  onChange={(e) => setNewHeightClient(e.target.value)}
                />

              </div>

              <div className='form-insert-client-info-image'>
                <LabelDefault nameLabel='Image Profile:' />
                <SelectDefault 
                  selectValue={newImageProfileClient}
                  setSelectValue={setNewImageProfileClient}
                  optionDisabledName='Select Image' 
                  specificArray={numImagesProfiles} 
                />

              </div>

              <div className='form-insert-client-info-audio'>
                <LabelDefault nameLabel='Audio:' />
                <SelectDefault
                  selectValue={newAudioClient}
                  setSelectValue={setNewAudioClient}
                  optionDisabledName='Select Audio' 
                  specificArray={numAudios} 
                />

              </div>

              <div className='container-form-insert-client-info-youtube-plus-minus'>
                <div className='form-insert-client-info-youtube-text-plus-minus-icons'>
                  <LabelDefault nameLabel='YouTube' />

                  <div className='form-insert-client-info-youtube-plus-minus-icons'>
                    <CiCirclePlus
                      onClick={() => addField(setFieldsVideos, fieldsVideos)}
                      className='insert-client-icons'
                    />

                    <CiCircleMinus
                      onClick={() => removeLastField(setFieldsVideos)}
                      className='insert-client-icons'
                    />

                  </div>

                </div>

                {fieldsVideos.map(field => (
                  <div
                    key={field.id} 
                    className='form-insert-client-info-youtube-title-id'
                  >
                    <div className='form-insert-client-info-youtube-title'>
                      <LabelDefault nameLabel='Title Youtube:' />
                      <InputDefault 
                        key={field.id}
                        value={newYoutubeTitleClient}
                        onChange={(e) => onChangeArray(field.id, setFieldsVideos, e.target.value, null)}
                      />

                    </div>

                    <div className='form-insert-client-info-youtube-id'>
                      <LabelDefault nameLabel='ID Emded Youtube:' />
                      <InputDefault
                        key={field.id}
                        value={newYoutubeIDClient}
                        onChange={(e) => onChangeArray(field.id, setFieldsVideos, null, e.target.value)}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* exercises */}
          <div
            className='form-insert-client-exercises'
          >
            <div className='form-insert-client-exercises-label-plus-minus'>
              <LabelDefault nameLabel='Exercises:' />

              <div className='form-insert-client-exercises-label-plus-minus-icons'>
                <CiCirclePlus
                  onClick={() => addField(setFieldsExercises, fieldsExercises)}
                  className='insert-client-icons'
                />

                <CiCircleMinus
                  onClick={() => removeLastField(setFieldsExercises, setFieldsExercise, fieldsExercise)}
                  className='insert-client-icons'
                />

              </div>
              
            </div>

            {fieldsExercises.map(field => (
            <div
              key={field.id}
              className='container-form-insert-client-efieldercises-type-exercise'
            >
              <div className='form-insert-client-exercises-type-exercise'>
                <div className='form-insert-client-exercises-type-exercise-text'>
                  <p>Type:</p>
                  <p>{field.letter}</p>

                </div>

                <div className='container-form-insert-client-exercises-exercise-icons'>
                  <LabelDefault nameLabel='Exercise:' />

                  <div className='container-form-insert-client-exercise-input-plus-minus-icons'>
                    <CiCirclePlus
                      onClick={(e) => addFieldExercise(setFieldsExercise, fieldsExercise, e, field.letter)}
                      className='insert-client-icons'
                    />

                    <CiCircleMinus
                      onClick={(e) => removeLastFieldExercise(setFieldsExercise, fieldsExercise, e)}
                      className='insert-client-icons'
                    />

                  </div>

                </div>

                {fieldsExercise.filter(exercise => exercise.position.includes(field.letter))
                .map(exercise => (
                  <div
                    key={exercise.id}
                    className='container-insert-client-input-exercise-gif'
                  >
                    <InputDefault
                      value={newExerciseClient}
                      onChange={(e) => onChangeArray(exercise.id, setFieldsExercise, e.target.value, null, `${field.letter}${exercise.id}`)}
                    />

                    <div className='insert-client-input-gif'>
                      <LabelDefault nameLabel='Gif:' />
                      <SelectDefault
                        selectValue={newGifClient}
                        setSelectValue={setNewGifClient}
                        onChangeOut={(e) => onChangeArray(exercise.id, setFieldsExercise, null, e.target.value, `${field.letter}${exercise.id}`)}
                        optionDisabledName='Select Gif' 
                        specificArray={numGifs} 
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>
          ))}

          </div>

          {/* nutrition */}
          <div className='container-form-insert-client-nutrition'>
            <div className='container-form-insert-client-nutrition-label-plus-minus-icons'>
              <LabelDefault nameLabel='Nutrition:' />

              <div className='form-insert-client-nutrition-label-plus-minus-icons'>
                <CiCirclePlus
                  onClick={() => addField(setFieldsNutrition, fieldsNutrition, '', '')}
                  className='insert-client-icons'
                />

                <CiCircleMinus
                  onClick={() => removeLastField(setFieldsNutrition)}
                  className='insert-client-icons'
                />

              </div>

            </div>

            {fieldsNutrition.map(field => (
              <div
                key={field.id} 
                className='container-form-insert-client-nutrition-type-nutri'
              >
                <div className='form-insert-client-nutrition-type-text'>
                  <LabelDefault nameLabel='Type:' />
                  <InputDefault
                    value={newTitleNutritionClient}
                    onChange={(e) => onChangeArray(field.id, setFieldsNutrition, e.target.value, null)}
                  />

                </div>

                <div className='form-insert-client-nutrition-nutri-text'>
                  <LabelDefault nameLabel='Nutri:' />
                  <InputDefault 
                    value={newTextNutritionClient}
                    onChange={(e) => onChangeArray(field.id, setFieldsNutrition, null, e.target.value)}
                  />

                </div>

              </div>
            ))}


          </div>
          
          {/* notes */}
          <div className='container-form-insert-client-notes'>
            <div className='container-form-insert-client-notes-label-plus-minus-icons'>
              <LabelDefault nameLabel='Notes:' />

              <div className='form-insert-client-notes-label-plus-minus-icons'>
                <CiCirclePlus
                  onClick={() => addField(setFieldsNotes, fieldsNotes, '', null)}
                  className='insert-client-icons'
                />

                <CiCircleMinus
                  onClick={() => removeLastField(setFieldsNotes)}
                  className='insert-client-icons'
                />

              </div>

            </div>

            {fieldsNotes.map(field => (
              <div
                key={field.id}
                className='container-insert-client-input-exercise-gif'
              >
                <InputDefault 
                  value={newNotesClient}
                  onChange={(e) => onChangeArray(field.id, setFieldsNotes, e.target.value, null)}
                />

              </div>
            ))}

          </div>

          {/* client type */}
          <div className='container-client-type'>
            <LabelDefault nameLabel='Client Type:' />

            <div className='container-client-type-json'>
              <InputDefault
                value='json'
                onChange={(e) => setNewTypeClient(e.target.value)}
                name='typeClient'
                typeInput='radio'
              />
              <LabelDefault nameLabel='Json' />

            </div>

            <div className='container-client-type-db'>
              <InputDefault
                value='db'
                onChange={(e) => setNewTypeClient(e.target.value)}
                name='typeClient'
                typeInput='radio' 
              />
              <LabelDefault nameLabel='DB' />

            </div>

          </div>

          <div className='container-insert-client-buttons'>
            <ButtonDefault 
              specificStylesButton='insert-client-button' 
              imageReact={<FaCheck />} 
              typeButton='submit'
            />
            <ButtonDefault
              onClick={closeModal}
              specificStylesButton='insert-client-button' 
              imageReact={<MdCancel />} 
              typeButton='button' 
            />

          </div>

        </form>

      </Modal>

    </div>

  )

}

export default InsertClientDBModal;
