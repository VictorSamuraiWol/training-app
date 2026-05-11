import './Cards.css';
import ButtonDefault from '../../ButtonDefault/ButtonDefault';
import TrainingModal from '../../TrainingModal/TrainingModal';
import { useContext } from 'react';
import { DataContext } from '../../DataContext/DataContext';
import { Link, useOutletContext } from 'react-router-dom';

function Cards() {

  const { staticUsersContents, dynamicUsersContents, setUserId, nameUser, loginValidate } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return (
    <>
      {/* {staticUsersContents && staticUsersContents.map(user => (
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

      {dynamicUsersContents && dynamicUsersContents.map(user => (
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

      ))} */}
      {/* ------------------------------------------------------------------- */}



      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dynamicUsersContents) && loginValidate && [...(staticUsersContents), ...(dynamicUsersContents)]
      .map(user => (
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
