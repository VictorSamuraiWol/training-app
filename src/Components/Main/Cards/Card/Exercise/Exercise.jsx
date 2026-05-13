import './Exercise.css';
import InputDefault from '../../../../InputDefault/InputDefault';
import Timer from '../../../../Timer/Timer';
import ExercisesGif from '../../../../ExercisesGif/ExercisesGif';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Exercise({ exerciseName, exerciseGif }) {

  const { isOnToggleTimersExercises } = useOutletContext()

  const [activeStyleText, setActiveStyleText] = useState(false)

  const [isRunning, setIsRunning] = useState(false)

  const [ableExercisesGif, setAbleExercisesGif] = useState(false)

  function checkedInput() {  
    setActiveStyleText(!activeStyleText)

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
        className={activeStyleText ?
        'new-cards-training-exercises-timer' :
        'cards-training-exercises-timer'}
      >
        <p 
          onClick={clickExercisesGif}
          className={activeStyleText ? 
          'new-cards-training-exercises' : 
          'cards-training-exercises'}
        >
          {exerciseName}
        </p>

        {isOnToggleTimersExercises && 
        <Timer
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          specificStyleTimer='specificStyleTimerExercises'
          specificStyleTimerDisplay={activeStyleText ?
          'new-specificStyleTimerDisplayExercises' :
          'specificStyleTimerDisplayExercises'}
          specificStyleTimerButton={activeStyleText ?
          'new-specificStyleTimerButtonExercises' :
          'specificStyleTimerButtonExercises'}
        />}

      </div>

      <InputDefault
        onClick={() => checkedInput()}
        typeInput='checkbox' 
        specificStylesInput='specificStylesInput' 
      />
      
    </div>

  )

}

export default Exercise;
