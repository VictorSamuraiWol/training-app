import './ErrorLogin.css';
import imageLoadingWorkout from '../../assets/images/loading-training.png'

function ErrorLogin() {

  return(
    <div className='error-login-styles'>
      <img className='image-loading-workout' src={imageLoadingWorkout} alt='image-loading-workout' />
      <span className='error-login-styles-title'>"Please log in on the home page using a username and password provided via the 'SHOW ALL NAMES AND PASSWORDS' button, located in the top-center of the screen, before accessing the full content. Thank you!"</span>
    </div>
  )
}

export default ErrorLogin;
