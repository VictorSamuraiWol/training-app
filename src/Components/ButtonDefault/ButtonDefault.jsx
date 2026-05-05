import './ButtonDefault.css';
import soundButton from '../../assets/audios/click-sound.mp3';

function ButtonDefault({ onClick, specificStylesButton, nameButton, typeButton, imageReact }) {

  const clickSoundButton = new Audio(soundButton)

  function multiFunctionsOnCLickAudio() {
    clickSoundButton.play() 
    onClick && onClick()

  }

  return (
    <button
      onClick={multiFunctionsOnCLickAudio}
      className={specificStylesButton}
      type={typeButton}
    >
      {imageReact}{nameButton}
    </button>
  )
}

export default ButtonDefault;
