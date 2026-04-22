import './Cards.css';
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import { useContext } from 'react';
import { DataContext } from '../../DataContext/DataContext';
import { Link, useOutletContext } from 'react-router-dom';

function Cards() {

  const { usersContents, setUserId, setTypeTrain, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  function clickButton(type) {
    setTypeTrain(type)

  }

  return (
    <>
      {/* Static Content */}
      {/* Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <div 
        className='cards' 
        key='static-leimar-id'
      >
        <div className='cards-info'>
          {/* <h2>Leimar</h2> */}
          <h2>{compactUserName('Leimar')}</h2>

          <div className='cards-info-measures'>
            <h2>Example</h2> /
            <h2>Example</h2>
          </div>
        </div>

        <Link
          className='link-workout-A' 
          to='/exercises-page'
        >
          <ButtonDefault
            onClick={() => {clickButton('A'); setUserId('static-leimar-id')}}
            nameButton='Workout A'
            specificStylesButton='specificStylesButtonA'
          />
        </Link>

        <Link
          className='link-workout-B'
          to='/exercises-page'
        >
          <ButtonDefault 
            onClick={() => {clickButton('B'); setUserId('static-leimar-id')}}
            nameButton='Workout B'
            specificStylesButton='specificStylesButtonB'
          />
        </Link>

        <Link
          className='link-workout-C'
          to='/exercises-page'
        >
          <ButtonDefault 
            onClick={() => {clickButton('C'); setUserId('static-leimar-id')}}
            nameButton='Workout C'
            specificStylesButton='specificStylesButtonC'
          />
        </Link>

        <Link 
          className='link-nutrition' 
          to='/nutrition-page'
        >
          <ButtonDefault
            onClick={() => {setUserId('static-leimar-id')}}
            nameButton='Nutrition Plan'
            specificStylesButton='specificStylesButtonNutrition'
          />
        </Link>
        
        <Link 
          className='link-notes' 
          to='/notes-page'
        >
          <ButtonDefault
            onClick={() => {setUserId('static-leimar-id')}}
            nameButton='Notes'
            specificStylesButton='specificStylesButtonNotes'
          />
        </Link>

      </div>}

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && <div 
        className='cards' 
        key='static-newuser1-id'
      >
        <div className='cards-info'>
          {/* <h2>New User 1</h2> */}
          <h2>{compactUserName('New User 1')}</h2>
          <div className='cards-info-measures'>
            <h2>Example</h2> /
            <h2>Example</h2>
          </div>
        </div>

        <Link
          className='link-workout-A' 
          to='/exercises-page'
        >
          <ButtonDefault
            onClick={() => {clickButton('A'); setUserId('static-newuser1-id')}}
            nameButton='Workout A'
            specificStylesButton='specificStylesButtonA'
          />
        </Link>

        <Link
          className='link-workout-B'
          to='/exercises-page'
        >
          <ButtonDefault 
            onClick={() => {clickButton('B'); setUserId('static-newuser1-id')}}
            nameButton='Workout B'
            specificStylesButton='specificStylesButtonB'
          />
        </Link>

        <Link
          className='link-workout-C'
          to='/exercises-page'
        >
          <ButtonDefault 
            onClick={() => {clickButton('C'); setUserId('static-newuser1-id')}}
            nameButton='Workout C'
            specificStylesButton='specificStylesButtonC'
          />
        </Link>

        <Link 
          className='link-nutrition' 
          to='/nutrition-page'
        >
          <ButtonDefault
            onClick={() => {setUserId('static-newuser1-id')}}
            nameButton='Nutrition Plan'
            specificStylesButton='specificStylesButtonNutrition'
          />
        </Link>
        
        <Link 
          className='link-notes' 
          to='/notes-page'
        >
          <ButtonDefault
            onClick={() => {setUserId('static-newuser1-id')}}
            nameButton='Notes'
            specificStylesButton='specificStylesButtonNotes'
          />
        </Link>

      </div>}

      {/* Dinamic Content */}
      {usersContents && usersContents.map(user => (
        nameUser.toLowerCase().trim() === user.name.toLowerCase() && <div 
          className='cards' 
          key={user.id}
        >
          <div className='cards-info'>
            {/* <h2>{user.name}</h2> */}
            <h2>{compactUserName(user.name)}</h2>
            <div className='cards-info-measures'>
              <h2>{user.weight}</h2> /
              <h2>{user.height}</h2>
            </div>
          </div>

          <Link 
            className='link-workout-A' 
            to='/exercises-page'
          >
            <ButtonDefault
              onClick={() => {clickButton('A'); setUserId(user.id)}}
              nameButton='Workout A'
              specificStylesButton='specificStylesButtonA'
            />
          </Link>

          <Link
            className='link-workout-B' 
            to='/exercises-page'
          >
            <ButtonDefault 
              onClick={() => {clickButton('B'); setUserId(user.id)}}
              nameButton='Workout B'
              specificStylesButton='specificStylesButtonB'
            />
          </Link>

          <Link
            className='link-workout-C'
            to='/exercises-page'
          >
            <ButtonDefault 
              onClick={() => {clickButton('C'); setUserId(user.id)}}    
              nameButton='Workout C'
              specificStylesButton='specificStylesButtonC'
            />
          </Link>

          <Link className='link-nutrition' to='/nutrition-page'>
            <ButtonDefault
              onClick={() => {setUserId(user.id)}}
              nameButton='Nutrition Plan'
              specificStylesButton='specificStylesButtonNutrition'
            />
          </Link>

          <Link className='link-notes' to='/notes-page'>
            <ButtonDefault
              onClick={() => {setUserId(user.id)}}
              nameButton='Notes'
              specificStylesButton='specificStylesButtonNotes'
            />
          </Link>

        </div>

      ))}

    </>

  )
}

export default Cards;
