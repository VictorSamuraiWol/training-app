import './Cards.css';
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import TrainingModal from '../../TrainingModal/TrainingModal';
import { useContext } from 'react';
import { DataContext } from '../../DataContext/DataContext';
import { Link, useOutletContext } from 'react-router-dom';

function Cards() {

  const { usersContents, setUserId, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return (
    <>
      {/* Static Content */}
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && <div 
        className='cards' 
        key={nameUser}
      >
        <div className='cards-info'>
          <h2 className='cards-info-short-title'>{compactUserName('Victor Static', 8)}</h2>
          <h2 className='cards-info-long-title'>{compactUserName('Victor Static', 15)}</h2>

          <div className='cards-info-measures'>
            <h2 className='cards-info-measures-weight'>80 kgs</h2>
            <h2 className='cards-info-measures-height'>1.69 cm</h2>
          </div>
        </div>

        <TrainingModal className='training-modal'/>

        <Link 
          className='link-nutrition' 
          to='/nutrition-page'
        >
          <ButtonDefault
            onClick={() => {setUserId(nameUser)}}
            nameButton='Nutrition Plan'
            specificStylesButton='specificStylesButtonNutrition'
          />
        </Link>
        
        <Link 
          className='link-notes' 
          to='/notes-page'
        >
          <ButtonDefault
            onClick={() => {setUserId(nameUser)}}
            nameButton='Notes'
            specificStylesButton='specificStylesButtonNotes'
          />
        </Link>

      </div>}

      {/* Leimar - Static User 2 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && <div 
        className='cards' 
        key={nameUser}
      >
        <div className='cards-info'>
          <h2 className='cards-info-short-title'>{compactUserName('Leimar', 8)}</h2>
          <h2 className='cards-info-long-title'>{compactUserName('Leimar', 15)}</h2>

          <div className='cards-info-measures'>
            <h2 className='cards-info-measures-weight'>87 kgs</h2>
            <h2 className='cards-info-measures-height'>1,75 cm</h2>
          </div>
        </div>

        <TrainingModal className='training-modal'/>

        <Link 
          className='link-nutrition' 
          to='/nutrition-page'
        >
          <ButtonDefault
            onClick={() => {setUserId(nameUser)}}
            nameButton='Nutrition Plan'
            specificStylesButton='specificStylesButtonNutrition'
          />
        </Link>
        
        <Link 
          className='link-notes' 
          to='/notes-page'
        >
          <ButtonDefault
            onClick={() => {setUserId(nameUser)}}
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
            <h2 className='cards-info-short-title'>{compactUserName(user.name, 8)}</h2>
            <h2 className='cards-info-long-title'>{compactUserName(user.name, 15)}</h2>

            <div className='cards-info-measures'>
              <h2 className='cards-info-measures-weight'>{user.weight}</h2>
              <h2 className='cards-info-measures-height'>{user.height}</h2>
            </div>
          </div>

          <TrainingModal className='training-modal'/>

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
