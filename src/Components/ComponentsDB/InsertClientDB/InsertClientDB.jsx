import './InsertClientDB.css';
import Modal from 'react-modal'
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import LabelDefault from '../../LabelDefault/LabelDefault';
import InputDefault from '../../InputDefault/InputDefault';
import SelectDefault from '../../SelectDefault/SelectDefault';
import DescriptionIconsMenu from '../../DescriptionIconsMenu/DescriptionIconsMenu';
import { useState } from 'react';
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

  const { imagesProfilesList, audiosList, gifsList } = useOutletContext()
  
  const [newNameClient, setNewNameClient] = useState('')
  const [newWeightClient, setNewWeightClient] = useState('')
  const [newHeightClient, setNewHeightClient] = useState('')
  const [newPasswordClient, setNewPasswordClient] = useState('')
  const [newImageProfileClient, setNewImageProfileClient] = useState('')
  const [newAudioClient, setNewAudioClient] = useState('')
  const [newTypeClient, setNewTypeClient] = useState('')
  const [videosList, setVideosList] = useState([{id: 0, value1: '', value2: ''}])
  const [exercisesList, setExercisesList] = useState([{id: 0, letter: 'A'}])
  const [exerciseList, setExerciseList] = useState([{id: 0, value1: '', value2: '', position: 'A0'}])
  const [nutritionList, setNutritionList] = useState([{id: 0, value1: '', value2: ''}])
  const [notesList, setNotesList] = useState([{id: 0, value1: ''}])
  const [errorMessageInsertClient, setErrorMessageInsertClient] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [voidField, setVoidField] = useState({
    newName: false,
    newPassword: false,
    newWeight: false,
    newHeight: false,
    newExercise: false,
    newGif: false,
    newType: false
  })

  function validateField() {
    const newVoidField = {
      newName: newNameClient?.trim() === '',
      newPassword: newPasswordClient?.trim() === '',
      newWeight: newWeightClient?.trim() === '',
      newHeight: newHeightClient?.trim() === '',
      newExercise: exerciseList[0].value1?.trim() === '',
      newGif: exerciseList[0].value2?.trim() === '',
      newType: newTypeClient?.trim() === ''
    }

    setVoidField(newVoidField)

    return !Object.values(newVoidField).some(Boolean)

  }

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
    const nextIndex = exerciseList.filter(field => field.position.includes(letter)).length

    setFields([...field, {id: nextIndex, value: '', position: `${letter}${nextIndex}`}])

  }

  // remove last field and also specific all inputs fields the type training
  function removeLastField(setFields, removeAllInputs, exerciseList) {
    const lastTypeTarget = exercisesList.at(-1).value

    setFields(prevFields => prevFields.slice(0, -1))

    exerciseList && removeAllInputs(exerciseList.filter(field => !field.position?.includes(lastTypeTarget)))

  }

  // remove last field in relation to type training
  function removeLastFieldExercise(setFields, field, e) {
    const typeTarget = e.currentTarget.parentElement.parentElement.parentElement.children[0].children[1].textContent
    const lastIndex = field.findLastIndex(item => item.position.startsWith(typeTarget))

    setFields(field.filter((_, index) => index !== lastIndex))

  }

  async function onSaveNewClient(e) {
    e.preventDefault()

    const isValid = validateField()

    if (!isValid) {
      setErrorMessageInsertClient("Please fill in all required fields.")
      setTimeout(() => setErrorMessageInsertClient(null), 3000)

    } else {
      // data new client
      const newClient = {
        name : newNameClient,
        weight: newWeightClient,
        height: newHeightClient,
        exercises: // array exercisesList
                  exercisesList.map(field => (
                  [{type: field.letter}, {exercises:
                                            // array exerciseList
                                            exerciseList.filter(exercise => exercise.position.includes(field.letter))
                                            .map(exercise => (
                                            [{exercise: exercise.value1}, {gif: exercise.value2}]
                                            ))
                                          }
                  ])),
        nutrition:  // array nutritionList
                    nutritionList.map(nutri => (
                    [nutri.value1, [nutri.value2]]
                    )),
        notes:  // array notesList
                notesList.map(note => (
                [note.value1]
                )),
        password: newPasswordClient,
        image_profile: newImageProfileClient,
        audio: newAudioClient,
        video_yt: // array videosList
                  videosList.map(video => (
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
            throw Error
  
          } else {
            console.log('Create client', 'client: ', newClient)
  
          }
  
        } catch (error) {
          setErrorMessageInsertClient('Error inserting client into Json.')
          setTimeout(() => setErrorMessageInsertClient(null), 3000)
          console.error(error)
  
        }
  
      } else if (newTypeClient === 'db') {
        insertClient(newClient, setErrorMessageInsertClient)
  
      }

    }


  }

  // get values and put in new array of objects
  function onChangeArray(id, setArray, newValue1, newValue2, position) {
    if (newValue1 !== null && newValue1 !== undefined) {
      if (!position) {
        setArray(prev =>
          prev.map(field =>
            field.id === id
              ? { id: id, value1: newValue1, value2: field.value2 !== undefined ? field.value2 : null }
              : field
          )
        )

      } else {
        setArray(prev =>
          prev.map(field =>
            field.position === position
              ? { id: id, value1: newValue1, value2: field.value2, position: position }
              : field
          )
        )

      }

    } else if (newValue2 !== null && newValue2 !== undefined) {
      if (!position) {
        setArray(prev =>
          prev.map(field =>
            field.id === id
              ? { id: id, value1: field.value1, value2: newValue2 }
              : field
          )
        )

      } else {
        setArray(prev =>
          prev.map(field =>
            field.position === position
              ? { id: id, value1: field.value1, value2: newValue2, position: position }
              : field
          )
        )

      }

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
              <LabelDefault 
                nameLabel='Name:*' 
                specificStyleLabel={voidField.newName && newNameClient?.trim() === '' ? 'color-error-input' : null}
              />
              <InputDefault
                value={newNameClient}
                onChange={(e) => setNewNameClient(e.target.value)}
                specificStylesInput={voidField.newName && newNameClient?.trim() === '' ? 'border-error-input' : null}
              />

            </div>

            <div className='container-form-insert-client-more-info'>
              <div className='form-insert-client-info-pass'>
                <LabelDefault 
                  nameLabel='Password:*' 
                  specificStyleLabel={voidField.newPassword && newPasswordClient?.trim() === '' ? 'color-error-input' : null}
                />
                <InputDefault 
                  value={newPasswordClient}
                  onChange={(e) => setNewPasswordClient(e.target.value)}
                  specificStylesInput={voidField.newPassword && newPasswordClient?.trim() === '' ? 'border-error-input' : null}
                />

              </div>

              <div className='form-insert-client-info-weight'>
                <LabelDefault 
                  nameLabel='Weight:*' 
                  specificStyleLabel={voidField.newWeight && newWeightClient?.trim() === '' ? 'color-error-input' : null}
                />
                <InputDefault 
                  value={newWeightClient}
                  onChange={(e) => setNewWeightClient(e.target.value)}
                  specificStylesInput={voidField.newWeight && newWeightClient?.trim() === '' ? 'border-error-input' : null}
                />
              
              </div>

              <div className='form-insert-client-info-height'>
                <LabelDefault 
                  nameLabel='Height:*' 
                  specificStyleLabel={voidField.newHeight && newHeightClient?.trim() === '' ? 'color-error-input' : null}
                />
                <InputDefault 
                  value={newHeightClient}
                  onChange={(e) => setNewHeightClient(e.target.value)}
                  specificStylesInput={voidField.newHeight && newHeightClient?.trim() === '' ? 'border-error-input' : null}
                />

              </div>

              <div className='form-insert-client-info-image'>
                <LabelDefault nameLabel='Image Profile:' />
                <SelectDefault 
                  selectValue={newImageProfileClient}
                  setSelectValue={setNewImageProfileClient}
                  optionDisabledName='Select Image' 
                  specificArray={imagesProfilesList} 
                />

              </div>

              <div className='form-insert-client-info-audio'>
                <LabelDefault nameLabel='Audio:' />
                <SelectDefault
                  selectValue={newAudioClient}
                  setSelectValue={setNewAudioClient}
                  optionDisabledName='Select Audio' 
                  specificArray={audiosList} 
                />

              </div>

              <div className='container-form-insert-client-info-youtube-plus-minus'>
                <div className='form-insert-client-info-youtube-text-plus-minus-icons'>
                  <LabelDefault nameLabel='YouTube' />

                  <div className='form-insert-client-info-youtube-plus-minus-icons'>
                    <CiCirclePlus
                      onClick={() => addField(setVideosList, videosList)}
                      className='insert-client-icons'
                    />

                    <CiCircleMinus
                      onClick={() => removeLastField(setVideosList)}
                      className='insert-client-icons'
                    />

                  </div>

                </div>

                {videosList.map(field => (
                  <div
                    key={field.id} 
                    className='form-insert-client-info-youtube-title-id'
                  >
                    <div className='form-insert-client-info-youtube-title'>
                      <LabelDefault nameLabel='Title Youtube:' />
                      <InputDefault 
                        key={field.id}
                        value={field.value1}
                        onChange={(e) => onChangeArray(field.id, setVideosList, e.target.value, null)}
                      />

                    </div>

                    <div className='form-insert-client-info-youtube-id'>
                      <LabelDefault nameLabel='ID Emded Youtube:' />
                      <InputDefault
                        key={field.id}
                        value={field.value2}
                        onChange={(e) => onChangeArray(field.id, setVideosList, null, e.target.value)}
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
                  onClick={() => addField(setExercisesList, exercisesList)}
                  className='insert-client-icons'
                />

                <CiCircleMinus
                  onClick={() => removeLastField(setExercisesList, setExerciseList, exerciseList)}
                  className='insert-client-icons'
                />

              </div>
              
            </div>

            {exercisesList.map(field => (
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
                  <LabelDefault 
                    nameLabel='Exercise:*'
                    specificStyleLabel={voidField.newExercise && exerciseList[0].value1?.trim() === '' ? 'color-error-input' : null}
                  />

                  <div className='container-form-insert-client-exercise-input-plus-minus-icons'>
                    <CiCirclePlus
                      onClick={(e) => addFieldExercise(setExerciseList, exerciseList, e, field.letter)}
                      className='insert-client-icons'
                    />

                    <CiCircleMinus
                      onClick={(e) => removeLastFieldExercise(setExerciseList, exerciseList, e)}
                      className='insert-client-icons'
                    />

                  </div>

                </div>

                {/* exercise */}
                {exerciseList.filter(exercise => exercise.position.includes(field.letter))
                .map(exercise => (
                  <div
                    key={exercise.id}
                    className='container-insert-client-input-exercise-gif'
                  >
                    <InputDefault
                      value={exercise.value1}
                      onChange={(e) => onChangeArray(exercise.id, setExerciseList, e.target.value, null, `${field.letter}${exercise.id}`)}
                      specificStylesInput={voidField.newExercise && exerciseList[0].value1?.trim() === '' ? 'border-error-input' : null}
                    />

                    <div className='insert-client-input-gif'>
                      <LabelDefault 
                        nameLabel='Gif:*' 
                        specificStyleLabel={voidField.newExercise && exerciseList[0].value2?.trim() === '' ? 'color-error-input' : null}
                      />
                      <SelectDefault
                        selectValue={exercise.value2}
                        onChangeOut={(e) => onChangeArray(exercise.id, setExerciseList, null, e.target.value, `${field.letter}${exercise.id}`)}
                        optionDisabledName='Select Gif' 
                        specificArray={gifsList}
                        specificStylesSelect={voidField.newGif && exerciseList[0].value2?.trim() === '' ? 'border-error-input' : null}
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
                  onClick={() => addField(setNutritionList, nutritionList, '', '')}
                  className='insert-client-icons'
                />

                <CiCircleMinus
                  onClick={() => removeLastField(setNutritionList)}
                  className='insert-client-icons'
                />

              </div>

            </div>

            {nutritionList.map(field => (
              <div
                key={field.id} 
                className='container-form-insert-client-nutrition-type-nutri'
              >
                <div className='form-insert-client-nutrition-type-text'>
                  <LabelDefault nameLabel='Type:' />
                  <InputDefault
                    value={field.value1}
                    onChange={(e) => onChangeArray(field.id, setNutritionList, e.target.value, null)}
                  />

                </div>

                <div className='form-insert-client-nutrition-nutri-text'>
                  <LabelDefault nameLabel='Nutri:' />
                  <InputDefault
                    value={field.value2}
                    onChange={(e) => onChangeArray(field.id, setNutritionList, null, e.target.value)}
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
                  onClick={() => addField(setNotesList, notesList, '', null)}
                  className='insert-client-icons'
                />

                <CiCircleMinus
                  onClick={() => removeLastField(setNotesList)}
                  className='insert-client-icons'
                />

              </div>

            </div>

            {notesList.map(field => (
              <div
                key={field.id}
                className='container-insert-client-input-exercise-gif'
              >
                <InputDefault
                  value={field.value1}
                  onChange={(e) => onChangeArray(field.id, setNotesList, e.target.value, null)}
                />

              </div>
            ))}

          </div>

          {/* client type */}
          <div className='container-client-type'>
            <LabelDefault 
              nameLabel='Client Type:*'
              specificStyleLabel={voidField.newType && newTypeClient?.trim() === '' ? 'color-error-input' : null}
            />

            <div className='container-client-type-json'>
              <InputDefault
                value='json'
                onChange={(e) => setNewTypeClient(e.target.value)}
                name='typeClient'
                typeInput='radio'
                specificStylesInput={`radioInput ${voidField.newType && newTypeClient?.trim() === '' ? 'border-error-input' : 'radioInputBorder'}`}
              />

              <LabelDefault nameLabel='Json' />

            </div>

            <div className='container-client-type-db'>
              <InputDefault
                value='db'
                onChange={(e) => setNewTypeClient(e.target.value)}
                name='typeClient'
                typeInput='radio'
                specificStylesInput={`radioInput ${voidField.newType && newTypeClient?.trim() === '' ? 'border-error-input' : 'radioInputBorder'}`}
              />

              <LabelDefault nameLabel='DB' />

            </div>

          </div>

          <div className='container-insert-client-buttons'>
            <div className='insert-client-buttons-spans'>
              <ButtonDefault 
                specificStylesButton='insert-client-button' 
                imageReact={<FaCheck />} 
                typeButton='submit'
              />

              <span className='errorMessageInsertClient'>{errorMessageInsertClient}</span>

            </div>

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
