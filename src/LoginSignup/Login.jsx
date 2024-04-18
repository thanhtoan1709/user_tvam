import React from 'react' 
import './LoginSignup.css'
import profilePic from './image/google-logo.png'
import profilePic1 from './image/facebook-logo.png'
import profilePic2 from './image/smartphone-logo.png'
import profilePic3 from './image/mail-logo.png'

const Login = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'><h2> Login</h2> </div>
                <div className='underline'></div>
            </div>
            <div className='Choice'>
                <a href=""><div className='signup-google'>
                    <img src={profilePic} className='google-img' alt="googleicon" />
                    <div className='text'> Login with Google </div>
                </div>
                </a>
                <a href=""> <div className='signup-facebook'>
                    <img src={profilePic1} className='facebook-img' alt="facebookicon" />
                    <div className='text'> Login with Facebook </div>
                </div>
                </a>
                <a href=""><div className='signup-mobile'>
                    <img src={profilePic2} className='mobile-img' alt="mobileicon" />
                    <div className='text'> Login with Mobile Number </div>
                </div>
                </a>
                <a href=""><div className='signup-email'>
                    <img src={profilePic3} className='mail-img' alt="mailicon" />
                    <div className='text'> Login with Email </div>
                </div>
                </a>   
                <div className='back-container'>                    
                    <a href="#"><div className='back'>Back</div></a>
                </div>                 
            </div>                    
        </div>
    )
}

export default Login
