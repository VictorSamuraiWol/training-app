import "./Timer.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Timer({ specificStyleTimer, specificStyleTimerDisplay, 
  specificStyleTimerButton, isRunning, setIsRunning, pauseOthersExercisesTimers, 
  buttonPlayPauseId, setPlayPauseId
  // autoStart = false
}) {
  const [time, setTime] = useState(0); // tempo em ms
  // const [isRunning, setIsRunning] = useState(autoStart);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const elapsedBeforePause = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedBeforePause.current;

      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10); // atualiza a cada 10ms

      if (buttonPlayPauseId === '1' || buttonPlayPauseId === '2' || buttonPlayPauseId === '3' || buttonPlayPauseId === '4' || buttonPlayPauseId === '5' || buttonPlayPauseId === '6' || buttonPlayPauseId === '7' || buttonPlayPauseId === '8' || buttonPlayPauseId === '9' || buttonPlayPauseId === '10' || buttonPlayPauseId === '11' || buttonPlayPauseId === '12' || buttonPlayPauseId === '13' || buttonPlayPauseId === '14' || buttonPlayPauseId === '15') {
        pauseOthersExercisesTimers()

      }
      
    }
    
    return () => clearInterval(intervalRef.current);

  }, [isRunning, pauseOthersExercisesTimers, setTime, buttonPlayPauseId]);

  const toggleTimer = (buttonPlayPauseId) => {
    if (isRunning) {
      elapsedBeforePause.current = time;
    }
    setIsRunning((prev) => !prev);

    if (buttonPlayPauseId === '1' || buttonPlayPauseId === '2' || buttonPlayPauseId === '3' || buttonPlayPauseId === '4' || buttonPlayPauseId === '5' || buttonPlayPauseId === '6' || buttonPlayPauseId === '7' || buttonPlayPauseId === '8' || buttonPlayPauseId === '9' || buttonPlayPauseId === '10' || buttonPlayPauseId === '11' || buttonPlayPauseId === '12' || buttonPlayPauseId === '13' || buttonPlayPauseId === '14' || buttonPlayPauseId === '15') {
      setPlayPauseId(buttonPlayPauseId)

    }

  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    elapsedBeforePause.current = 0;

  };

  const formatTime = () => {
    const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${ms}`;

  };

  return (
    <div className={`timer ${specificStyleTimer}`}>
      <span className={`timer-display ${specificStyleTimerDisplay}`}>{formatTime()}</span>

      <div className="timer-buttons">
        <button
          id={buttonPlayPauseId}
          onClick={() => toggleTimer(buttonPlayPauseId)}
          className={`timer-button ${specificStyleTimerButton}`} 
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={reset}
          className={`timer-button ${specificStyleTimerButton}`}
        >
            <FaStop />
        </button>
      </div>
    </div>
  );
}
