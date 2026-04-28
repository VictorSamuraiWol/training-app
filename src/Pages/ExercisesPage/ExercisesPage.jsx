import './ExercisesPage.css';
import Card from '../../Components/Main/Cards/Card/Card';
import Timer from '../../Components/Timer/Timer';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import audio1 from '../../assets/audios/armin-miami-2026.mp3'
import audio2 from '../../assets/audios/workout-music-2025.mp3'
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useOutletContext } from 'react-router-dom';

function ExercisesPage() {

  const { usersContents, typeTrain, loginValidate, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  const [isRunningAllTime, setIsRunningAllTime] = useState(false)

  const [audiosDescriptions] = useState({
      audio1: audio1,
      audio2: audio2

  })

  return(
    <div className='exercises-page-style'>
      {!loginValidate && <ErrorLogin />}

      {typeTrain === "A" && loginValidate && <div className='banner-a-exercises-page'></div>}
      {typeTrain === "B" && loginValidate && <div className='banner-b-exercises-page'></div>}
      {typeTrain === "C" && loginValidate && <div className='banner-c-exercises-page'></div>}

      {/* Static Content */}
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && loginValidate &&
        <main className='exercises-page-style-cards' key='static-victor-static-id'>
          <div className='exercises-page-style-cards-timer-title-music'>
            <div className='title-timer'>
              <p className='title-timer-text'>Total Time:</p>
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

            <h1 className='exercises-page-style-cards-timer-title-music-text'>Workout {typeTrain} - Victor Static</h1>

            <MusicPlayer
              key='0'
              src={audiosDescriptions["audio1"]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />

          </div>

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-text'>Workout {typeTrain} - Victor Static</h1>

          </div >

        {typeTrain === "A" && nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && <Card
          key='static-victor-static-id' 
          exercise1='1.Warm-up: HIIT - 10-12 min'
          exercise2='2.Biceps: 1x 12-14 (6kg - dumbbell) + (up) 3x 7-9 (8kg - dumbbell)'
          exercise3='3.Forearms: (up) 3x 12-14 (6kg - dumbbell) (already warmed up)'
          exercise4='4.Dumbbell Shoulder Extension: 1x 12-14 (4kg - plates) + 1x 7-9 (5kg - plates)'
          exercise5='5.Back: 1x 16-20 (8kg - dumbbell) + 2x 12-14 (10kg - dumbbell)'
          exercise6='6.Trapezius: 1x 16-20 (10kg - dumbbell) + 3x 12-14 (12kg - dumbbell)'
          exercise7='7.Wrist Curl: 2x 12-14 (12kg - dumbbell) (already warmed up, no rest between reps)'
          exercise8='8.Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)'
          exercise9='9.Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise10='10.Plank: 1x (35 seconds)'
        />}

        {typeTrain === "B" && nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && <Card
          key='static-victor-static-id'  
          exercise1='1.Warm-up: HIIT - 10-12 min'
          exercise2='2.Squat: 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise3='3.Stiff (Romanian Deadlift): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise4='4.Glute Bridge: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)'
          exercise5='5.Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise6='6.Plank: 1x (35 seconds)'
        />}

        {typeTrain === "C" && nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && <Card
          key='static-victor-static-id'  
          exercise1='1.Warm-up: HIIT - 10-12 min'
          exercise2='2.Triceps: 1x 12-14 (6kg - dumbbell) + 2x 7-9 (8kg - dumbbell)'
          exercise3='3.Front Raise: 1x 12-14 (4kg - plates) + 1x 7-9 (5kg - plate)'
          exercise4='4.Lateral Raise: 1x 12-14 (4kg - plates) + 1x 7-9 (5kg - plates)'
          exercise5='5.Incline Push-up: 1x 16-20 + 2x 12-14 (bodyweight)'
          exercise6='6.Wrist Curl: 2x 12-14 (10kg - dumbbell) (already warmed up, no rest between reps)'
          exercise7='7.Wrist Extension: 2x 12-14 (5kg - plate) (already warmed up, no rest between reps)'
          exercise8='8.Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise9='9.Plank: 1x (35 seconds)'
        />}
 
      </main>}

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
        <main className='exercises-page-style-cards' key='static-leimar-id'>
          <div className='exercises-page-style-cards-timer-title-music'>
            <div className='title-timer'>
              <p className='title-timer-text'>Total Time:</p>
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

            <h1 className='exercises-page-style-cards-timer-title-music-text'>Workout {typeTrain} - Leimar</h1>

            <MusicPlayer
              key='0'
              src={audiosDescriptions["audio1"]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />

          </div>

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-text'>Workout {typeTrain} - Leimar</h1>

          </div >

        {typeTrain === "A" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id' 
          exercise1='1.Example'
          exercise2='2.Example'
          exercise3='3.Example'
          exercise4='4.Example'
          exercise5='5.Example'
          exercise6='6.Example'
          exercise7='7.Example'
          exercise8='8.Example'
          exercise9='9.Example'
          exercise10='10.Example'
          exercise11='11.Example'
          exercise12='12.Example'
          exercise13='13.Example'
          exercise14='14.Example'
          exercise15='15.Example'
        />}

        {typeTrain === "B" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id'  
          exercise1='1.Example'
          exercise2='2.Example'
          exercise3='3.Example'
          exercise4='4.Example'
          exercise5='5.Example'
          exercise6='6.Example'
          exercise7='7.Example'
          exercise8='8.Example'
          exercise9='9.Example'
        />}

        {typeTrain === "C" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id'  
          exercise1='1.Example'
          exercise2='2.Example'
          exercise3='3.Example'
          exercise4='4.Example'
          exercise5='5.Example'
          exercise6='6.Example'
          exercise7='7.Example'
          exercise8='8.Example'
          exercise9='9.Example'
          exercise10='10.Example'
          exercise11='11.Example'
          exercise12='12.Example'
          exercise13='13.Example'
        />}

        {typeTrain === "D" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id'  
          exercise1='1.Example'
          exercise2='2.Example'
          exercise3='3.Example'
          exercise4='4.Example'
          exercise5='5.Example'
          exercise6='6.Example'
          exercise7='7.Example'
          exercise8='8.Example'
          exercise9='9.Example'
          exercise10='10.Example'
          exercise11='11.Example'
          exercise12='12.Example'
          exercise13='13.Example'
        />}

        {typeTrain === "E" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id'  
          exercise1='1.Example'
          exercise2='2.Example'
          exercise3='3.Example'
          exercise4='4.Example'
          exercise5='5.Example'
          exercise6='6.Example'
          exercise7='7.Example'
          exercise8='8.Example'
          exercise9='9.Example'
          exercise10='10.Example'
          exercise11='11.Example'
          exercise12='12.Example'
          exercise13='13.Example'
        />}

        {typeTrain === "F" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id'  
          exercise1='1.Example'
          exercise2='2.Example'
          exercise3='3.Example'
          exercise4='4.Example'
          exercise5='5.Example'
          exercise6='6.Example'
          exercise7='7.Example'
          exercise8='8.Example'
          exercise9='9.Example'
          exercise10='10.Example'
          exercise11='11.Example'
          exercise12='12.Example'
          exercise13='13.Example'
        />}
 
      </main>}

      {/* Dinamic Content */}
      {usersContents && loginValidate && usersContents
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => (
        <main className='exercises-page-style-cards' key={user.id}>
          <div className='exercises-page-style-cards-timer-title-music'>
            <div className='title-timer'>
              <p className='title-timer-text'>Total Time:</p>
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

            <h1 className='exercises-page-style-cards-timer-title-music-text'>Workout {typeTrain} - {compactUserName(nameUser)}</h1>

            <MusicPlayer
              key='0'
              src={audiosDescriptions[user.audio]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />

          </div>

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-text'>Workout {typeTrain} - {compactUserName(nameUser)}</h1>

          </div >

          {user.exercise1[0][0] === 'A' && typeTrain === "A" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && <Card
            key={user.id}
            exercise1={user.exercise1[0][1] !== '' && `1.${user.exercise1[0][1]}`}
            exercise2={user.exercise2[0][1] !== '' && `2.${user.exercise2[0][1]}`}
            exercise3={user.exercise3[0][1] !== '' && `3.${user.exercise3[0][1]}`}
            exercise4={user.exercise4[0][1] !== '' && `4.${user.exercise4[0][1]}`}
            exercise5={user.exercise5[0][1] !== '' && `5.${user.exercise5[0][1]}`}
            exercise6={user.exercise6[0][1] !== '' && `6.${user.exercise6[0][1]}`}
            exercise7={user.exercise7[0][1] !== '' && `7.${user.exercise7[0][1]}`}
            exercise8={user.exercise8[0][1] !== '' && `8.${user.exercise8[0][1]}`}
            exercise9={user.exercise9[0][1] !== '' && `9.${user.exercise9[0][1]}`}
            exercise10={user.exercise10[0][1] !== '' && `10.${user.exercise10[0][1]}`}
            exercise11={user.exercise11[0][1] !== '' && `11.${user.exercise11[0][1]}`}
            exercise12={user.exercise12[0][1] !== '' && `12.${user.exercise12[0][1]}`}
            exercise13={user.exercise13[0][1] !== '' && `13.${user.exercise13[0][1]}`}
            exercise14={user.exercise14[0][1] !== '' && `14.${user.exercise14[0][1]}`}
            exercise15={user.exercise15[0][1] !== '' && `15.${user.exercise15[0][1]}`}
          />}

          {user.exercise1[1][0] === 'B' && typeTrain === "B" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && <Card
            key={user.id}
            exercise1={user.exercise1[1][1] !== '' && `1.${user.exercise1[1][1]}`}
            exercise2={user.exercise2[1][1] !== '' && `2.${user.exercise2[1][1]}`}
            exercise3={user.exercise3[1][1] !== '' && `3.${user.exercise3[1][1]}`}
            exercise4={user.exercise4[1][1] !== '' && `4.${user.exercise4[1][1]}`}
            exercise5={user.exercise5[1][1] !== '' && `5.${user.exercise5[1][1]}`}
            exercise6={user.exercise6[1][1] !== '' && `6.${user.exercise6[1][1]}`}
            exercise7={user.exercise7[1][1] !== '' && `7.${user.exercise7[1][1]}`}
            exercise8={user.exercise8[1][1] !== '' && `8.${user.exercise8[1][1]}`}
            exercise9={user.exercise9[1][1] !== '' && `9.${user.exercise9[1][1]}`}
            exercise10={user.exercise10[1][1] !== '' && `10.${user.exercise10[1][1]}`}
            exercise11={user.exercise11[1][1] !== '' && `11.${user.exercise11[1][1]}`}
            exercise12={user.exercise12[1][1] !== '' && `12.${user.exercise12[1][1]}`}
            exercise13={user.exercise13[1][1] !== '' && `13.${user.exercise13[1][1]}`}
            exercise14={user.exercise14[1][1] !== '' && `14.${user.exercise14[1][1]}`}
            exercise15={user.exercise15[1][1] !== '' && `15.${user.exercise15[1][1]}`}
          />}

          {user.exercise1[2][0] === 'C' && typeTrain === "C" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && <Card
            key={user.id} 
            exercise1={user.exercise1[2][1] !== '' && `1.${user.exercise1[2][1]}`}
            exercise2={user.exercise2[2][1] !== '' && `2.${user.exercise2[2][1]}`}
            exercise3={user.exercise3[2][1] !== '' && `3.${user.exercise3[2][1]}`}
            exercise4={user.exercise4[2][1] !== '' && `4.${user.exercise4[2][1]}`}
            exercise5={user.exercise5[2][1] !== '' && `5.${user.exercise5[2][1]}`}
            exercise6={user.exercise6[2][1] !== '' && `6.${user.exercise6[2][1]}`}
            exercise7={user.exercise7[2][1] !== '' && `7.${user.exercise7[2][1]}`}
            exercise8={user.exercise8[2][1] !== '' && `8.${user.exercise8[2][1]}`}
            exercise9={user.exercise9[2][1] !== '' && `9.${user.exercise9[2][1]}`}
            exercise10={user.exercise10[2][1] !== '' && `10.${user.exercise10[2][1]}`}
            exercise11={user.exercise11[2][1] !== '' && `11.${user.exercise11[2][1]}`}
            exercise12={user.exercise12[2][1] !== '' && `12.${user.exercise12[2][1]}`}
            exercise13={user.exercise13[2][1] !== '' && `13.${user.exercise13[2][1]}`}
            exercise14={user.exercise14[2][1] !== '' && `14.${user.exercise14[2][1]}`}
            exercise15={user.exercise15[2][1] !== '' && `15.${user.exercise15[2][1]}`}
          />}
 
        </main>))}

    </div>
  )
}

export default ExercisesPage;
