import './NotesPage.css';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { GiMuscleUp } from "react-icons/gi";

function NotesPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return(
    <div className='notes-page-styles'>
      {loginValidate && <div className='banner-notes-page'></div>}

      {/* Static Content */}
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && loginValidate &&
      <div
        key='static-victor-static-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - {compactUserName('Victor Static', 15)}</h2>

        <div className='cards-info-notes-itens'>
          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note1'
              className='cards-info-notes-item' 
            >
              Start date: 8 January 2026
            </p>
          </div>

          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note2'
              className='cards-info-notes-item' 
            >
              Rest between reps: 1 min
            </p>
          </div>

          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note3'
              className='cards-info-notes-item' 
            >
              Rest between sets: 1-3 min
            </p>
          </div>

          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note4'
              className='cards-info-notes-item' 
            >
              UP technique
            </p>

          </div>

        </div>

      </div>}

      {/* Leimar - Static User 2 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
      <div
        key='static-leimar-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - {compactUserName('Leimar', 15)}</h2>

        <div className='cards-info-notes-itens'>
          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note1'
              className='cards-info-notes-item' 
            >
              Intervalos entre repetições: 1 min
            </p>
          </div>

          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note2'
              className='cards-info-notes-item' 
            >
              Intervalo entre séries: 1-3 min
            </p>
          </div>

          <div className='cards-info-notes-itens-icon-item'>
            <GiMuscleUp className='iconMuscleNotes' />

            <p 
              key='note3'
              className='cards-info-notes-item' 
            >
              Aquecimento: 60% da carga
            </p>
          </div>

        </div>

      </div>}

      {/* Dinamic Content */}
      {loginValidate && usersContents && usersContents
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => (
        <div
          key={user.id}
          className='cards-info-notes'
        >
          <h2 className='cards-info-notes-title'>Notes - {compactUserName(nameUser, 15)}</h2>

          <div className='cards-info-notes-itens'>
            {user.notes.map((note, indice) =>
              <div className='cards-info-notes-itens-icon-item'>
                <GiMuscleUp className='iconMuscleNotes' />

                <p 
                  key={indice}
                  className='cards-info-notes-item' 
                >
                  {note}
                </p>
                
              </div>
            )}
            
          </div>

        </div>

      ))}

    </div>
  )
}

export default NotesPage;
