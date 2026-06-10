import './ExercisesPage.css';
import Card from '../../Components/Main/Cards/Card/Card';
import Timer from '../../Components/Timer/Timer';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import audio1 from '../../assets/audios/armin-miami-2026.mp3'
import audio2 from '../../assets/audios/workout-music-2025.mp3'
import ToggleDefault from '../../Components/ToggleDefault/ToggleDefault';
import VideoModal from '../../Components/Modal/VideoModal/VideoModal';
import PlayerVideoYT from '../../Components/PlayerVideoYT/PlayerVideoYT';
import CreateAllClientsDB from '../../Components/CreateAllClientsDB/CreateAllClientsDB';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { BsClockFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { insertAllClients } from '../../Components/Supabase/supabaseRequests/supabaseRequests';

function ExercisesPage() {

  const { staticUsersContents, dbUsers, typeTrain, loginValidate, nameUser, 
    setAbleExercisesPage, insertError, setInsertError, clientsDataJson
  } = useContext(DataContext)

  const { isOnToggleTimersExercises, setIsOnToggleTimersExercises, selectIdVideoModal, compactUserName,
    ableMusic, setAbleMusic, setAbleTimer, ableBanner, setAbleBanner, ableVideoBanner, setAbleVideoBanner,
    selectNameVideoModal
  } = useOutletContext()

  const { id } = useParams()

  const [ableDescriptionIconsMenu, setAbleDescriptionIconsMenu] = useState(false)

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

  useEffect(() => {
    setAbleTimer(true)
    setAbleMusic(true)
    setAbleBanner(true)
    setAbleVideoBanner(false)
    
  }, [])

  const [descriptionIconName, setDescriptionIconName] = useState('')

  return(
    <div className='exercises-page-style'>
      <div className='container-banner-iframe-delete-icons'>
        {loginValidate && !ableVideoBanner && ableBanner &&
        <div className='container-delete-button-banner'>
          <TiDeleteOutline
            onClick={() => setAbleBanner(false)}
            className='delete-icon-banner-exercises-page'
          /> 

          <div className='banner-exercises-page'></div>

        </div>}

        {loginValidate && ableVideoBanner &&
        <div className='container-iframe-delete'>
          <TiDeleteOutline
            onClick={() => setAbleVideoBanner(false)} 
            className='videos-target-banner-iframe-delete-icon'
          /> 

          <iframe
            className='videos-target-banner-iframe'
            src={`https://www.youtube.com/embed/${selectIdVideoModal}`}
            title={selectNameVideoModal}
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

        </div>}

      </div>

      {loginValidate && selectIdVideoModal && <PlayerVideoYT videoSelected = {{
          src : `https://www.youtube.com/embed/${selectIdVideoModal}?autoplay=1`,
          title: `${selectNameVideoModal}`
        }}
      />}

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dbUsers) && loginValidate && [...(staticUsersContents), ...(dbUsers)]
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => ({id: user.id, audio: user.audio, exercises: user.exercises}))
      .map((id_audio_exercises) => (
      <main 
        className='exercises-page-style-cards'
        key={id_audio_exercises.id}
      >
        <div
          className={ableMusic ? 'menu-exercises-page-style-cards-timer-title-music-toggle-video-modal' : 
            'new-menu-exercises-page-style-cards-timer-title-music-toggle-video-modal'}
        >
          {loginValidate && nameUser.toLowerCase() === 'Victor'.toLowerCase() && 
            <CreateAllClientsDB
              onClick={() => insertAllClients(clientsDataJson, setInsertError)}
              onMouseOver={() => {setAbleDescriptionIconsMenu(true); setDescriptionIconName('Create All Clients')}}
              onMouseLeave={() => {setAbleDescriptionIconsMenu(false); setDescriptionIconName('')}}
              ableDescriptionIconsMenu={ableDescriptionIconsMenu}
              descriptionIconName={descriptionIconName}
              insertError={insertError}
            />
          }

          <VideoModal
            onMouseOver={() => {setAbleDescriptionIconsMenu(true); setDescriptionIconName('YouTube')}}
            onMouseLeave={() => {setAbleDescriptionIconsMenu(false); setDescriptionIconName('')}}
            ableDescriptionIconsMenu={ableDescriptionIconsMenu}
            descriptionIconName={descriptionIconName}
            specificsStylesTogglesVideoModal={ableMusic ? 'specificsStylesTogglesVideoModal' : 
            'new-specificsStylesTogglesVideoModal'} 
          />

          <ToggleDefault
            onMouseOver={() => {setAbleDescriptionIconsMenu(true); setDescriptionIconName('Timer')}}
            onMouseLeave={() => {setAbleDescriptionIconsMenu(false); setDescriptionIconName('')}}
            ableDescriptionIconsMenu={ableDescriptionIconsMenu}
            descriptionIconName={descriptionIconName}
            idToggle='timers'
            specificsStylesToggles={ableMusic ? 'toggle-default-timer-title-music' : 'new-toggle-default-timer-title-music'}
            specificStyleToggle='toggle-default-timer-title-music-toggle-on-toggle-off'
            isOnToggle={isOnToggleTimersExercises}
            setIsOnToggle={setIsOnToggleTimersExercises}
          />

        </div>

        <div className='exercises-page-style-cards-timer-title-music'>

          <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

          {ableMusic && 
          <div
          className='container-delete-icon-music-player'>
            <TiDeleteOutline
              onClick={() => setAbleMusic(false)}
              className='music-delete-icon'
            />
            
            <MusicPlayer
              key='0'
              src={audiosDescriptions[id_audio_exercises.audio]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />
          </div>}

        </div>

        <div className='container-exercises-page-style-cards-title'>
          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName(nameUser, 8)}</h1>

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
