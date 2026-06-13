import './NotesPage.css';
import { DataContext } from '../../Components/DataContext/DataContext';
import { useContext, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { GiMuscleUp } from "react-icons/gi";

function NotesPage() {

  const { staticUsersContents, dbUsers, loginValidate, nameUser, setAbleNotesPage, setTypeTrain, setQuickAccessTypeName } = useContext(DataContext)

  const { compactUserName } = useOutletContext()

  useEffect(() => {
    setAbleNotesPage(true)
    setTypeTrain('')
    setQuickAccessTypeName('notes')

    return () => {
      setAbleNotesPage(false) // runs on component unmount
    } 

  }, [])

  return(
    <div className='notes-page-styles'>
      {loginValidate && <div className='banner-notes-page'></div>}

      {/* Static and Dynamic User Contents */}
      {(staticUsersContents || dbUsers) && loginValidate && [...(staticUsersContents), ...(dbUsers)]
      .filter(user => user.name.toLowerCase() === nameUser.toLowerCase().trim())
      .map(user => (
        <div
          key={user.id}
          className='cards-info-notes'
        >
          <h2 className='cards-info-notes-title'>Notes - {compactUserName(nameUser, 15)}</h2>

          <div className='cards-info-notes-itens'>
            {user.notes.map((note, indice) =>
              note && <div 
                key={indice}
                className='cards-info-notes-itens-icon-item'
              >
                <GiMuscleUp className='iconMuscleNotes' />

                <p 
                  key={indice}
                  className='cards-info-notes-item' 
                >
                  {note}
                </p>
                
              </div>)}
            
          </div>

        </div>))}

    </div>
  )
}

export default NotesPage;
