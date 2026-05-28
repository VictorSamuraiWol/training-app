import "./Timer.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function Timer({ specificStyleTimer, specificStyleTimerDisplay, specificStyleTimerButton,
  _key, keyInput, setKeyInput, checkedInputs, ableOnClickButton
}) {

  const [isRunning, setIsRunning] = useState(false)
  
  const [time, setTime] = useState(0)

  const intervalRef = useRef(null)

  const startTimeRef = useRef(0)

  const elapsedBeforePause = useRef(0)

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedBeforePause.current

      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current)

      }, 10)
      
    }
    
    return () => clearInterval(intervalRef.current)

  }, [isRunning, setTime])

  const toggleTimer = () => {
    if (isRunning) {
      elapsedBeforePause.current = time
    }
    setIsRunning((prev) => !prev)

  }

  const reset = () => {
    setIsRunning(false)
    setTime(0)
    elapsedBeforePause.current = 0

  }

  useEffect(() => {
    if (checkedInputs?.includes(_key) && _key === keyInput) {
      setKeyInput(`${_key}+${Math.floor(Math.random() * 100)}`)

    } else if (!checkedInputs?.includes(_key)) {
      setKeyInput && setKeyInput(_key)

    }

  }, [checkedInputs, _key, setKeyInput, keyInput])


  const formatTime = () => {
    const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0")
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0")
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0")
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0")

    return `${hours}:${minutes}:${seconds}:${ms}`

  }

  return (
    <div className={`timer ${specificStyleTimer}`}>
      <span className={`timer-display ${specificStyleTimerDisplay}`}>{formatTime()}</span>

      <div className="timer-buttons">
        <button
          onClick={ableOnClickButton ? toggleTimer : null}
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

  )

}
