import './NotesPage.css';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

function NotesPage() {

  const { usersContents, loginValidate, nameUser } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  return(
    <div className='notes-page-styles'>
      {!loginValidate && <ErrorLogin />}

      {loginValidate && <div className='banner-notes-page'></div>}

      {/* Static Content */}
      {/* Static User 1 */}
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
            ✔️ Example
          </p>

          <p 
            key='observation2'
            className='cards-info-notes-item' 
          >
            ✔️ Example
          </p>

          <p 
            key='observation3'
            className='cards-info-notes-item' 
          >
            ✔️ Example
          </p>

        </div>

      </div>
      }

      {/* Static User 2 */}
      {nameUser.toLowerCase().trim() === 'New User 1'.toLowerCase() && loginValidate &&
      <div
        key='static-newuser1-id'
        className='cards-info-notes'
      >
        <h2 className='cards-info-notes-title'>Notes - New User 1</h2>

        <div className='cards-info-notes-itens'>
          <p 
            key='observation1'
            className='cards-info-notes-item' 
          >
            ✔️ Example
          </p>

          <p 
            key='observation2'
            className='cards-info-notes-item' 
          >
            ✔️ Example
          </p>

          <p 
            key='observation3'
            className='cards-info-notes-item' 
          >
            ✔️ Example
          </p>

        </div>

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
          <h2 className='cards-info-notes-title'>Notes - {compactUserName(nameUser)}</h2>

          <div className='cards-info-notes-itens'>
            {user.notes.map((note, indice) =>
            <p
              key={indice}
              className='cards-info-notes-item'>
                ✔️ {note}
            </p>
            )}
            
          </div>

        </div>

      ))}

    </div>
  )
}

export default NotesPage;
