import './TrainingPage.css';
import Main from '../../Components/Main/Main';
import { useContext, useEffect } from 'react';
import { DataContext } from '../../Components/DataContext/DataContext';

function TrainingPage() {

  const { loginValidate } = useContext(DataContext)

  useEffect(() => {
    
  }, [])

  return (
    <div className='training-page-style'> 
      {loginValidate && <Main />}
      
    </div>

  )
}

export default TrainingPage;
