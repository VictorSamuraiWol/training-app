import './ExercisesGif.css';
import { TiDeleteOutline } from "react-icons/ti";

function ExercisesGif({ setAbleExercisesGif, exerciseGif, exercisesGifs }) {

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

      {exerciseGif && <img
        className='exercises-gif-img'
        src={exercisesGifs[exerciseGif]}
      />}

    </div>

  )

}

export default ExercisesGif;
