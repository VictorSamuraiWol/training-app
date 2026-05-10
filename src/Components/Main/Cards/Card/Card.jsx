import './Card.css';
import Timer from '../../../Timer/Timer';
import InputDefault from '../../../InputDefault/InputDefault';
import ExercisesGif from '../../../ExercisesGif/ExercisesGif';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Card({ exercise1, exercise2, exercise3, exercise4, exercise5, 
  exercise6, exercise7, exercise8, exercise9, exercise10, exercise11, exercise12,
  exercise13, exercise14, exercise15, exercise1Gif, exercise2Gif, exercise3Gif, 
  exercise4Gif, exercise5Gif, exercise6Gif, exercise7Gif, exercise8Gif, exercise9Gif, 
  exercise10Gif, exercise11Gif, exercise12Gif, exercise13Gif, exercise14Gif, exercise15Gif

}) {

  const [isRunning1, setIsRunning1] = useState(false)
  const [isRunning2, setIsRunning2] = useState(false)
  const [isRunning3, setIsRunning3] = useState(false)
  const [isRunning4, setIsRunning4] = useState(false)
  const [isRunning5, setIsRunning5] = useState(false)
  const [isRunning6, setIsRunning6] = useState(false)
  const [isRunning7, setIsRunning7] = useState(false)
  const [isRunning8, setIsRunning8] = useState(false)
  const [isRunning9, setIsRunning9] = useState(false)
  const [isRunning10, setIsRunning10] = useState(false)
  const [isRunning11, setIsRunning11] = useState(false)
  const [isRunning12, setIsRunning12] = useState(false)
  const [isRunning13, setIsRunning13] = useState(false)
  const [isRunning14, setIsRunning14] = useState(false)
  const [isRunning15, setIsRunning15] = useState(false)
  const [playPauseId, setPlayPauseId] = useState('')

  const { isOnToggleTimersExercises } = useOutletContext()

  const [activeStyleText1, setActiveStyleText1] = useState(false)
  const [activeStyleText2, setActiveStyleText2] = useState(false)
  const [activeStyleText3, setActiveStyleText3] = useState(false)
  const [activeStyleText4, setActiveStyleText4] = useState(false)
  const [activeStyleText5, setActiveStyleText5] = useState(false)
  const [activeStyleText6, setActiveStyleText6] = useState(false)
  const [activeStyleText7, setActiveStyleText7] = useState(false)
  const [activeStyleText8, setActiveStyleText8] = useState(false)
  const [activeStyleText9, setActiveStyleText9] = useState(false)
  const [activeStyleText10, setActiveStyleText10] = useState(false)
  const [activeStyleText11, setActiveStyleText11] = useState(false)
  const [activeStyleText12, setActiveStyleText12] = useState(false)
  const [activeStyleText13, setActiveStyleText13] = useState(false)
  const [activeStyleText14, setActiveStyleText14] = useState(false)
  const [activeStyleText15, setActiveStyleText15] = useState(false)

  const [activeStyleParentTextBorder1, setActiveStyleParentTextBorder1] = useState(false)
  const [activeStyleParentTextBorder2, setActiveStyleParentTextBorder2] = useState(false)
  const [activeStyleParentTextBorder3, setActiveStyleParentTextBorder3] = useState(false)
  const [activeStyleParentTextBorder4, setActiveStyleParentTextBorder4] = useState(false)
  const [activeStyleParentTextBorder5, setActiveStyleParentTextBorder5] = useState(false)
  const [activeStyleParentTextBorder6, setActiveStyleParentTextBorder6] = useState(false)
  const [activeStyleParentTextBorder7, setActiveStyleParentTextBorder7] = useState(false)
  const [activeStyleParentTextBorder8, setActiveStyleParentTextBorder8] = useState(false)
  const [activeStyleParentTextBorder9, setActiveStyleParentTextBorder9] = useState(false)
  const [activeStyleParentTextBorder10, setActiveStyleParentTextBorder10] = useState(false)
  const [activeStyleParentTextBorder11, setActiveStyleParentTextBorder11] = useState(false)
  const [activeStyleParentTextBorder12, setActiveStyleParentTextBorder12] = useState(false)
  const [activeStyleParentTextBorder13, setActiveStyleParentTextBorder13] = useState(false)
  const [activeStyleParentTextBorder14, setActiveStyleParentTextBorder14] = useState(false)
  const [activeStyleParentTextBorder15, setActiveStyleParentTextBorder15] = useState(false)

  const [ableExercises1Gif, setAbleExercises1Gif] = useState(false)
  const [ableExercises2Gif, setAbleExercises2Gif] = useState(false)
  const [ableExercises3Gif, setAbleExercises3Gif] = useState(false)
  const [ableExercises4Gif, setAbleExercises4Gif] = useState(false)
  const [ableExercises5Gif, setAbleExercises5Gif] = useState(false)
  const [ableExercises6Gif, setAbleExercises6Gif] = useState(false)
  const [ableExercises7Gif, setAbleExercises7Gif] = useState(false)
  const [ableExercises8Gif, setAbleExercises8Gif] = useState(false)
  const [ableExercises9Gif, setAbleExercises9Gif] = useState(false)
  const [ableExercises10Gif, setAbleExercises10Gif] = useState(false)
  const [ableExercises11Gif, setAbleExercises11Gif] = useState(false)
  const [ableExercises12Gif, setAbleExercises12Gif] = useState(false)
  const [ableExercises13Gif, setAbleExercises13Gif] = useState(false)
  const [ableExercises14Gif, setAbleExercises14Gif] = useState(false)
  const [ableExercises15Gif, setAbleExercises15Gif] = useState(false)

  function pauseOthersExercisesTimers() {    
    if (isRunning1 && playPauseId === '1') {
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning2 && playPauseId === '2') {
      setIsRunning1(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning3 && playPauseId === '3') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning4 && playPauseId === '4') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning5 && playPauseId === '5') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning6 && playPauseId === '6') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning7 && playPauseId === '7') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning8 && playPauseId === '8') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning9 && playPauseId === '9') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning10 && playPauseId === '10') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning11 && playPauseId === '11') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning12 && playPauseId === '12') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning13(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning13 && playPauseId === '13') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning14(false)
      setIsRunning15(false)
    } else if (isRunning14 && playPauseId === '14') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning15(false)
    } else if (isRunning15 && playPauseId === '15') {
      setIsRunning1(false)
      setIsRunning2(false)
      setIsRunning3(false)
      setIsRunning4(false)
      setIsRunning5(false)
      setIsRunning6(false)
      setIsRunning7(false)
      setIsRunning8(false)
      setIsRunning9(false)
      setIsRunning10(false)
      setIsRunning11(false)
      setIsRunning12(false)
      setIsRunning13(false)
      setIsRunning14(false)
    }

  }

  function checkedInput(num) {  
      if (num === 1) {
        setActiveStyleText1(!activeStyleText1)
        setActiveStyleParentTextBorder1(!activeStyleParentTextBorder1)

      } else if (num === 2) {
        setActiveStyleText2(!activeStyleText2)
        setActiveStyleParentTextBorder2(!activeStyleParentTextBorder2)

      } else if (num === 3) {
        setActiveStyleText3(!activeStyleText3)
        setActiveStyleParentTextBorder3(!activeStyleParentTextBorder3)

      } else if (num === 4) {
        setActiveStyleText4(!activeStyleText4)
        setActiveStyleParentTextBorder4(!activeStyleParentTextBorder4)

      } else if (num === 5) {
        setActiveStyleText5(!activeStyleText5)
        setActiveStyleParentTextBorder5(!activeStyleParentTextBorder5)

      } else if (num === 6) {
        setActiveStyleText6(!activeStyleText6)
        setActiveStyleParentTextBorder6(!activeStyleParentTextBorder6)

      } else if (num === 7) {
        setActiveStyleText7(!activeStyleText7)
        setActiveStyleParentTextBorder7(!activeStyleParentTextBorder7)

      } else if (num === 8) {
        setActiveStyleText8(!activeStyleText8)
        setActiveStyleParentTextBorder8(!activeStyleParentTextBorder8)

      } else if (num === 9) {
        setActiveStyleText9(!activeStyleText9)
        setActiveStyleParentTextBorder9(!activeStyleParentTextBorder9)

      } else if (num === 10) {
        setActiveStyleText10(!activeStyleText10)
        setActiveStyleParentTextBorder10(!activeStyleParentTextBorder10)

      } else if (num === 11) {
        setActiveStyleText11(!activeStyleText11)
        setActiveStyleParentTextBorder11(!activeStyleParentTextBorder11)

      } else if (num === 12) {
        setActiveStyleText12(!activeStyleText12)
        setActiveStyleParentTextBorder12(!activeStyleParentTextBorder12)

      } else if (num === 13) {
        setActiveStyleText13(!activeStyleText13)
        setActiveStyleParentTextBorder13(!activeStyleParentTextBorder13)

      } else if (num === 14) {
        setActiveStyleText14(!activeStyleText14)
        setActiveStyleParentTextBorder14(!activeStyleParentTextBorder14)

      } else if (num === 15) {
        setActiveStyleText15(!activeStyleText15)
        setActiveStyleParentTextBorder15(!activeStyleParentTextBorder15)

      }

  }

  function clickExercises1Gif() {
    setAbleExercises1Gif(!ableExercises1Gif)

  }

  function clickExercises2Gif() {
    setAbleExercises2Gif(!ableExercises2Gif)

  }

  function clickExercises3Gif() {
    setAbleExercises3Gif(!ableExercises3Gif)

  }

  function clickExercises4Gif() {
    setAbleExercises4Gif(!ableExercises4Gif)

  }

  function clickExercises5Gif() {
    setAbleExercises5Gif(!ableExercises5Gif)

  }

  function clickExercises6Gif() {
    setAbleExercises6Gif(!ableExercises6Gif)

  }

  function clickExercises7Gif() {
    setAbleExercises7Gif(!ableExercises7Gif)

  }

  function clickExercises8Gif() {
    setAbleExercises8Gif(!ableExercises8Gif)

  }

  function clickExercises9Gif() {
    setAbleExercises9Gif(!ableExercises9Gif)

  }

  function clickExercises10Gif() {
    setAbleExercises10Gif(!ableExercises10Gif)

  }

  function clickExercises11Gif() {
    setAbleExercises11Gif(!ableExercises11Gif)

  }

  function clickExercises12Gif() {
    setAbleExercises12Gif(!ableExercises12Gif)

  }

  function clickExercises13Gif() {
    setAbleExercises13Gif(!ableExercises13Gif)

  }

  function clickExercises14Gif() {
    setAbleExercises14Gif(!ableExercises14Gif)

  }

  function clickExercises15Gif() {
    setAbleExercises15Gif(!ableExercises15Gif)

  }


  return (
    <div className='cards-training'>
      <>
        {/* Workout */}
        {ableExercises1Gif && exercise1Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises1Gif} 
          exercise1Gif={exercise1Gif}
        />}

        {ableExercises2Gif && exercise2Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises2Gif} 
          exercise2Gif={exercise2Gif} 
        />}

        {ableExercises3Gif && exercise3Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises3Gif} 
          exercise3Gif={exercise3Gif} 
        />}

        {ableExercises4Gif && exercise4Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises4Gif} 
          exercise4Gif={exercise4Gif} 
        />}

        {ableExercises5Gif && exercise5Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises5Gif} 
          exercise5Gif={exercise5Gif} 
        />}

        {ableExercises6Gif && exercise6Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises6Gif} 
          exercise6Gif={exercise6Gif} 
        />}

        {ableExercises7Gif && exercise7Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises7Gif} 
          exercise7Gif={exercise7Gif} 
        />}

        {ableExercises8Gif && exercise8Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises8Gif} 
          exercise8Gif={exercise8Gif} 
        />}

        {ableExercises9Gif && exercise9Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises9Gif} 
          exercise9Gif={exercise9Gif} 
        />}

        {ableExercises10Gif && exercise10Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises10Gif} 
          exercise10Gif={exercise10Gif} 
        />}

        {ableExercises11Gif && exercise11Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises11Gif} 
          exercise11Gif={exercise11Gif} 
        />}

        {ableExercises12Gif && exercise12Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises12Gif} 
          exercise12Gif={exercise12Gif} 
        />}

        {ableExercises13Gif && exercise13Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises13Gif} 
          exercise13Gif={exercise13Gif} 
        />}

        {ableExercises14Gif && exercise14Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises14Gif} 
          exercise14Gif={exercise14Gif} 
        />}

        {ableExercises15Gif && exercise15Gif && <ExercisesGif 
          setAbleExercisesGif={setAbleExercises15Gif} 
          exercise15Gif={exercise15Gif} 
        />}

      </>

      {exercise1 && exercise1 !== '' && exercise1 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder1 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p 
            onClick={clickExercises1Gif}
            className={activeStyleText1 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise1}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='1'
            isRunning={isRunning1}
            setIsRunning={setIsRunning1} 
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText1 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText1 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='1'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          key='1'
          onClick={() => checkedInput(1)}
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise2 && exercise2 !== '' && exercise2 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder2 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises2Gif}
            className={activeStyleText2 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise2}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='2'
            isRunning={isRunning2}
            setIsRunning={setIsRunning2} 
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay={activeStyleText2 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText2 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='2'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          key='2'
          onClick={() => checkedInput(2)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>    
      }

      {exercise3 && exercise3 !== '' && exercise3 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder3 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises3Gif}
            className={activeStyleText3 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise3}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='3'
            isRunning={isRunning3}
            setIsRunning={setIsRunning3}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText3 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText3 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='3' 
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(3)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>     
      }

      {exercise4 && exercise4 !== '' && exercise4 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder4 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises4Gif}
            className={activeStyleText4 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise4}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='4'
            isRunning={isRunning4}
            setIsRunning={setIsRunning4} 
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText4 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText4 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='4'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(4)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise5 && exercise5 !== '' && exercise5 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder5 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises5Gif}
            className={activeStyleText5 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise5}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='5'
            isRunning={isRunning5}
            setIsRunning={setIsRunning5}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText5 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText5 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='5'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(5)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise6 && exercise6 !== '' && exercise6 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder6 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises6Gif}
            className={activeStyleText6 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise6}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='6'
            isRunning={isRunning6}
            setIsRunning={setIsRunning6} 
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText6 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText6 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='6'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(6)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>   
      }

      {exercise7 && exercise7 !== '' && exercise7 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder7 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises7Gif}
            className={activeStyleText7 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise7}
          </p>
          
          {isOnToggleTimersExercises && <Timer
            key='7'
            isRunning={isRunning7}
            setIsRunning={setIsRunning7}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText7 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText7 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='7'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(7)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div> 
      }

      {exercise8 && exercise8 !== '' && exercise8 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder8 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises8Gif}
            className={activeStyleText8 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise8}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='8'
            isRunning={isRunning8}
            setIsRunning={setIsRunning8} 
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText8 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText8 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='8'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(8)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>  
      }

      {exercise9 && exercise9 !== '' && exercise9 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder9 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises9Gif}
            className={activeStyleText9 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise9}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='9'
            isRunning={isRunning9}
            setIsRunning={setIsRunning9}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText9 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText9 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='9'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(9)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise10 && exercise10 !== '' && exercise10 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder10 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises10Gif}
            className={activeStyleText10 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise10}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='10'
            isRunning={isRunning10}
            setIsRunning={setIsRunning10}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText10 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText10 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='10'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(10)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise11 && exercise11 !== '' && exercise11 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder11 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises11Gif}
            className={activeStyleText11 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise11}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='11'
            isRunning={isRunning11}
            setIsRunning={setIsRunning11}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText11 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText11 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='11'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(11)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>        
      }

      {exercise12 && exercise12 !== '' && exercise12 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder12 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises12Gif}
            className={activeStyleText12 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise12}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='12'
            isRunning={isRunning12}
            setIsRunning={setIsRunning12}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText12 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText12 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='12'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(12)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise13 && exercise13 !== '' && exercise13 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder13 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises13Gif}
            className={activeStyleText13 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise13}
          </p>

          {isOnToggleTimersExercises && <Timer
            key='13'
            isRunning={isRunning13}
            setIsRunning={setIsRunning13}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText13 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText13 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='13'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(13)} 
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise14 && exercise14 !== '' && exercise14 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder14 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises14Gif}
            className={activeStyleText14 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise14}
          </p>
          
          {isOnToggleTimersExercises && <Timer
            key='14'
            isRunning={isRunning14}
            setIsRunning={setIsRunning14}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText14 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText14 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='14'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault
          onClick={() => checkedInput(14)}
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

      {exercise15 && exercise15 !== '' && exercise15 !== undefined &&
      <div className='cards-training-exercises-timer-checkbox'>
        <div className={activeStyleParentTextBorder15 ?
          'new-cards-training-exercises-timer' :
          'cards-training-exercises-timer'}
        >
          <p
            onClick={clickExercises15Gif}
            className={activeStyleText15 ? 
            'new-cards-training-exercises' : 
            'cards-training-exercises'}
          >
            {exercise15}
          </p>
          
          {isOnToggleTimersExercises && <Timer
            key='15'
            isRunning={isRunning15}
            setIsRunning={setIsRunning15}  
            specificStyleTimer='specificStyleTimerExercises'
            specificStyleTimerDisplay={activeStyleText15 ?
            'new-specificStyleTimerDisplayExercises' :
            'specificStyleTimerDisplayExercises'}
            specificStyleTimerButton={activeStyleText15 ?
            'new-specificStyleTimerButtonExercises' :
            'specificStyleTimerButtonExercises'}
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='15'
            setPlayPauseId={setPlayPauseId}
          />}

        </div>

        <InputDefault 
          onClick={() => checkedInput(15)}
          typeInput='checkbox' 
          specificStylesInput='specificStylesInput' 
        />
      
      </div>
      }

    </div>
  )
}

export default Card;
