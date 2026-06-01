import './Exercise.css';
import InputDefault from '../../../../InputDefault/InputDefault';
import Timer from '../../../../Timer/Timer';
import ExercisesGif from '../../../../ExercisesGif/ExercisesGif';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Exercise({ exerciseName, exerciseGif, _key }) {

  const { isOnToggleTimersExercises, checkedInputs, toggleChecked} = useOutletContext()

  const [ableExercisesGif, setAbleExercisesGif] = useState(false)

  const [keyInput, setKeyInput] = useState(_key)

  function checkedInput(_key) {
    let active

    if (checkedInputs.includes(_key)) {
      active = _key

    }

    return active

  }

  function clickExercisesGif() {
    setAbleExercisesGif(!ableExercisesGif)

  }

  return (
    <div
      className='cards-training-exercises-timer-checkbox'
    >
      {ableExercisesGif && exerciseGif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercisesGif} 
          exerciseGif={exerciseGif}
      />}

      <div
        className={
        checkedInput(_key) === _key ?
        'new-cards-training-exercises-timer' :
        'cards-training-exercises-timer'}
      >
        <p 
          onClick={clickExercisesGif}
          className={
          checkedInput(_key) === _key ?
          'new-cards-training-exercises' : 
          'cards-training-exercises'}
        >
          {exerciseName}
        </p>

        {isOnToggleTimersExercises && 
        <Timer
          key={keyInput}
          _key={_key}
          keyInput={keyInput}
          setKeyInput={setKeyInput}
          checkedInputs={checkedInputs}
          ableOnClickButton={!checkedInputs.includes(_key)}
          specificStyleTimer='specificStyleTimerExercises'
          specificStyleTimerDisplay={
          checkedInput(_key) === _key ?
          'new-specificStyleTimerDisplayExercises' :
          'specificStyleTimerDisplayExercises'}
          specificStyleTimerButton={
          checkedInput(_key) === _key ?
          'new-specificStyleTimerButtonExercises' :
          'specificStyleTimerButtonExercises'}
        />}

      </div>

      <InputDefault
        key={_key}
        onClick={() => checkedInput(_key)}
        onChange={(e) => toggleChecked(_key, e.target.checked)} 
        checked={checkedInputs.includes(_key)}
        typeInput='checkbox'
        specificStylesInput='specificStylesInput'
      />
      
    </div>

  )

}

export default Exercise;
