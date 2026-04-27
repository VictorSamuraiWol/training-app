import './Footer.css'
import image from '../../assets/images/icone-wolverine-sem-fundo.png'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../DataContext/DataContext'

function Footer() {

  const { loader } = useContext(DataContext)

  return(
    <div className='footer'>            
        <img 
          className='footer-img' 
          src={image} 
          alt="icon wolverine" 
        />

        <p className='footer-text'>Created by Victor Cardoso. Feel free to connect on  
            <Link className='footer-link' id='contactLink' to="https://www.linkedin.com/in/victor-cardoso-cloud-front/" target="_blank"> Linkedin.</Link>
        </p>

        {loader && <Loader />}

    </div>
  )
}

export default Footer
