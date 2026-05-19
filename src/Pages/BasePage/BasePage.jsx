import './BasePage.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Login from '../../Components/Login/Login';
import NavigateDefault from '../../Components/NavigateDefault/NavigateDefault';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';
import Timer from '../../Components/Timer/Timer';

function BasePage() {

  const { loginValidate } = useContext(DataContext)

  const [activateNavigateDefault, setActivateNavigateDefault] = useState(false)

  const [isOnToggleTimersExercises, setIsOnToggleTimersExercises] = useState(false)

  const [selectIdVideoModal, setSelectIdVideoModal] = useState('')

  const [initialPosVideo, setInitialPosVideo] = useState('')

  const [visibleVideoYT, setVisibleVideoYT] = useState(false)

  const [selectContainerVideoYTPosition, setSelectContainerVideoYTPosition] = useState('select-video-iframe-initial-left-center-right-position')

  const [ableTimer, setAbleTimer] = useState(true)

  const [ableBanner, setAbleBanner] = useState(true)

  const [ableVideoBanner, setAbleVideoBanner] = useState(false)

  const [ableMusic, setAbleMusic] = useState(true)

  const [checkedInputs, setCheckedInputs] = useState([])

  const compactUserName = (name, numLength) => {
    let editUserName;
    
    if (name.length > numLength) {
      editUserName = name.slice(0, numLength) + "..."

    } else {
      editUserName = name

    }

    return editUserName

  }

  function toggleChecked(_key, checked) {
    setCheckedInputs(prev =>
      checked ? [...prev, _key] : prev.filter(k => k !== _key)
    )

  }

  return (
      <div className='base-page-styles'>
      {!loginValidate && <Login setActivateNavigateDefault={setActivateNavigateDefault} />}

      {!loginValidate && <ErrorLogin />}
        
      {loginValidate && 
      <Header 
        compactUserName={compactUserName} 
        isOnToggleTimersExercises={isOnToggleTimersExercises}
        setIsOnToggleTimersExercises={setIsOnToggleTimersExercises}
        ableTimer={ableTimer}
        setAbleTimer={setAbleTimer}
      />}

      {loginValidate && <Outlet context={{ 
        setActivateNavigateDefault, compactUserName, isOnToggleTimersExercises, setIsOnToggleTimersExercises, 
        selectIdVideoModal, setSelectIdVideoModal, visibleVideoYT, setVisibleVideoYT, initialPosVideo, setInitialPosVideo, 
        selectContainerVideoYTPosition, setSelectContainerVideoYTPosition, checkedInputs, setCheckedInputs, toggleChecked, 
        setAbleTimer, ableMusic, setAbleMusic, ableBanner, setAbleBanner, ableVideoBanner, setAbleVideoBanner
      }} 
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
