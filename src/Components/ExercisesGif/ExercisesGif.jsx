import './ExercisesGif.css';
import waitingTheExercise from '../../assets/images/exercises-gif/waiting-the-exercise-gif.gif';
import hiit from '../../assets/images/exercises-gif/hiit-gif.gif';
import barbellBenchPress from '../../assets/images/exercises-gif/barbell-bench-press-gif.gif';
import concentrationCurl from '../../assets/images/exercises-gif/concentration-curl-gif.gif';
import dumbbellReverseCurl from '../../assets/images/exercises-gif/dumbbell-reverse-curl-gif.gif';
import plank from '../../assets/images/exercises-gif/plank-gif.gif';
import peckdeck from '../../assets/images/exercises-gif/peck-deck-gif.gif';
import { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti"

function ExercisesGif({ setAbleExercisesGif, exerciseGif }) {

  function closeGif() {
    setAbleExercisesGif(false)

  }

  // exercises gifs
  const [exercisesGifs] = useState({
    waitingTheExercise: waitingTheExercise,
    hiit: hiit,
    barbellBenchPress: barbellBenchPress,
    concentrationCurl: concentrationCurl,
    dumbbellReverseCurl: dumbbellReverseCurl,
    plank: plank,
    peckdeck: peckdeck

  })

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
