import './ToggleDefault.css';
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

function ToggleDefault({ idToggle, isOnToggle, setIsOnToggle, specificsStylesToggles, 
  specificStyleToggle, onMouseOver, onMouseLeave, ableDescriptionIconsMenu, descriptionIconName }) {

  function toggle() {
    setIsOnToggle(isOnToggle => !isOnToggle)

  }

  return(
    <div className='container-description-toogle'>
      {ableDescriptionIconsMenu && descriptionIconName === 'Timer' &&
        <span
          className='descriptionIconsMenu'
        >
          {descriptionIconName}
        </span>
      }

      {/* timers */}
      {idToggle === 'timers' &&
      <div 
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={`styleToggle ${specificsStylesToggles}`}
      >
        {isOnToggle ?
        <BsClockFill
          onClick={toggle}
          className={`toggle-on ${specificStyleToggle}`}
        /> 
        :
        <BsClock 
          onClick={toggle}
          className={`toggle-off ${specificStyleToggle}`}
        />}

      </div>}

    </div>

  )

}

export default ToggleDefault;
