import './ExercisesPage.css';
import Card from '../../Components/Main/Cards/Card/Card';
import Timer from '../../Components/Timer/Timer';
import MusicPlayer from '../../Components/MusicPlayer/MusicPlayer';
import music from '../../assets/audios/armin-miami-2026.mp3'
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';

function ExercisesPage() {

  const { usersContents, typeTrain, loginValidate, nameUser } = useContext(DataContext)

  const [isRunningAllTime, setIsRunningAllTime] = useState(false)

  return(
    <div className='exercises-page-style'>
      {!loginValidate && <ErrorLogin />}

      {/* Static Content */}
      {/* Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
      <main className='exercises-page-style-cards' key='static-leimar-id'>
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

        <MusicPlayer src={music} specificStylePlayer='music-player' />

        {typeTrain === "A" && nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <Card
          key='static-leimar-id'
          nameTrain='Workout A - Leimar' 
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
          nameTrain='Workout B - Leimar'  
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
          nameTrain='Workout C - Leimar'  
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

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && loginValidate &&
      <main className='exercises-page-style-cards' key='static-newuser1-id'>
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

        <MusicPlayer src={music} specificStylePlayer='music-player' />

        {typeTrain === "A" && nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && <Card
          key='static-newuser1-id'
          nameTrain='Workout A - New User 1' 
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

        {typeTrain === "B" && nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && <Card
          key='static-newuser1-id'
          nameTrain='Workout B - New User 1'  
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
        />}

        {typeTrain === "C" && nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && <Card
          key='static-newuser1-id'
          nameTrain='Workout C - New User 1'  
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

          <MusicPlayer src={music} specificStylePlayer='music-player' />

          {user.exercise1[0][0] === 'A' && typeTrain === "A" && user.name.toLowerCase() === nameUser.toLowerCase().trim() && <Card
            key={user.id}
            nameTrain={`Workout A - ${user.name}`} 
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
            nameTrain={`Workout B - ${user.name}`}  
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
            nameTrain={`Workout C - ${user.name}`}  
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
 
        </main>

      ))}

    </div>
  )
}

export default ExercisesPage;
