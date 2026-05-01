import './ExercisesPage.css';
import Card from '../../Components/Main/Cards/Card/Card';
import Timer from '../../Components/Timer/Timer';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import audio1 from '../../assets/audios/armin-miami-2026.mp3'
import audio2 from '../../assets/audios/workout-music-2025.mp3'
import ToggleDefault from '../../Components/ToggleDefault/ToggleDefault';
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
      {loginValidate && <div className='banner-exercises-page'></div>}

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

            <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName('Victor Static', 15)}</h1>   

            <MusicPlayer
              key='0'
              src={audiosDescriptions["audio1"]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />

            <ToggleDefault 
              specificStyleTitleToggle='toggle-default-timer-title-music' 
              specificStyleTitleToggleText='toggle-default-timer-title-music-text' 
            />

          </div>

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName('Victor Static', 8)}</h1>
            <h1 className='exercises-page-style-cards-title-long-text'>Workout {typeTrain} - {compactUserName('Victor Static', 15)}</h1>

          </div >

        {typeTrain === "A" && nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && 
        <Card
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

        {typeTrain === "B" && nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && 
        <Card
          key='static-victor-static-id'  
          exercise1='1.Warm-up: HIIT - 10-12 min'
          exercise2='2.Squat: 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise3='3.Stiff (Romanian Deadlift): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise4='4.Glute Bridge: 1x 16-20 (bodyweight) + 3x 12-14 (bodyweight)'
          exercise5='5.Crunch (Abs): 1x 16-20 (bodyweight) + (up) 3x 12-14 (bodyweight)'
          exercise6='6.Plank: 1x (35 seconds)'
        />}

        {typeTrain === "C" && nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && 
        <Card
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

            <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName('Leimar', 15)}</h1>

            <MusicPlayer
              key='0'
              src={audiosDescriptions["audio1"]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />

            <ToggleDefault 
              specificStyleTitleToggle='toggle-default-timer-title-music' 
              specificStyleTitleToggleText='toggle-default-timer-title-music-text' 
            />

          </div>

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName('Leimar', 8)}</h1>
            <h1 className='exercises-page-style-cards-title-long-text'>Workout {typeTrain} - {compactUserName('Leimar', 15)}</h1>

          </div >

        {typeTrain === "A" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && 
        <Card
          key='static-leimar-id' 
          exercise1='1.Supino Horizontal: 1x16-20 (60% da carga) + 5x12-14 (20kgs cada)'
          exercise2='2.Voador: 5x12-14 (5 barras)'
          exercise3='3.Elevação Frontal: 4x7-9 (3 barras)'
          exercise4='4.Elevação Lateral: 4x7-9 (3 barras)'
          exercise5='5.Remada Alta: 4x12-14 (5 barras)'
        />}

        {typeTrain === "B" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && 
        <Card
          key='static-leimar-id'  
          exercise1='1.Leg Press: 1x16-20 (60% da carga) + 3x12-14 (30kgs cada)'
          exercise2='2.Stiff: 1x16-20 (60% da carga) + 3x12-14 (barra)'
          exercise3='3.Cadeira Flexora: 3x12-14 (5 barras)'
          exercise4='4.Cadeira Extensora: 3x12-14 (5 barras)'
          exercise5='5.Abdominal supra: 3x12-14 (peso do corpo)'
          exercise6='6.Prancha: 30s'
        />}

        {typeTrain === "C" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && 
        <Card
          key='static-leimar-id'  
          exercise1='1.Remada na máquina: 1x16-20 (60% da carga) + 5x12-14 (5 barras)'
          exercise2='2.Puxador: 5x12-14 (5 barras)'
          exercise3='3.Remada Alta: 4x12-14 (5 barras)'
          exercise4='4.Rosca Punho: 3x12-14 (20kgs)'
          exercise5='5.Rosca Punho Invertida: 3x12-14 (20kgs)'
        />}

        {typeTrain === "D" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && 
        <Card
          key='static-leimar-id'  
          exercise1='1.HIIT (burpess, polichinelo, pular corda, etc): 10-15 min'
          exercise2='2.Abdominal supra: 3x12-14 (peso do corpo)'
          exercise3='3.Abdominal oblíquo: 3x12-14 (peso do corpo)'
          exercise4='4.Abdominal infra: 3x12-14 (peso do corpo)'
          exercise5='5.Prancha: 30s'
        />}

        {typeTrain === "E" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && 
        <Card
          key='static-leimar-id'  
          exercise1='1.Extensão de Triceps na Barra: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)'
          exercise2='2.Triceps Francês: 3x7-9 (20kgs)'
          exercise3='3.Triceps Corda: 3x7-9 (8 barras)'
          exercise4='4.Elevação Frontal: 4x7-9 (3 barras)'
          exercise5='5.Elevação Lateral: 4x7-9 (3 barras)'
          exercise6='6.Panturrilha em pé: 1x16-20 (60% da carga) + 3x12-14 (20kgs cada)'
          exercise7='7.Panturrilha sentado: 3x12-14 (20kgs cada)'
        />}

        {typeTrain === "F" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && 
        <Card
          key='static-leimar-id'  
          exercise1='1.Rosca Direta: 1x12-14 (60% da carga) + 3x7-9 (15kgs cada)'
          exercise2='2.Biceps Concentrado: 3x7-9 (10kgs)'
          exercise3='3.Biceps Alternado: 3x7-9 (10kgs)'
          exercise4='4.Rosca Punho: 3x12-14 (10kgs cada)'
          exercise5='5.Rosca Punho Invertida: 3x12-14 (10kgs cada)'
          exercise6='6.Abdominal oblíquo: 3x12-14 (peso do corpo)'
          exercise7='7.Abdominal infra: 3x12-14 (peso do corpo)'
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

            <h1 className='exercises-page-style-cards-timer-title-music-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

            <MusicPlayer
              key='0'
              src={audiosDescriptions[user.audio]}
              specificStylePlayer='music-player'
              specificStyleMusicButton='specificStyleMusicButton' 
            />

            <ToggleDefault 
              specificStyleTitleToggle='toggle-default-timer-title-music' 
              specificStyleTitleToggleText='toggle-default-timer-title-music-text' 
            />

          </div>

          <div className='exercises-page-style-cards-title'>
            <h1 className='exercises-page-style-cards-title-short-text'>Workout {typeTrain} - {compactUserName(nameUser, 8)}</h1>
            <h1 className='exercises-page-style-cards-title-long-text'>Workout {typeTrain} - {compactUserName(nameUser, 15)}</h1>

          </div >

          {user.exercise1[0] && user.exercise1[0][0] === 'A' && typeTrain === "A" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
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

          {user.exercise1[1] && user.exercise1[1][0] === 'B' && typeTrain === "B" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
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

          {user.exercise1[2] && user.exercise1[2][0] === 'C' && typeTrain === "C" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
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

          {user.exercise1[3] && user.exercise1[3][0] === 'D' && typeTrain === "D" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[3][1] !== '' && `1.${user.exercise1[3][1]}`}
            exercise2={user.exercise2[3][1] !== '' && `2.${user.exercise2[3][1]}`}
            exercise3={user.exercise3[3][1] !== '' && `3.${user.exercise3[3][1]}`}
            exercise4={user.exercise4[3][1] !== '' && `4.${user.exercise4[3][1]}`}
            exercise5={user.exercise5[3][1] !== '' && `5.${user.exercise5[3][1]}`}
            exercise6={user.exercise6[3][1] !== '' && `6.${user.exercise6[3][1]}`}
            exercise7={user.exercise7[3][1] !== '' && `7.${user.exercise7[3][1]}`}
            exercise8={user.exercise8[3][1] !== '' && `8.${user.exercise8[3][1]}`}
            exercise9={user.exercise9[3][1] !== '' && `9.${user.exercise9[3][1]}`}
            exercise10={user.exercise10[3][1] !== '' && `10.${user.exercise10[3][1]}`}
            exercise11={user.exercise11[3][1] !== '' && `11.${user.exercise11[3][1]}`}
            exercise12={user.exercise12[3][1] !== '' && `12.${user.exercise12[3][1]}`}
            exercise13={user.exercise13[3][1] !== '' && `13.${user.exercise13[3][1]}`}
            exercise14={user.exercise14[3][1] !== '' && `14.${user.exercise14[3][1]}`}
            exercise15={user.exercise15[3][1] !== '' && `15.${user.exercise15[3][1]}`}
          />}

          {user.exercise1[4] && user.exercise1[4][0] === 'E' && typeTrain === "E" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[4][1] !== '' && `1.${user.exercise1[4][1]}`}
            exercise2={user.exercise2[4][1] !== '' && `2.${user.exercise2[4][1]}`}
            exercise3={user.exercise3[4][1] !== '' && `3.${user.exercise3[4][1]}`}
            exercise4={user.exercise4[4][1] !== '' && `4.${user.exercise4[4][1]}`}
            exercise5={user.exercise5[4][1] !== '' && `5.${user.exercise5[4][1]}`}
            exercise6={user.exercise6[4][1] !== '' && `6.${user.exercise6[4][1]}`}
            exercise7={user.exercise7[4][1] !== '' && `7.${user.exercise7[4][1]}`}
            exercise8={user.exercise8[4][1] !== '' && `8.${user.exercise8[4][1]}`}
            exercise9={user.exercise9[4][1] !== '' && `9.${user.exercise9[4][1]}`}
            exercise10={user.exercise10[4][1] !== '' && `10.${user.exercise10[4][1]}`}
            exercise11={user.exercise11[4][1] !== '' && `11.${user.exercise11[4][1]}`}
            exercise12={user.exercise12[4][1] !== '' && `12.${user.exercise12[4][1]}`}
            exercise13={user.exercise13[4][1] !== '' && `13.${user.exercise13[4][1]}`}
            exercise14={user.exercise14[4][1] !== '' && `14.${user.exercise14[4][1]}`}
            exercise15={user.exercise15[4][1] !== '' && `15.${user.exercise15[4][1]}`}
          />}

          {user.exercise1[5] && user.exercise1[5][0] === 'F' && typeTrain === "F" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[5][1] !== '' && `1.${user.exercise1[5][1]}`}
            exercise2={user.exercise2[5][1] !== '' && `2.${user.exercise2[5][1]}`}
            exercise3={user.exercise3[5][1] !== '' && `3.${user.exercise3[5][1]}`}
            exercise4={user.exercise4[5][1] !== '' && `4.${user.exercise4[5][1]}`}
            exercise5={user.exercise5[5][1] !== '' && `5.${user.exercise5[5][1]}`}
            exercise6={user.exercise6[5][1] !== '' && `6.${user.exercise6[5][1]}`}
            exercise7={user.exercise7[5][1] !== '' && `7.${user.exercise7[5][1]}`}
            exercise8={user.exercise8[5][1] !== '' && `8.${user.exercise8[5][1]}`}
            exercise9={user.exercise9[5][1] !== '' && `9.${user.exercise9[5][1]}`}
            exercise10={user.exercise10[5][1] !== '' && `10.${user.exercise10[5][1]}`}
            exercise11={user.exercise11[5][1] !== '' && `11.${user.exercise11[5][1]}`}
            exercise12={user.exercise12[5][1] !== '' && `12.${user.exercise12[5][1]}`}
            exercise13={user.exercise13[5][1] !== '' && `13.${user.exercise13[5][1]}`}
            exercise14={user.exercise14[5][1] !== '' && `14.${user.exercise14[5][1]}`}
            exercise15={user.exercise15[5][1] !== '' && `15.${user.exercise15[5][1]}`}
          />}

          {user.exercise1[6] && user.exercise1[6][0] === 'G' && typeTrain === "G" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[6][1] !== '' && `1.${user.exercise1[6][1]}`}
            exercise2={user.exercise2[6][1] !== '' && `2.${user.exercise2[6][1]}`}
            exercise3={user.exercise3[6][1] !== '' && `3.${user.exercise3[6][1]}`}
            exercise4={user.exercise4[6][1] !== '' && `4.${user.exercise4[6][1]}`}
            exercise5={user.exercise5[6][1] !== '' && `5.${user.exercise5[6][1]}`}
            exercise6={user.exercise6[6][1] !== '' && `6.${user.exercise6[6][1]}`}
            exercise7={user.exercise7[6][1] !== '' && `7.${user.exercise7[6][1]}`}
            exercise8={user.exercise8[6][1] !== '' && `8.${user.exercise8[6][1]}`}
            exercise9={user.exercise9[6][1] !== '' && `9.${user.exercise9[6][1]}`}
            exercise10={user.exercise10[6][1] !== '' && `10.${user.exercise10[6][1]}`}
            exercise11={user.exercise11[6][1] !== '' && `11.${user.exercise11[6][1]}`}
            exercise12={user.exercise12[6][1] !== '' && `12.${user.exercise12[6][1]}`}
            exercise13={user.exercise13[6][1] !== '' && `13.${user.exercise13[6][1]}`}
            exercise14={user.exercise14[6][1] !== '' && `14.${user.exercise14[6][1]}`}
            exercise15={user.exercise15[6][1] !== '' && `15.${user.exercise15[6][1]}`}
          />}

          {user.exercise1[7] && user.exercise1[7][0] === 'H' && typeTrain === "H" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[7][1] !== '' && `1.${user.exercise1[7][1]}`}
            exercise2={user.exercise2[7][1] !== '' && `2.${user.exercise2[7][1]}`}
            exercise3={user.exercise3[7][1] !== '' && `3.${user.exercise3[7][1]}`}
            exercise4={user.exercise4[7][1] !== '' && `4.${user.exercise4[7][1]}`}
            exercise5={user.exercise5[7][1] !== '' && `5.${user.exercise5[7][1]}`}
            exercise6={user.exercise6[7][1] !== '' && `6.${user.exercise6[7][1]}`}
            exercise7={user.exercise7[7][1] !== '' && `7.${user.exercise7[7][1]}`}
            exercise8={user.exercise8[7][1] !== '' && `8.${user.exercise8[7][1]}`}
            exercise9={user.exercise9[7][1] !== '' && `9.${user.exercise9[7][1]}`}
            exercise10={user.exercise10[7][1] !== '' && `10.${user.exercise10[7][1]}`}
            exercise11={user.exercise11[7][1] !== '' && `11.${user.exercise11[7][1]}`}
            exercise12={user.exercise12[7][1] !== '' && `12.${user.exercise12[7][1]}`}
            exercise13={user.exercise13[7][1] !== '' && `13.${user.exercise13[7][1]}`}
            exercise14={user.exercise14[7][1] !== '' && `14.${user.exercise14[7][1]}`}
            exercise15={user.exercise15[7][1] !== '' && `15.${user.exercise15[7][1]}`}
          />}

          {user.exercise1[8] && user.exercise1[8][0] === 'I' && typeTrain === "I" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[8][1] !== '' && `1.${user.exercise1[8][1]}`}
            exercise2={user.exercise2[8][1] !== '' && `2.${user.exercise2[8][1]}`}
            exercise3={user.exercise3[8][1] !== '' && `3.${user.exercise3[8][1]}`}
            exercise4={user.exercise4[8][1] !== '' && `4.${user.exercise4[8][1]}`}
            exercise5={user.exercise5[8][1] !== '' && `5.${user.exercise5[8][1]}`}
            exercise6={user.exercise6[8][1] !== '' && `6.${user.exercise6[8][1]}`}
            exercise7={user.exercise7[8][1] !== '' && `7.${user.exercise7[8][1]}`}
            exercise8={user.exercise8[8][1] !== '' && `8.${user.exercise8[8][1]}`}
            exercise9={user.exercise9[8][1] !== '' && `9.${user.exercise9[8][1]}`}
            exercise10={user.exercise10[8][1] !== '' && `10.${user.exercise10[8][1]}`}
            exercise11={user.exercise11[8][1] !== '' && `11.${user.exercise11[8][1]}`}
            exercise12={user.exercise12[8][1] !== '' && `12.${user.exercise12[8][1]}`}
            exercise13={user.exercise13[8][1] !== '' && `13.${user.exercise13[8][1]}`}
            exercise14={user.exercise14[8][1] !== '' && `14.${user.exercise14[8][1]}`}
            exercise15={user.exercise15[8][1] !== '' && `15.${user.exercise15[8][1]}`}
          />}

          {user.exercise1[9] && user.exercise1[9][0] === 'J' && typeTrain === "J" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && 
          <Card
            key={user.id} 
            exercise1={user.exercise1[9][1] !== '' && `1.${user.exercise1[9][1]}`}
            exercise2={user.exercise2[9][1] !== '' && `2.${user.exercise2[9][1]}`}
            exercise3={user.exercise3[9][1] !== '' && `3.${user.exercise3[9][1]}`}
            exercise4={user.exercise4[9][1] !== '' && `4.${user.exercise4[9][1]}`}
            exercise5={user.exercise5[9][1] !== '' && `5.${user.exercise5[9][1]}`}
            exercise6={user.exercise6[9][1] !== '' && `6.${user.exercise6[9][1]}`}
            exercise7={user.exercise7[9][1] !== '' && `7.${user.exercise7[9][1]}`}
            exercise8={user.exercise8[9][1] !== '' && `8.${user.exercise8[9][1]}`}
            exercise9={user.exercise9[9][1] !== '' && `9.${user.exercise9[9][1]}`}
            exercise10={user.exercise10[9][1] !== '' && `10.${user.exercise10[9][1]}`}
            exercise11={user.exercise11[9][1] !== '' && `11.${user.exercise11[9][1]}`}
            exercise12={user.exercise12[9][1] !== '' && `12.${user.exercise12[9][1]}`}
            exercise13={user.exercise13[9][1] !== '' && `13.${user.exercise13[9][1]}`}
            exercise14={user.exercise14[9][1] !== '' && `14.${user.exercise14[9][1]}`}
            exercise15={user.exercise15[9][1] !== '' && `15.${user.exercise15[9][1]}`}
          />}
 
        </main>))}

    </div>
  )
}

export default ExercisesPage;
