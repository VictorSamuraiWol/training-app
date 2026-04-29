import './NotesPage.css';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";

function NotesPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return(
    <div className='notes-page-styles'>
      {!loginValidate && <ErrorLogin />}

      {loginValidate && <div className='banner-notes-page'></div>}

      {/* Static Content */}
      {/* Victor Static - Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Victor Static'.toLowerCase() && loginValidate &&
      <div
        key='static-victor-static-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - Victor Static</h2>

        <div className='cards-info-notes-itens'>
          <p 
            key='observation1'
            className='cards-info-notes-item' 
          >
            <FaCheck className='iconCheckNotes' />Start date: 8 January 2026
          </p>

          <p 
            key='observation2'
            className='cards-info-notes-item' 
          >
            <FaCheck className='iconCheckNotes' />Rest between reps: 1 min
          </p>

          <p 
            key='observation3'
            className='cards-info-notes-item' 
          >
            <FaCheck className='iconCheckNotes' />Rest between sets: 1-3 min
          </p>

        </div>

      </div>}

      {/* Leimar - Static User 2 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
      <div
        key='static-leimar-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - Leimar</h2>

        <div className='cards-info-notes-itens'>
          <p 
            key='observation1'
            className='cards-info-notes-item' 
          >
            <FaCheck className='iconCheckNotes' />Intervalos entre repetições: 1 min
          </p>

          <p 
            key='observation2'
            className='cards-info-notes-item' 
          >
            <FaCheck className='iconCheckNotes' />Intervalo entre séries: 1-3 min
          </p>

          <p 
            key='observation2'
            className='cards-info-notes-item' 
          >
            <FaCheck className='iconCheckNotes' />Aquecimento: 60% da carga
          </p>

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
          <h2 className='cards-info-notes-title'>Notes - {compactUserName(nameUser)}</h2>

          <div className='cards-info-notes-itens'>
            {user.notes.map((note, indice) =>
            <p
              key={indice}
              className='cards-info-notes-item'>
                <FaCheck className='iconCheckNotes' />{note}
            </p>
            )}
            
          </div>

        </div>

      ))}

    </div>
  )
}

export default NotesPage;
