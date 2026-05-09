import './BasePage.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Login from '../../Components/Login/Login';
import NavigateDefault from '../../Components/NavigateDefault/NavigateDefault';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';

function BasePage() {

  const { loginValidate } = useContext(DataContext)

  const [activateNavigateDefault, setActivateNavigateDefault] = useState(false)

  const [isOnToggleTimersExercises, setIsOnToggleTimersExercises] = useState(false)

  const [selectIdVideoModal, setSelectIdVideoModal] = useState('')

  const [initialPosVideo, setInitialPosVideo] = useState({ x: 0, y: 0 })
  const [visibleVideoYT, setVisibleVideoYT] = useState(false)
  const [selectContainerVideoYTPosition, setSelectContainerVideoYTPosition] = useState('select-video-iframe-top-left-position')

  const compactUserName = (name, numLength) => {
    let editUserName;
    
    if (name.length > numLength) {
      editUserName = name.slice(0, numLength) + "..."

    } else {
      editUserName = name

    }

    return editUserName

  }

  return (
      <div className='base-page-styles'>
      {!loginValidate && <Login setActivateNavigateDefault={setActivateNavigateDefault} />}

      {!loginValidate && <ErrorLogin />}
        
      {loginValidate && <Header compactUserName={compactUserName} />}

      {loginValidate && <Outlet context={{ setActivateNavigateDefault, compactUserName, isOnToggleTimersExercises, 
        setIsOnToggleTimersExercises, selectIdVideoModal, setSelectIdVideoModal, visibleVideoYT, setVisibleVideoYT, 
        initialPosVideo, setInitialPosVideo, selectContainerVideoYTPosition, setSelectContainerVideoYTPosition }} 
      />}

      <NavigateDefault 
        isLogged={activateNavigateDefault} 
        setActivateNavigateDefault={setActivateNavigateDefault} 
      />
      
      <Footer />
      
    </div>

  )
}

export default BasePage;
