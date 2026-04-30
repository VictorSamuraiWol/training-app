import './Card.css';
import Timer from '../../../Timer/Timer';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Card({ exercise1, exercise2, exercise3, exercise4, exercise5, 
  exercise6, exercise7, exercise8, exercise9, exercise10, exercise11, exercise12,
  exercise13, exercise14, exercise15 }) {

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

  return (
    <div className='cards-training'>
        {exercise1 && exercise1 !== '' && exercise1 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise1}</p>

          {isOnToggleTimersExercises && <Timer
            key='1'
            isRunning={isRunning1}
            setIsRunning={setIsRunning1} 
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='1'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise2 && exercise2 !== '' && exercise2 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise2}</p>

          {isOnToggleTimersExercises && <Timer
            key='2'
            isRunning={isRunning2}
            setIsRunning={setIsRunning2} 
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='2'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>    
        }
        {exercise3 && exercise3 !== '' && exercise3 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise3}</p>

          {isOnToggleTimersExercises && <Timer
            key='3'
            isRunning={isRunning3}
            setIsRunning={setIsRunning3}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='3' 
            setPlayPauseId={setPlayPauseId}
          />}
        </div>     
        }
        {exercise4 && exercise4 !== '' && exercise4 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise4}</p>

          {isOnToggleTimersExercises && <Timer
            key='4'
            isRunning={isRunning4}
            setIsRunning={setIsRunning4} 
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='4'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise5 && exercise5 !== '' && exercise5 !== undefined && 
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise5}</p>

          {isOnToggleTimersExercises && <Timer
            key='5'
            isRunning={isRunning5}
            setIsRunning={setIsRunning5}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='5'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise6 && exercise6 !== '' && exercise6 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise6}</p>

          {isOnToggleTimersExercises && <Timer
            key='6'
            isRunning={isRunning6}
            setIsRunning={setIsRunning6} 
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='6'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>    
        }
        {exercise7 && exercise7 !== '' && exercise7 !== undefined &&
        <div className='cards-training-exercises-timer'>
        <p className='cards-training-exercises'>{exercise7}</p>

        {isOnToggleTimersExercises && <Timer
            key='7'
            isRunning={isRunning7}
            setIsRunning={setIsRunning7}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='7'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>  
        }
        {exercise8 && exercise8 !== '' && exercise8 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise8}</p>

          {isOnToggleTimersExercises && <Timer
            key='8'
            isRunning={isRunning8}
            setIsRunning={setIsRunning8} 
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='8'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>  
        }
        {exercise9 && exercise9 !== '' && exercise9 !== undefined && 
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise9}</p>

          {isOnToggleTimersExercises && <Timer
            key='9'
            isRunning={isRunning9}
            setIsRunning={setIsRunning9}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='9'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise10 && exercise10 !== '' && exercise10 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise10}</p>

          {isOnToggleTimersExercises && <Timer
            key='10'
            isRunning={isRunning10}
            setIsRunning={setIsRunning10}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='10'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise11 && exercise11 !== '' && exercise11 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise11}</p>

          {isOnToggleTimersExercises && <Timer
            key='11'
            isRunning={isRunning11}
            setIsRunning={setIsRunning11}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='11'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise12 && exercise12 !== '' && exercise12 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise12}</p>

          {isOnToggleTimersExercises && <Timer
            key='12'
            isRunning={isRunning12}
            setIsRunning={setIsRunning12}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='12'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise13 && exercise13 !== '' && exercise13 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise13}</p>

          {isOnToggleTimersExercises && <Timer
            key='13'
            isRunning={isRunning13}
            setIsRunning={setIsRunning13}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='13'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise14 && exercise14 !== '' && exercise14 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise14}</p>
          
          {isOnToggleTimersExercises && <Timer
            key='14'
            isRunning={isRunning14}
            setIsRunning={setIsRunning14}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='14'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }
        {exercise15 && exercise15 !== '' && exercise15 !== undefined &&
        <div className='cards-training-exercises-timer'>
          <p className='cards-training-exercises'>{exercise15}</p>
          
          {isOnToggleTimersExercises && <Timer
            key='15'
            isRunning={isRunning15}
            setIsRunning={setIsRunning15}  
            specificStyleTimer='specificStyleTimerExercises' 
            specificStyleTimerDisplay='specificStyleTimerDisplayExercises' 
            specificStyleTimerButton='specificStyleTimerButtonExercises'
            pauseOthersExercisesTimers={pauseOthersExercisesTimers}
            buttonPlayPauseId='15'
            setPlayPauseId={setPlayPauseId}
          />}
        </div>
        }

    </div>
  )
}

export default Card;
