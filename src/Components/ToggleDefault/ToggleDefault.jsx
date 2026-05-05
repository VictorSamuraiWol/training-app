import './ToggleDefault.css';
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';
import { BsClockFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

function ToggleDefault({ specificsStylesToggles, specificStyleToggle }) {

  const { isOnToggleTimersExercises, setIsOnToggleTimersExercises } = useOutletContext()

  function toggle() {
    setIsOnToggleTimersExercises(isOnToggle => !isOnToggle)

  }

  return(
    <div className={`styleToggle ${specificsStylesToggles}`}>
      {isOnToggleTimersExercises ?
        <BsClockFill 
          onClick={toggle}
          className={`toggle-on ${specificStyleToggle}`}
        /> 
        :
        <BsClock 
          onClick={toggle}
          className={`toggle-off ${specificStyleToggle}`}
        />
      }

    </div>

  )

}

export default ToggleDefault;
