import './ToggleDefault.css';
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';

function ToggleDefault({ specificStyleTitleToggle, specificStyleTitleToggleText, specificStyleToggle }) {

  const { isOnToggleTimersExercises, setIsOnToggleTimersExercises } = useOutletContext()

  function toggle() {
    setIsOnToggleTimersExercises(isOnToggle => !isOnToggle)

  }

  return(
    <div className={`styleTextToggle ${specificStyleTitleToggle}`}>
      <span className={`styleTextToggle-text ${specificStyleTitleToggleText}`}>Timers</span>

      {isOnToggleTimersExercises ?
        <MdToggleOn 
          onClick={toggle}
          className={`toggle-on ${specificStyleToggle}`} 
        /> 
        :
        <MdToggleOff 
          onClick={toggle}
          className={`toggle-off ${specificStyleToggle}`} 
        />
      }

    </div>

  )
}

export default ToggleDefault;
