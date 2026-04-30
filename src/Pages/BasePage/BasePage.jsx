import './BasePage.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Login from '../../Components/Login/Login';
import NavigateDefault from '../../Components/NavigateDefault/NavigateDefault';
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';

function BasePage() {

  const { loginValidate } = useContext(DataContext)

  const [activateNavigateDefault, setActivateNavigateDefault] = useState(false)

  const [isOnToggleTimersExercises, setIsOnToggleTimersExercises] = useState(false)

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
      {loginValidate && <Header compactUserName={compactUserName} />}

      {!loginValidate && <Login setActivateNavigateDefault={setActivateNavigateDefault} />}

      <NavigateDefault 
        isLogged={activateNavigateDefault} 
        setActivateNavigateDefault={setActivateNavigateDefault} 
      />

      <Outlet context={{ setActivateNavigateDefault, compactUserName, isOnToggleTimersExercises, setIsOnToggleTimersExercises }} />

      <Footer />
      
    </div>
  )
}

export default BasePage;
