import './Card.css';
import Timer from '../../../Timer/Timer';
import InputDefault from '../../../InputDefault/InputDefault';
import ExercisesGif from '../../../ExercisesGif/ExercisesGif';
import Exercise from './Exercise/Exercise';

function Card({ exercises, _key }) {

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

    </div>

  )

}

export default Card;
