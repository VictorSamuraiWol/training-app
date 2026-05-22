import './Card.css';
import Timer from '../../../Timer/Timer';
import InputDefault from '../../../InputDefault/InputDefault';
import ExercisesGif from '../../../ExercisesGif/ExercisesGif';
import Exercise from './Exercise/Exercise';
import FinishWorkoutModal from '../../../Modal/FinishWorkoutModal/FinishWorkoutModal';
import { DataContext } from '../../../DataContext/DataContext';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

function Card({ exercises, _key }) {

  const { staticUsersContents, dynamicUsersContents, loginValidate, nameUser, typeTrain } = useContext(DataContext)

  const { checkedInputs, setCheckedInputs } = useOutletContext()

  function performanceEndWorkout(exercisesLength) {
    const checkedInputsFilter = checkedInputs.length > 0 && 
    checkedInputs.filter(inputs => inputs.includes(`${typeTrain}`))
    
    const performance = checkedInputs.length === 0 ? '0%' :
      `${(checkedInputsFilter.length / exercisesLength).toFixed(2) * 100}%`

    const numPerformance = checkedInputs.length === 0 ? 0 :
      (checkedInputsFilter.length / exercisesLength)

    const totalExercises = exercisesLength

    const doneExercises = checkedInputs.length === 0 ? '0' : checkedInputsFilter.length

    const missedExercises = exercisesLength - doneExercises

    return {performance, numPerformance, totalExercises, doneExercises, missedExercises}

  }

  return (
      <div className='cards-training'>      
        {exercises
        .map((exercise, index) => (
          <Exercise
            key={`${_key}${index}`}
            _key={`${_key}${index}`} 
            exerciseName={exercise[0] && exercise[0].exercise}
            exerciseGif={exercise[1] && exercise[1].gif}
          />

        ))}

        {/* Static and Dynamic User Contents */}
        {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
        .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
        .map(user => user.exercises)[0]
        .filter(exercises => exercises[0].type === typeTrain)
        .map(exercises => exercises[1].exercises)
        .map((exercises) => (
          <FinishWorkoutModal
            className='finish-workout-button-modal'
            key={typeTrain}
            performanceEndWorkout={performanceEndWorkout(exercises.length).performance}
            numPerformanceEndWorkout={performanceEndWorkout(exercises.length).numPerformance}
            totalEndWorkout={performanceEndWorkout(exercises.length).totalExercises}
            doneEndWorkout={performanceEndWorkout(exercises.length).doneExercises}
            missedEndWorkout={performanceEndWorkout(exercises.length).missedExercises}
            setCheckedInputs={setCheckedInputs}
          />
          ))}

      </div>

  )

}

export default Card;
