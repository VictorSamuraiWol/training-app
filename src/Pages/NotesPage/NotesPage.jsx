import './NotesPage.css';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useContext } from 'react';

function NotesPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  return(
    <div className='notes-page-styles'>
      {!loginValidate && <ErrorLogin />}

      {/* Static Content */}
      {/* Static User 1 */}
      {nameUser.toLowerCase().trim() === 'Leimar'.toLowerCase() && loginValidate &&
      <div
        key='static-leimar-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - Leimar</h2>
        <p className='cards-info-notes-itens' key='observation1'>Example</p>
        <p className='cards-info-notes-itens' key='observation2'>Example</p>
        <p className='cards-info-notes-itens' key='observation3'>Example</p>
      </div>
      }

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && loginValidate &&
      <div
        key='static-newuser1-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - New User 1</h2>
        <p className='cards-info-notes-itens' key='observation1'>Example</p>
        <p className='cards-info-notes-itens' key='observation2'>Example</p>
        <p className='cards-info-notes-itens' key='observation3'>Example</p>
      </div>
      }

      {/* Dinamic Content */}
      {loginValidate && usersContents && usersContents
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => (
        <div
          key={user.id}
          className='cards-info-notes'
        >
          <h2 className='cards-info-notes-title'>Notes - {user.name}</h2>

          {user.notes.map((note, indice) =>
          <p
            key={indice}
            className='cards-info-notes-itens'>
              {note}
          </p>
          )}

        </div>

      ))}

    </div>
  )
}

export default NotesPage;
