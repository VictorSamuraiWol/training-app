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

  return (
    <div className='base-page-styles'>
      {loginValidate && <Header />}

      {!loginValidate && <Login setActivateNavigateDefault={setActivateNavigateDefault} />}

      <NavigateDefault 
        isLogged={activateNavigateDefault} 
        setActivateNavigateDefault={setActivateNavigateDefault} 
      />

      <Outlet context={{ setActivateNavigateDefault }} />

      <Footer />
      
    </div>
  )
}

export default BasePage;
