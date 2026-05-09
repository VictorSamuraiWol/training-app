import './ExercisesPage.css';
import Card from '../../Components/Main/Cards/Card/Card';
import Timer from '../../Components/Timer/Timer';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import audio1 from '../../assets/audios/armin-miami-2026.mp3'
import audio2 from '../../assets/audios/workout-music-2025.mp3'
import ToggleDefault from '../../Components/ToggleDefault/ToggleDefault';
import waitingTheExercise from '../../assets/images/exercises-gif/waiting-the-exercise-gif.gif'
import hiit from '../../assets/images/exercises-gif/hiit-gif.gif'
import barbellBenchPress from '../../assets/images/exercises-gif/barbell-bench-press-gif.gif'
import concentrationCurl from '../../assets/images/exercises-gif/concentration-curl-gif.gif'
import dumbbellReverseCurl from '../../assets/images/exercises-gif/dumbbell-reverse-curl-gif.gif'
import plank from '../../assets/images/exercises-gif/plank-gif.gif'
import VideoModal from '../../Components/Modal/VideoModal/VideoModal';
import PlayerVideoYT from '../../Components/PlayerVideoYT/PlayerVideoYT';
import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { Link, useOutletContext } from 'react-router-dom';
import { BsClockFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

function ExercisesPage() {

  const { staticUsersContents, dinamicUsersContents, typeTrain, loginValidate, nameUser } = useContext(DataContext)

  const { isOnToggleTimersExercises, setIsOnToggleTimersExercises, selectIdVideoModal, compactUserName
  } = useOutletContext()

  const [isRunningAllTime, setIsRunningAllTime] = useState(false)

  // audios
  const [audiosDescriptions] = useState({
      audio1: audio1,
      audio2: audio2

  })

  // exercises gifs
  const [exercisesGifs] = useState({
    waitingTheExercise: waitingTheExercise,
    hiit: hiit,
    barbellBenchPress: barbellBenchPress,
    concentrationCurl: concentrationCurl,
    dumbbellReverseCurl: dumbbellReverseCurl,
    plank: plank

  })

  return(
    <div className='exercises-page-style'>
      {loginValidate && <div className='banner-exercises-page'></div>}

      <PlayerVideoYT videoSelected = {{
          src : `https://www.youtube.com/embed/${selectIdVideoModal}?autoplay=1`,
          title : "Youtube Video Player"
        }}
      />

      {/* Static Content */}
      {staticUsersContents && loginValidate && staticUsersContents
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => (
        <main className='exercises-page-style-cards' key={user.id}>
          <div className='exercises-page-style-cards-timer-title-music'>
            <div className='title-timer'>
              {isOnToggleTimersExercises && <p className='title-timer-text'>Total Time:</p>}
              {!isOnToggleTimersExercises && <p className='title-timer-text'>Time:</p>}

              <Timer
                key='0'
                isRunning={isRunningAllTime}
                setIsRunning={setIsRunningAllTime} 
                specificStyleTimer='specificStyleTimer' 
                specificStyleTimerDisplay='specificStyleTimerDisplay' 
                specificStyleTimerButton='specificStyleTimerButton'
                buttonPlayPauseId='0'
              />
            </div>

            <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

            <MusicPlayer
              key='0'
              src={audiosDescriptions[user.audio]}
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

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName(nameUser, 8)}</h1>
            <h1 className='exercises-page-style-cards-title-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

          </div >

          {(user.exercise1[0] || user.exercise2[0] || user.exercise3[0] || user.exercise4[0] || user.exercise5[0] || user.exercise6[0] || user.exercise7[0]
            || user.exercise8[0] || user.exercise9[0] || user.exercise10[0] || user.exercise11[0] || user.exercise12[0] || user.exercise13[0] || user.exercise14[0]
            || user.exercise15[0]) && user.exercise1[0][0] === 'A' && typeTrain === "A" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id}
            exercise1={user.exercise1[0] !== undefined && user.exercise1[0][1] !== '' && `1.${user.exercise1[0][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[0][1] !== '' && `2.${user.exercise2[0][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[0][1] !== '' && `3.${user.exercise3[0][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[0][1] !== '' && `4.${user.exercise4[0][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[0][1] !== '' && `5.${user.exercise5[0][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[0][1] !== '' && `6.${user.exercise6[0][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[0][1] !== '' && `7.${user.exercise7[0][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[0][1] !== '' && `8.${user.exercise8[0][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[0][1] !== '' && `9.${user.exercise9[0][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[0][1] !== '' && `10.${user.exercise10[0][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[0][1] !== '' && `11.${user.exercise11[0][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[0][1] !== '' && `12.${user.exercise12[0][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[0][1] !== '' && `13.${user.exercise13[0][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[0][1] !== '' && `14.${user.exercise14[0][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[0][1] !== '' && `15.${user.exercise15[0][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[0][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[0][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[0][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[0][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[0][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[0][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[0][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[0][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[0][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[0][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[0][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[0][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[0][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[0][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[0][1]]}
          />}

          {(user.exercise1[1] || user.exercise2[1] || user.exercise3[1] || user.exercise4[1] || user.exercise5[1] || user.exercise6[1] || user.exercise7[1]
            || user.exercise8[1] || user.exercise9[1] || user.exercise10[1] || user.exercise11[1] || user.exercise12[1] || user.exercise13[1] || user.exercise14[1]
            || user.exercise15[1]) && user.exercise1[1][0] === 'B' && typeTrain === "B" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id}
            exercise1={user.exercise1[0] !== undefined && user.exercise1[1][1] !== '' && `1.${user.exercise1[1][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[1][1] !== '' && `2.${user.exercise2[1][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[1][1] !== '' && `3.${user.exercise3[1][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[1][1] !== '' && `4.${user.exercise4[1][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[1][1] !== '' && `5.${user.exercise5[1][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[1][1] !== '' && `6.${user.exercise6[1][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[1][1] !== '' && `7.${user.exercise7[1][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[1][1] !== '' && `8.${user.exercise8[1][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[1][1] !== '' && `9.${user.exercise9[1][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[1][1] !== '' && `10.${user.exercise10[1][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[1][1] !== '' && `11.${user.exercise11[1][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[1][1] !== '' && `12.${user.exercise12[1][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[1][1] !== '' && `13.${user.exercise13[1][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[1][1] !== '' && `14.${user.exercise14[1][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[1][1] !== '' && `15.${user.exercise15[1][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[1][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[1][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[1][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[1][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[1][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[1][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[1][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[1][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[1][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[1][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[1][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[1][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[1][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[1][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[1][1]]}
          />}

          {(user.exercise1[2] || user.exercise2[2] || user.exercise3[2] || user.exercise4[2] || user.exercise5[2] || user.exercise6[2] || user.exercise7[2]
            || user.exercise8[2] || user.exercise9[2] || user.exercise10[2] || user.exercise11[2] || user.exercise12[2] || user.exercise13[2] || user.exercise14[2]
            || user.exercise15[2]) && user.exercise1[2][0] === 'C' && typeTrain === "C" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[2][1] !== '' && `1.${user.exercise1[2][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[2][1] !== '' && `2.${user.exercise2[2][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[2][1] !== '' && `3.${user.exercise3[2][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[2][1] !== '' && `4.${user.exercise4[2][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[2][1] !== '' && `5.${user.exercise5[2][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[2][1] !== '' && `6.${user.exercise6[2][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[2][1] !== '' && `7.${user.exercise7[2][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[2][1] !== '' && `8.${user.exercise8[2][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[2][1] !== '' && `9.${user.exercise9[2][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[2][1] !== '' && `10.${user.exercise10[2][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[2][1] !== '' && `11.${user.exercise11[2][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[2][1] !== '' && `12.${user.exercise12[2][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[2][1] !== '' && `13.${user.exercise13[2][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[2][1] !== '' && `14.${user.exercise14[2][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[2][1] !== '' && `15.${user.exercise15[2][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[2][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[2][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[2][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[2][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[2][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[2][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[2][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[2][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[2][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[2][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[2][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[2][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[2][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[2][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[2][1]]}
          />}

          {(user.exercise1[3] || user.exercise2[3] || user.exercise3[3] || user.exercise4[3] || user.exercise5[3] || user.exercise6[3] || user.exercise7[3]
            || user.exercise8[3] || user.exercise9[3] || user.exercise10[3] || user.exercise11[3] || user.exercise12[3] || user.exercise13[3] || user.exercise14[3]
            || user.exercise15[3]) && user.exercise1[3][0] === 'D' && typeTrain === "D" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[3][1] !== '' && `1.${user.exercise1[3][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[3][1] !== '' && `2.${user.exercise2[3][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[3][1] !== '' && `3.${user.exercise3[3][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[3][1] !== '' && `4.${user.exercise4[3][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[3][1] !== '' && `5.${user.exercise5[3][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[3][1] !== '' && `6.${user.exercise6[3][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[3][1] !== '' && `7.${user.exercise7[3][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[3][1] !== '' && `8.${user.exercise8[3][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[3][1] !== '' && `9.${user.exercise9[3][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[3][1] !== '' && `10.${user.exercise10[3][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[3][1] !== '' && `11.${user.exercise11[3][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[3][1] !== '' && `12.${user.exercise12[3][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[3][1] !== '' && `13.${user.exercise13[3][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[3][1] !== '' && `14.${user.exercise14[3][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[3][1] !== '' && `15.${user.exercise15[3][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[3][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[3][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[3][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[3][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[3][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[3][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[3][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[3][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[3][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[3][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[3][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[3][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[3][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[3][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[3][1]]}
          />}

          {(user.exercise1[4] || user.exercise2[4] || user.exercise3[4] || user.exercise4[4] || user.exercise5[4] || user.exercise6[4] || user.exercise7[4]
            || user.exercise8[4] || user.exercise9[4] || user.exercise10[4] || user.exercise11[4] || user.exercise12[4] || user.exercise13[4] || user.exercise14[4]
            || user.exercise15[4]) && user.exercise1[4][0] === 'E' && typeTrain === "E" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[4][1] !== '' && `1.${user.exercise1[4][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[4][1] !== '' && `2.${user.exercise2[4][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[4][1] !== '' && `3.${user.exercise3[4][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[4][1] !== '' && `4.${user.exercise4[4][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[4][1] !== '' && `5.${user.exercise5[4][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[4][1] !== '' && `6.${user.exercise6[4][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[4][1] !== '' && `7.${user.exercise7[4][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[4][1] !== '' && `8.${user.exercise8[4][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[4][1] !== '' && `9.${user.exercise9[4][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[4][1] !== '' && `10.${user.exercise10[4][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[4][1] !== '' && `11.${user.exercise11[4][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[4][1] !== '' && `12.${user.exercise12[4][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[4][1] !== '' && `13.${user.exercise13[4][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[4][1] !== '' && `14.${user.exercise14[4][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[4][1] !== '' && `15.${user.exercise15[4][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[4][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[4][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[4][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[4][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[4][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[4][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[4][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[4][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[4][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[4][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[4][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[4][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[4][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[4][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[4][1]]}
          />}

          {(user.exercise1[5] || user.exercise2[5] || user.exercise3[5] || user.exercise4[5] || user.exercise5[5] || user.exercise6[5] || user.exercise7[5]
            || user.exercise8[5] || user.exercise9[5] || user.exercise10[5] || user.exercise11[5] || user.exercise12[5] || user.exercise13[5] || user.exercise14[5]
            || user.exercise15[5]) && user.exercise1[5][0] === 'F' && typeTrain === "F" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[5][1] !== '' && `1.${user.exercise1[5][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[5][1] !== '' && `2.${user.exercise2[5][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[5][1] !== '' && `3.${user.exercise3[5][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[5][1] !== '' && `4.${user.exercise4[5][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[5][1] !== '' && `5.${user.exercise5[5][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[5][1] !== '' && `6.${user.exercise6[5][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[5][1] !== '' && `7.${user.exercise7[5][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[5][1] !== '' && `8.${user.exercise8[5][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[5][1] !== '' && `9.${user.exercise9[5][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[5][1] !== '' && `10.${user.exercise10[5][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[5][1] !== '' && `11.${user.exercise11[5][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[5][1] !== '' && `12.${user.exercise12[5][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[5][1] !== '' && `13.${user.exercise13[5][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[5][1] !== '' && `14.${user.exercise14[5][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[5][1] !== '' && `15.${user.exercise15[5][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[5][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[5][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[5][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[5][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[5][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[5][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[5][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[5][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[5][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[5][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[5][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[5][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[5][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[5][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[5][1]]}
          />}

          {(user.exercise1[6] || user.exercise2[6] || user.exercise3[6] || user.exercise4[6] || user.exercise5[6] || user.exercise6[6] || user.exercise7[6]
            || user.exercise8[6] || user.exercise9[6] || user.exercise10[6] || user.exercise11[6] || user.exercise12[6] || user.exercise13[6] || user.exercise14[6]
            || user.exercise15[6]) && user.exercise1[6][0] === 'G' && typeTrain === "G" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[6][1] !== '' && `1.${user.exercise1[6][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[6][1] !== '' && `2.${user.exercise2[6][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[6][1] !== '' && `3.${user.exercise3[6][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[6][1] !== '' && `4.${user.exercise4[6][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[6][1] !== '' && `5.${user.exercise5[6][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[6][1] !== '' && `6.${user.exercise6[6][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[6][1] !== '' && `7.${user.exercise7[6][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[6][1] !== '' && `8.${user.exercise8[6][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[6][1] !== '' && `9.${user.exercise9[6][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[6][1] !== '' && `10.${user.exercise10[6][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[6][1] !== '' && `11.${user.exercise11[6][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[6][1] !== '' && `12.${user.exercise12[6][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[6][1] !== '' && `13.${user.exercise13[6][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[6][1] !== '' && `14.${user.exercise14[6][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[6][1] !== '' && `15.${user.exercise15[6][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[6][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[6][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[6][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[6][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[6][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[6][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[6][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[6][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[6][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[6][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[6][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[6][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[6][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[6][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[6][1]]}
          />}

          {(user.exercise1[7] || user.exercise2[7] || user.exercise3[7] || user.exercise4[7] || user.exercise5[7] || user.exercise6[7] || user.exercise7[7]
            || user.exercise8[7] || user.exercise9[7] || user.exercise10[7] || user.exercise11[7] || user.exercise12[7] || user.exercise13[7] || user.exercise14[7]
            || user.exercise15[7]) && user.exercise1[7][0] === 'H' && typeTrain === "H" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[7][1] !== '' && `1.${user.exercise1[7][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[7][1] !== '' && `2.${user.exercise2[7][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[7][1] !== '' && `3.${user.exercise3[7][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[7][1] !== '' && `4.${user.exercise4[7][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[7][1] !== '' && `5.${user.exercise5[7][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[7][1] !== '' && `6.${user.exercise6[7][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[7][1] !== '' && `7.${user.exercise7[7][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[7][1] !== '' && `8.${user.exercise8[7][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[7][1] !== '' && `9.${user.exercise9[7][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[7][1] !== '' && `10.${user.exercise10[7][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[7][1] !== '' && `11.${user.exercise11[7][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[7][1] !== '' && `12.${user.exercise12[7][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[7][1] !== '' && `13.${user.exercise13[7][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[7][1] !== '' && `14.${user.exercise14[7][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[7][1] !== '' && `15.${user.exercise15[7][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[7][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[7][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[7][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[7][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[7][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[7][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[7][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[7][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[7][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[7][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[7][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[7][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[7][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[7][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[7][1]]}
          />}

          {(user.exercise1[8] || user.exercise2[8] || user.exercise3[8] || user.exercise4[8] || user.exercise5[8] || user.exercise6[8] || user.exercise7[8]
            || user.exercise8[8] || user.exercise9[8] || user.exercise10[8] || user.exercise11[8] || user.exercise12[8] || user.exercise13[8] || user.exercise14[8]
            || user.exercise15[8]) && user.exercise1[8][0] === 'I' && typeTrain === "I" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[8][1] !== '' && `1.${user.exercise1[8][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[8][1] !== '' && `2.${user.exercise2[8][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[8][1] !== '' && `3.${user.exercise3[8][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[8][1] !== '' && `4.${user.exercise4[8][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[8][1] !== '' && `5.${user.exercise5[8][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[8][1] !== '' && `6.${user.exercise6[8][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[8][1] !== '' && `7.${user.exercise7[8][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[8][1] !== '' && `8.${user.exercise8[8][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[8][1] !== '' && `9.${user.exercise9[8][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[8][1] !== '' && `10.${user.exercise10[8][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[8][1] !== '' && `11.${user.exercise11[8][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[8][1] !== '' && `12.${user.exercise12[8][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[8][1] !== '' && `13.${user.exercise13[8][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[8][1] !== '' && `14.${user.exercise14[8][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[8][1] !== '' && `15.${user.exercise15[8][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[8][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[8][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[8][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[8][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[8][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[8][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[8][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[8][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[8][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[8][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[8][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[8][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[8][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[8][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[8][1]]}
          />}

          {(user.exercise1[9] || user.exercise2[9] || user.exercise3[9] || user.exercise4[9] || user.exercise5[9] || user.exercise6[9] || user.exercise7[9]
            || user.exercise8[9] || user.exercise9[9] || user.exercise10[9] || user.exercise11[9] || user.exercise12[9] || user.exercise13[9] || user.exercise14[9]
            || user.exercise15[9]) && user.exercise1[9][0] === 'J' && typeTrain === "J" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[0] !== undefined && user.exercise1[9][1] !== '' && `1.${user.exercise1[9][1]}`}
            exercise2={user.exercise2[0] !== undefined && user.exercise2[9][1] !== '' && `2.${user.exercise2[9][1]}`}
            exercise3={user.exercise3[0] !== undefined && user.exercise3[9][1] !== '' && `3.${user.exercise3[9][1]}`}
            exercise4={user.exercise4[0] !== undefined && user.exercise4[9][1] !== '' && `4.${user.exercise4[9][1]}`}
            exercise5={user.exercise5[0] !== undefined && user.exercise5[9][1] !== '' && `5.${user.exercise5[9][1]}`}
            exercise6={user.exercise6[0] !== undefined && user.exercise6[9][1] !== '' && `6.${user.exercise6[9][1]}`}
            exercise7={user.exercise7[0] !== undefined && user.exercise7[9][1] !== '' && `7.${user.exercise7[9][1]}`}
            exercise8={user.exercise8[0] !== undefined && user.exercise8[9][1] !== '' && `8.${user.exercise8[9][1]}`}
            exercise9={user.exercise9[0] !== undefined && user.exercise9[9][1] !== '' && `9.${user.exercise9[9][1]}`}
            exercise10={user.exercise10[0] !== undefined && user.exercise10[9][1] !== '' && `10.${user.exercise10[9][1]}`}
            exercise11={user.exercise11[0] !== undefined && user.exercise11[9][1] !== '' && `11.${user.exercise11[9][1]}`}
            exercise12={user.exercise12[0] !== undefined && user.exercise12[9][1] !== '' && `12.${user.exercise12[9][1]}`}
            exercise13={user.exercise13[0] !== undefined && user.exercise13[9][1] !== '' && `13.${user.exercise13[9][1]}`}
            exercise14={user.exercise14[0] !== undefined && user.exercise14[9][1] !== '' && `14.${user.exercise14[9][1]}`}
            exercise15={user.exercise15[0] !== undefined && user.exercise15[9][1] !== '' && `15.${user.exercise15[9][1]}`}
            exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[9][1]]}
            exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[9][1]]}
            exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[9][1]]}
            exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[9][1]]}
            exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[9][1]]}
            exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[9][1]]}
            exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[9][1]]}
            exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[9][1]]}
            exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[9][1]]}
            exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[9][1]]}
            exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[9][1]]}
            exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[9][1]]}
            exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[9][1]]}
            exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[9][1]]}
            exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[9][1]]}
          />}

        </main>))}

        {/* Dinamic Content */}
        {dinamicUsersContents && loginValidate && dinamicUsersContents
        .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
        .map(user => (
          <main className='exercises-page-style-cards' key={user.id}>
            <div className='exercises-page-style-cards-timer-title-music'>
              <div className='title-timer'>
                {isOnToggleTimersExercises && <p className='title-timer-text'>Total Time:</p>}
                {!isOnToggleTimersExercises && <p className='title-timer-text'>Time:</p>}
                
                <Timer
                  key='0'
                  isRunning={isRunningAllTime}
                  setIsRunning={setIsRunningAllTime} 
                  specificStyleTimer='specificStyleTimer' 
                  specificStyleTimerDisplay='specificStyleTimerDisplay' 
                  specificStyleTimerButton='specificStyleTimerButton'
                  buttonPlayPauseId='0'
                />
              </div>

              <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

              <MusicPlayer
                key='0'
                src={audiosDescriptions[user.audio]}
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

            <div className='exercises-page-style-cards-title'>
              <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName(nameUser, 8)}</h1>
              <h1 className='exercises-page-style-cards-title-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

            </div >

            {(user.exercise1[0] || user.exercise2[0] || user.exercise3[0] || user.exercise4[0] || user.exercise5[0] || user.exercise6[0] || user.exercise7[0]
              || user.exercise8[0] || user.exercise9[0] || user.exercise10[0] || user.exercise11[0] || user.exercise12[0] || user.exercise13[0] || user.exercise14[0]
              || user.exercise15[0]) && user.exercise1[0][0] === 'A' && typeTrain === "A" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id}
              exercise1={user.exercise1[0] !== undefined && user.exercise1[0][1] !== '' && `1.${user.exercise1[0][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[0][1] !== '' && `2.${user.exercise2[0][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[0][1] !== '' && `3.${user.exercise3[0][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[0][1] !== '' && `4.${user.exercise4[0][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[0][1] !== '' && `5.${user.exercise5[0][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[0][1] !== '' && `6.${user.exercise6[0][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[0][1] !== '' && `7.${user.exercise7[0][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[0][1] !== '' && `8.${user.exercise8[0][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[0][1] !== '' && `9.${user.exercise9[0][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[0][1] !== '' && `10.${user.exercise10[0][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[0][1] !== '' && `11.${user.exercise11[0][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[0][1] !== '' && `12.${user.exercise12[0][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[0][1] !== '' && `13.${user.exercise13[0][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[0][1] !== '' && `14.${user.exercise14[0][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[0][1] !== '' && `15.${user.exercise15[0][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[0][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[0][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[0][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[0][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[0][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[0][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[0][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[0][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[0][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[0][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[0][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[0][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[0][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[0][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[0][1]]}
            />}

            {(user.exercise1[1] || user.exercise2[1] || user.exercise3[1] || user.exercise4[1] || user.exercise5[1] || user.exercise6[1] || user.exercise7[1]
              || user.exercise8[1] || user.exercise9[1] || user.exercise10[1] || user.exercise11[1] || user.exercise12[1] || user.exercise13[1] || user.exercise14[1]
              || user.exercise15[1]) && user.exercise1[1][0] === 'B' && typeTrain === "B" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id}
              exercise1={user.exercise1[0] !== undefined && user.exercise1[1][1] !== '' && `1.${user.exercise1[1][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[1][1] !== '' && `2.${user.exercise2[1][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[1][1] !== '' && `3.${user.exercise3[1][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[1][1] !== '' && `4.${user.exercise4[1][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[1][1] !== '' && `5.${user.exercise5[1][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[1][1] !== '' && `6.${user.exercise6[1][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[1][1] !== '' && `7.${user.exercise7[1][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[1][1] !== '' && `8.${user.exercise8[1][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[1][1] !== '' && `9.${user.exercise9[1][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[1][1] !== '' && `10.${user.exercise10[1][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[1][1] !== '' && `11.${user.exercise11[1][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[1][1] !== '' && `12.${user.exercise12[1][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[1][1] !== '' && `13.${user.exercise13[1][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[1][1] !== '' && `14.${user.exercise14[1][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[1][1] !== '' && `15.${user.exercise15[1][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[1][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[1][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[1][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[1][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[1][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[1][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[1][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[1][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[1][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[1][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[1][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[1][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[1][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[1][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[1][1]]}
            />}

            {(user.exercise1[2] || user.exercise2[2] || user.exercise3[2] || user.exercise4[2] || user.exercise5[2] || user.exercise6[2] || user.exercise7[2]
              || user.exercise8[2] || user.exercise9[2] || user.exercise10[2] || user.exercise11[2] || user.exercise12[2] || user.exercise13[2] || user.exercise14[2]
              || user.exercise15[2]) && user.exercise1[2][0] === 'C' && typeTrain === "C" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[2][1] !== '' && `1.${user.exercise1[2][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[2][1] !== '' && `2.${user.exercise2[2][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[2][1] !== '' && `3.${user.exercise3[2][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[2][1] !== '' && `4.${user.exercise4[2][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[2][1] !== '' && `5.${user.exercise5[2][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[2][1] !== '' && `6.${user.exercise6[2][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[2][1] !== '' && `7.${user.exercise7[2][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[2][1] !== '' && `8.${user.exercise8[2][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[2][1] !== '' && `9.${user.exercise9[2][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[2][1] !== '' && `10.${user.exercise10[2][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[2][1] !== '' && `11.${user.exercise11[2][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[2][1] !== '' && `12.${user.exercise12[2][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[2][1] !== '' && `13.${user.exercise13[2][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[2][1] !== '' && `14.${user.exercise14[2][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[2][1] !== '' && `15.${user.exercise15[2][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[2][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[2][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[2][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[2][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[2][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[2][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[2][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[2][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[2][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[2][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[2][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[2][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[2][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[2][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[2][1]]}
            />}

            {(user.exercise1[3] || user.exercise2[3] || user.exercise3[3] || user.exercise4[3] || user.exercise5[3] || user.exercise6[3] || user.exercise7[3]
              || user.exercise8[3] || user.exercise9[3] || user.exercise10[3] || user.exercise11[3] || user.exercise12[3] || user.exercise13[3] || user.exercise14[3]
              || user.exercise15[3]) && user.exercise1[3][0] === 'D' && typeTrain === "D" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[3][1] !== '' && `1.${user.exercise1[3][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[3][1] !== '' && `2.${user.exercise2[3][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[3][1] !== '' && `3.${user.exercise3[3][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[3][1] !== '' && `4.${user.exercise4[3][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[3][1] !== '' && `5.${user.exercise5[3][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[3][1] !== '' && `6.${user.exercise6[3][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[3][1] !== '' && `7.${user.exercise7[3][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[3][1] !== '' && `8.${user.exercise8[3][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[3][1] !== '' && `9.${user.exercise9[3][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[3][1] !== '' && `10.${user.exercise10[3][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[3][1] !== '' && `11.${user.exercise11[3][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[3][1] !== '' && `12.${user.exercise12[3][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[3][1] !== '' && `13.${user.exercise13[3][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[3][1] !== '' && `14.${user.exercise14[3][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[3][1] !== '' && `15.${user.exercise15[3][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[3][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[3][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[3][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[3][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[3][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[3][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[3][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[3][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[3][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[3][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[3][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[3][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[3][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[3][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[3][1]]}
            />}

            {(user.exercise1[4] || user.exercise2[4] || user.exercise3[4] || user.exercise4[4] || user.exercise5[4] || user.exercise6[4] || user.exercise7[4]
              || user.exercise8[4] || user.exercise9[4] || user.exercise10[4] || user.exercise11[4] || user.exercise12[4] || user.exercise13[4] || user.exercise14[4]
              || user.exercise15[4]) && user.exercise1[4][0] === 'E' && typeTrain === "E" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[4][1] !== '' && `1.${user.exercise1[4][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[4][1] !== '' && `2.${user.exercise2[4][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[4][1] !== '' && `3.${user.exercise3[4][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[4][1] !== '' && `4.${user.exercise4[4][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[4][1] !== '' && `5.${user.exercise5[4][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[4][1] !== '' && `6.${user.exercise6[4][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[4][1] !== '' && `7.${user.exercise7[4][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[4][1] !== '' && `8.${user.exercise8[4][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[4][1] !== '' && `9.${user.exercise9[4][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[4][1] !== '' && `10.${user.exercise10[4][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[4][1] !== '' && `11.${user.exercise11[4][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[4][1] !== '' && `12.${user.exercise12[4][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[4][1] !== '' && `13.${user.exercise13[4][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[4][1] !== '' && `14.${user.exercise14[4][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[4][1] !== '' && `15.${user.exercise15[4][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[4][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[4][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[4][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[4][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[4][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[4][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[4][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[4][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[4][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[4][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[4][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[4][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[4][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[4][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[4][1]]}
            />}

            {(user.exercise1[5] || user.exercise2[5] || user.exercise3[5] || user.exercise4[5] || user.exercise5[5] || user.exercise6[5] || user.exercise7[5]
              || user.exercise8[5] || user.exercise9[5] || user.exercise10[5] || user.exercise11[5] || user.exercise12[5] || user.exercise13[5] || user.exercise14[5]
              || user.exercise15[5]) && user.exercise1[5][0] === 'F' && typeTrain === "F" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[5][1] !== '' && `1.${user.exercise1[5][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[5][1] !== '' && `2.${user.exercise2[5][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[5][1] !== '' && `3.${user.exercise3[5][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[5][1] !== '' && `4.${user.exercise4[5][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[5][1] !== '' && `5.${user.exercise5[5][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[5][1] !== '' && `6.${user.exercise6[5][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[5][1] !== '' && `7.${user.exercise7[5][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[5][1] !== '' && `8.${user.exercise8[5][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[5][1] !== '' && `9.${user.exercise9[5][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[5][1] !== '' && `10.${user.exercise10[5][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[5][1] !== '' && `11.${user.exercise11[5][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[5][1] !== '' && `12.${user.exercise12[5][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[5][1] !== '' && `13.${user.exercise13[5][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[5][1] !== '' && `14.${user.exercise14[5][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[5][1] !== '' && `15.${user.exercise15[5][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[5][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[5][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[5][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[5][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[5][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[5][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[5][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[5][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[5][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[5][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[5][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[5][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[5][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[5][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[5][1]]}
            />}

            {(user.exercise1[6] || user.exercise2[6] || user.exercise3[6] || user.exercise4[6] || user.exercise5[6] || user.exercise6[6] || user.exercise7[6]
              || user.exercise8[6] || user.exercise9[6] || user.exercise10[6] || user.exercise11[6] || user.exercise12[6] || user.exercise13[6] || user.exercise14[6]
              || user.exercise15[6]) && user.exercise1[6][0] === 'G' && typeTrain === "G" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[6][1] !== '' && `1.${user.exercise1[6][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[6][1] !== '' && `2.${user.exercise2[6][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[6][1] !== '' && `3.${user.exercise3[6][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[6][1] !== '' && `4.${user.exercise4[6][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[6][1] !== '' && `5.${user.exercise5[6][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[6][1] !== '' && `6.${user.exercise6[6][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[6][1] !== '' && `7.${user.exercise7[6][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[6][1] !== '' && `8.${user.exercise8[6][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[6][1] !== '' && `9.${user.exercise9[6][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[6][1] !== '' && `10.${user.exercise10[6][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[6][1] !== '' && `11.${user.exercise11[6][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[6][1] !== '' && `12.${user.exercise12[6][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[6][1] !== '' && `13.${user.exercise13[6][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[6][1] !== '' && `14.${user.exercise14[6][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[6][1] !== '' && `15.${user.exercise15[6][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[6][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[6][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[6][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[6][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[6][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[6][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[6][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[6][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[6][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[6][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[6][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[6][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[6][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[6][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[6][1]]}
            />}

            {(user.exercise1[7] || user.exercise2[7] || user.exercise3[7] || user.exercise4[7] || user.exercise5[7] || user.exercise6[7] || user.exercise7[7]
              || user.exercise8[7] || user.exercise9[7] || user.exercise10[7] || user.exercise11[7] || user.exercise12[7] || user.exercise13[7] || user.exercise14[7]
              || user.exercise15[7]) && user.exercise1[7][0] === 'H' && typeTrain === "H" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[7][1] !== '' && `1.${user.exercise1[7][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[7][1] !== '' && `2.${user.exercise2[7][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[7][1] !== '' && `3.${user.exercise3[7][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[7][1] !== '' && `4.${user.exercise4[7][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[7][1] !== '' && `5.${user.exercise5[7][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[7][1] !== '' && `6.${user.exercise6[7][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[7][1] !== '' && `7.${user.exercise7[7][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[7][1] !== '' && `8.${user.exercise8[7][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[7][1] !== '' && `9.${user.exercise9[7][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[7][1] !== '' && `10.${user.exercise10[7][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[7][1] !== '' && `11.${user.exercise11[7][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[7][1] !== '' && `12.${user.exercise12[7][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[7][1] !== '' && `13.${user.exercise13[7][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[7][1] !== '' && `14.${user.exercise14[7][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[7][1] !== '' && `15.${user.exercise15[7][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[7][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[7][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[7][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[7][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[7][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[7][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[7][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[7][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[7][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[7][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[7][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[7][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[7][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[7][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[7][1]]}
            />}

            {(user.exercise1[8] || user.exercise2[8] || user.exercise3[8] || user.exercise4[8] || user.exercise5[8] || user.exercise6[8] || user.exercise7[8]
              || user.exercise8[8] || user.exercise9[8] || user.exercise10[8] || user.exercise11[8] || user.exercise12[8] || user.exercise13[8] || user.exercise14[8]
              || user.exercise15[8]) && user.exercise1[8][0] === 'I' && typeTrain === "I" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[8][1] !== '' && `1.${user.exercise1[8][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[8][1] !== '' && `2.${user.exercise2[8][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[8][1] !== '' && `3.${user.exercise3[8][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[8][1] !== '' && `4.${user.exercise4[8][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[8][1] !== '' && `5.${user.exercise5[8][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[8][1] !== '' && `6.${user.exercise6[8][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[8][1] !== '' && `7.${user.exercise7[8][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[8][1] !== '' && `8.${user.exercise8[8][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[8][1] !== '' && `9.${user.exercise9[8][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[8][1] !== '' && `10.${user.exercise10[8][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[8][1] !== '' && `11.${user.exercise11[8][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[8][1] !== '' && `12.${user.exercise12[8][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[8][1] !== '' && `13.${user.exercise13[8][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[8][1] !== '' && `14.${user.exercise14[8][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[8][1] !== '' && `15.${user.exercise15[8][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[8][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[8][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[8][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[8][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[8][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[8][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[8][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[8][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[8][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[8][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[8][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[8][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[8][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[8][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[8][1]]}
            />}

            {(user.exercise1[9] || user.exercise2[9] || user.exercise3[9] || user.exercise4[9] || user.exercise5[9] || user.exercise6[9] || user.exercise7[9]
              || user.exercise8[9] || user.exercise9[9] || user.exercise10[9] || user.exercise11[9] || user.exercise12[9] || user.exercise13[9] || user.exercise14[9]
              || user.exercise15[9]) && user.exercise1[9][0] === 'J' && typeTrain === "J" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
            <Card
              key={user.id} 
              exercise1={user.exercise1[0] !== undefined && user.exercise1[9][1] !== '' && `1.${user.exercise1[9][1]}`}
              exercise2={user.exercise2[0] !== undefined && user.exercise2[9][1] !== '' && `2.${user.exercise2[9][1]}`}
              exercise3={user.exercise3[0] !== undefined && user.exercise3[9][1] !== '' && `3.${user.exercise3[9][1]}`}
              exercise4={user.exercise4[0] !== undefined && user.exercise4[9][1] !== '' && `4.${user.exercise4[9][1]}`}
              exercise5={user.exercise5[0] !== undefined && user.exercise5[9][1] !== '' && `5.${user.exercise5[9][1]}`}
              exercise6={user.exercise6[0] !== undefined && user.exercise6[9][1] !== '' && `6.${user.exercise6[9][1]}`}
              exercise7={user.exercise7[0] !== undefined && user.exercise7[9][1] !== '' && `7.${user.exercise7[9][1]}`}
              exercise8={user.exercise8[0] !== undefined && user.exercise8[9][1] !== '' && `8.${user.exercise8[9][1]}`}
              exercise9={user.exercise9[0] !== undefined && user.exercise9[9][1] !== '' && `9.${user.exercise9[9][1]}`}
              exercise10={user.exercise10[0] !== undefined && user.exercise10[9][1] !== '' && `10.${user.exercise10[9][1]}`}
              exercise11={user.exercise11[0] !== undefined && user.exercise11[9][1] !== '' && `11.${user.exercise11[9][1]}`}
              exercise12={user.exercise12[0] !== undefined && user.exercise12[9][1] !== '' && `12.${user.exercise12[9][1]}`}
              exercise13={user.exercise13[0] !== undefined && user.exercise13[9][1] !== '' && `13.${user.exercise13[9][1]}`}
              exercise14={user.exercise14[0] !== undefined && user.exercise14[9][1] !== '' && `14.${user.exercise14[9][1]}`}
              exercise15={user.exercise15[0] !== undefined && user.exercise15[9][1] !== '' && `15.${user.exercise15[9][1]}`}
              exercise1Gif={user.exercise1Gif[0] !== undefined && exercisesGifs[user.exercise1Gif[9][1]]}
              exercise2Gif={user.exercise2Gif[0] !== undefined && exercisesGifs[user.exercise2Gif[9][1]]}
              exercise3Gif={user.exercise3Gif[0] !== undefined && exercisesGifs[user.exercise3Gif[9][1]]}
              exercise4Gif={user.exercise4Gif[0] !== undefined && exercisesGifs[user.exercise4Gif[9][1]]}
              exercise5Gif={user.exercise5Gif[0] !== undefined && exercisesGifs[user.exercise5Gif[9][1]]}
              exercise6Gif={user.exercise6Gif[0] !== undefined && exercisesGifs[user.exercise6Gif[9][1]]}
              exercise7Gif={user.exercise7Gif[0] !== undefined && exercisesGifs[user.exercise7Gif[9][1]]}
              exercise8Gif={user.exercise8Gif[0] !== undefined && exercisesGifs[user.exercise8Gif[9][1]]}
              exercise9Gif={user.exercise9Gif[0] !== undefined && exercisesGifs[user.exercise9Gif[9][1]]}
              exercise10Gif={user.exercise10Gif[0] !== undefined && exercisesGifs[user.exercise10Gif[9][1]]}
              exercise11Gif={user.exercise11Gif[0] !== undefined && exercisesGifs[user.exercise11Gif[9][1]]}
              exercise12Gif={user.exercise12Gif[0] !== undefined && exercisesGifs[user.exercise12Gif[9][1]]}
              exercise13Gif={user.exercise13Gif[0] !== undefined && exercisesGifs[user.exercise13Gif[9][1]]}
              exercise14Gif={user.exercise14Gif[0] !== undefined && exercisesGifs[user.exercise14Gif[9][1]]}
              exercise15Gif={user.exercise15Gif[0] !== undefined && exercisesGifs[user.exercise15Gif[9][1]]}
            />}
  
          </main>))}

    </div>
  )
}

export default ExercisesPage;
