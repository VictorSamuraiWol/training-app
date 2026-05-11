import './ExercisesGif.css';
import { TiDeleteOutline } from "react-icons/ti"

function ExercisesGif({ setAbleExercisesGif, exercise1Gif, exercise2Gif, exercise3Gif, exercise4Gif, 
  exercise5Gif, exercise6Gif, exercise7Gif, exercise8Gif, exercise9Gif, exercise10Gif,
  exercise11Gif, exercise12Gif, exercise13Gif, exercise14Gif, exercise15Gif

}) {

  function closeGif() {
    setAbleExercisesGif(false)

  }

  return(
    <div 
      onClick={closeGif}
      className='exercises-gif'
    >
      <TiDeleteOutline
        onClick={closeGif}
        className='exercises-gif-delete-icon'
      />

      {/* Workout */}
      {exercise1Gif && <img
        className='exercises-gif-img'
        src={exercise1Gif}
      />}

      {exercise2Gif && <img
        className='exercises-gif-img'
        src={exercise2Gif}
      />}

      {exercise3Gif && <img
        className='exercises-gif-img'
        src={exercise3Gif}
      />}

      {exercise4Gif && <img
        className='exercises-gif-img'
        src={exercise4Gif}
      />}

      {exercise5Gif && <img
        className='exercises-gif-img'
        src={exercise5Gif}
      />}

      {exercise6Gif && <img
        className='exercises-gif-img'
        src={exercise6Gif}
      />}

      {exercise7Gif && <img
        className='exercises-gif-img'
        src={exercise7Gif}
      />}

      {exercise8Gif && <img
        className='exercises-gif-img'
        src={exercise8Gif}
      />}

      {exercise9Gif && <img
        className='exercises-gif-img'
        src={exercise9Gif}
      />}

      {exercise10Gif && <img
        className='exercises-gif-img'
        src={exercise10Gif}
      />}

      {exercise11Gif && <img
        className='exercises-gif-img'
        src={exercise11Gif}
      />}

      {exercise12Gif && <img
        className='exercises-gif-img'
        src={exercise12Gif}
      />}

      {exercise13Gif && <img
        className='exercises-gif-img'
        src={exercise13Gif}
      />}

      {exercise14Gif && <img
        className='exercises-gif-img'
        src={exercise14Gif}
      />}

      {exercise15Gif && <img
        className='exercises-gif-img'
        src={exercise15Gif}
      />}

    </div>
  )
}

export default ExercisesGif;
