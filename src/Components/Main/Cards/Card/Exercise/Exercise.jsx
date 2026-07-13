import './Exercise.css';
import InputDefault from '../../../../InputDefault/InputDefault';
import Timer from '../../../../Timer/Timer';
import ExercisesGif from '../../../../ExercisesGif/ExercisesGif';
import waitingTheExercise from '../../../../../assets/images/exercises-gif/waiting-the-exercise-gif.gif';
import hiit from '../../../../../assets/images/exercises-gif/hiit-gif.gif';
import barbellBenchPress from '../../../../../assets/images/exercises-gif/barbell-bench-press-gif.gif';
import concentrationCurl from '../../../../../assets/images/exercises-gif/concentration-curl-gif.gif';
import dumbbellReverseCurl from '../../../../../assets/images/exercises-gif/dumbbell-reverse-curl-gif.gif';
import plank from '../../../../../assets/images/exercises-gif/plank-gif.gif';
import peckdeck from '../../../../../assets/images/exercises-gif/peck-deck-gif.gif';
import dumbbellFrontRaise from '../../../../../assets/images/exercises-gif/dumbbell-front-raise-gif.gif';
import dumbbellLateralRaise from '../../../../../assets/images/exercises-gif/dumbbell-lateral-raise-gif.gif';
import barbellUprightRow from '../../../../../assets/images/exercises-gif/barbell-upright-row-gif.gif';
import legPress from '../../../../../assets/images/exercises-gif/leg-press-gif.gif';
import stiff from '../../../../../assets/images/exercises-gif/stiff-gif.gif';
import legCurlMachine from '../../../../../assets/images/exercises-gif/leg-curl-machine-gif.gif';
import legExtensionMachine from '../../../../../assets/images/exercises-gif/leg-extension-machine-gif.gif';
import abdominalCrunch from '../../../../../assets/images/exercises-gif/abdominal-crunch-gif.gif';
import latPulldown from '../../../../../assets/images/exercises-gif/lat-pulldown-gif.gif';
import seatedRowMachine from '../../../../../assets/images/exercises-gif/seated-row-machine-gif.gif';
import barbellWristCurl from '../../../../../assets/images/exercises-gif/barbell-wrist-curl-gif.gif';
import barbellReverseWristCurl from '../../../../../assets/images/exercises-gif/barbell-reverse-wrist-curl-gif.gif';
import obliqueCrunch from '../../../../../assets/images/exercises-gif/oblique-crunch-gif.gif';
import lyingLegRaise from '../../../../../assets/images/exercises-gif/lying-Leg-raise-gif.gif';
import barbellSkullCrusher from '../../../../../assets/images/exercises-gif/barbell-skull-crusher-gif.gif';
import overheadTricepsExtension from '../../../../../assets/images/exercises-gif/overhead-triceps-extension-gif.gif';
import tricepsRopePushdown from '../../../../../assets/images/exercises-gif/triceps-rope-pushdown-gif.gif';
import standingCalfRaise from '../../../../../assets/images/exercises-gif/standing-calf-raise-gif.gif';
import seatedCalfRaise from '../../../../../assets/images/exercises-gif/seated-calf-raise-gif.gif';
import barbellCurl from '../../../../../assets/images/exercises-gif/barbell-curl-gif.gif';
import alternatingDumbbellCurl from '../../../../../assets/images/exercises-gif/alternating-dumbbell-curl-gif.gif';
import cableShoulderExtension from '../../../../../assets/images/exercises-gif/cable-shoulder-extension-gif.gif';
import oneArmDumbbellRow from '../../../../../assets/images/exercises-gif/one-arm-dumbbell-row-gif.gif';
import dumbbellShrug from '../../../../../assets/images/exercises-gif/dumbbell-shrug-gif.gif';
import squat from '../../../../../assets/images/exercises-gif/squat-gif.gif';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Exercise({ exerciseName, exerciseGif, _key }) {

  const { isOnToggleTimersExercises, checkedInputs, toggleChecked} = useOutletContext()

  const { setGifsList } = useOutletContext()

  const [ableExercisesGif, setAbleExercisesGif] = useState(false)

  const [keyInput, setKeyInput] = useState(_key)

    // exercises gifs
  const [exercisesGifs] = useState({
    waitingTheExercise: waitingTheExercise,
    hiit: hiit,
    barbellBenchPress: barbellBenchPress,
    concentrationCurl: concentrationCurl,
    dumbbellReverseCurl: dumbbellReverseCurl,
    plank: plank,
    peckdeck: peckdeck,
    dumbbellFrontRaise: dumbbellFrontRaise,
    dumbbellLateralRaise: dumbbellLateralRaise,
    barbellUprightRow: barbellUprightRow,
    legPress: legPress,
    stiff: stiff,
    legCurlMachine: legCurlMachine,
    legExtensionMachine: legExtensionMachine,
    abdominalCrunch: abdominalCrunch,
    latPulldown: latPulldown,
    seatedRowMachine: seatedRowMachine,
    barbellWristCurl: barbellWristCurl,
    barbellReverseWristCurl: barbellReverseWristCurl,
    obliqueCrunch: obliqueCrunch,
    lyingLegRaise: lyingLegRaise,
    barbellSkullCrusher: barbellSkullCrusher,
    overheadTricepsExtension: overheadTricepsExtension,
    tricepsRopePushdown: tricepsRopePushdown,
    standingCalfRaise: standingCalfRaise,
    seatedCalfRaise: seatedCalfRaise,
    barbellCurl: barbellCurl,
    alternatingDumbbellCurl: alternatingDumbbellCurl,
    cableShoulderExtension: cableShoulderExtension,
    oneArmDumbbellRow: oneArmDumbbellRow,
    dumbbellShrug: dumbbellShrug,
    squat: squat

  })

  useEffect(() => {
    setGifsList(Object.keys(exercisesGifs))

  }, [setGifsList, exercisesGifs])

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
          exercisesGifs={exercisesGifs}
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
