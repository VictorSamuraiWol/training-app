import './TrainingPage.css';
import Main from '../../Components/Main/Main';
import ErrorLogin from '../../Components/ErrorLogin/ErrorLogin';
import { useContext } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';

function TrainingPage() {

  const { loginValidate } = useContext(DataContext)

  return (
    <div className='training-page-style'> 
      {loginValidate && <Main />}

      {!loginValidate && <ErrorLogin />}
      
    </div>

  )
}

export default TrainingPage;
