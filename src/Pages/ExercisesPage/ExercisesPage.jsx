import './ExercisesPage.css';
import Card from '../../Components/Main/Cards/Card/Card';
import Timer from '../../Components/Timer/Timer';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import audio1 from '../../assets/audios/armin-miami-2026.mp3'
import audio2 from '../../assets/audios/workout-music-2025.mp3'
import ToggleDefault from '../../Components/ToggleDefault/ToggleDefault';
import VideoModal from '../../Components/Modal/VideoModal/VideoModal';
import PlayerVideoYT from '../../Components/PlayerVideoYT/PlayerVideoYT';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { BsClockFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

function ExercisesPage() {

  const { staticUsersContents, dynamicUsersContents, typeTrain, loginValidate, nameUser, setAbleExercisesPage } = useContext(DataContext)

  const { isOnToggleTimersExercises, setIsOnToggleTimersExercises, selectIdVideoModal, compactUserName
  } = useOutletContext()

  const { id } = useParams()

  // console.log('id:', id, 25)

  // audios
  const [audiosDescriptions] = useState({
      audio1: audio1,
      audio2: audio2

  })

  useEffect(() => {
    setAbleExercisesPage(true)

    return () => {
      setAbleExercisesPage(false) // runs on component unmount
    } 

  }, [])

  return(
    <div className='exercises-page-style'>
      {loginValidate && <div className='banner-exercises-page'></div>}

      <PlayerVideoYT videoSelected = {{
          src : `https://www.youtube.com/embed/${selectIdVideoModal}?autoplay=1`,
          title : "Youtube Video Player"
        }}
      />

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => ({id: user.id, audio: user.audio, exercises: user.exercises}))
      .map((id_audio_exercises) => (
      <main 
        className='exercises-page-style-cards'
        key={id_audio_exercises.id}
      >
        <div className='exercises-page-style-cards-timer-title-music'>

          <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

          <MusicPlayer
            key='0'
            src={audiosDescriptions[id_audio_exercises.audio]}
            specificStylePlayer='music-player'
            specificStyleMusicButton='specificStyleMusicButton' 
          />

          <div className='exercises-page-style-cards-timer-title-music-toggle-video-modal'>
            <ToggleDefault 
              idToggle='timers'
              specificsStylesToggles='toggle-default-timer-title-music'
              specificStyleToggle='toggle-default-timer-title-music-toggle-on-toggle-off'
              isOnToggle={isOnToggleTimersExercises}
              setIsOnToggle={setIsOnToggleTimersExercises}
            />

            <VideoModal specificsStylesTogglesVideoModal='specificsStylesTogglesVideoModal' />

          </div>

        </div>

        <div className='container-exercises-page-style-cards-title'>
          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName(nameUser, 8)}</h1>
            <h1 className='exercises-page-style-cards-title-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

          </div >

          {id_audio_exercises.exercises
          .filter(exercises => exercises[0].type === typeTrain)
          .map((exercisesFilter) => exercisesFilter[1].exercises)
          .map((exercises, index) => (
            <Card
              key={`${typeTrain}${index}`}
              _key={typeTrain}
              exercises={exercises}
            />
          
          ))}

        </div>

      </main>))}

    </div>

  )
  
}

export default ExercisesPage;
