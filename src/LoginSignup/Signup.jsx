import React from 'react' 
import './LoginSignup.css'
import profilePic from './image/google-logo.png'
import profilePic1 from './image/facebook-logo.png'
import profilePic2 from './image/smartphone-logo.png'
import profilePic3 from './image/mail-logo.png'

const Signup = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'><h2> Sign Up</h2> </div>
                <div className='underline'></div>
            </div>
            <div className='Choice'>
                <a href=""><div className='signup-google'>
                    <img src={profilePic} className='google-img' alt="googleicon" />
                    <div className='text'> Sign up with Google </div>
                </div>
                </a>
                <a href=""> <div className='signup-facebook'>
                    <img src={profilePic1} className='facebook-img' alt="facebookicon" />
                    <div className='text'> Sign up with Facebook </div>
                </div>
                </a>
                <a href=""><div className='signup-mobile'>
                    <img src={profilePic2} className='mobile-img' alt="mobileicon" />
                    <div className='text'> Enter Mobile Number </div>
                </div>
                </a>
                <a href=""><div className='signup-email'>
                    <img src={profilePic3} className='mail-img' alt="mailicon" />
                    <div className='text'> Sign up with Email </div>
                </div>
                </a>                
            </div>
            <div className='syncGene'> 
                <div>By signing up , you agree to SyncGene</div>
                <div className='TOF'>
                    <a href="">Terms of Use</a>and<a href="">Privacy Policy</a>
                </div>
            </div>            
            <div className='have-account'><p/>Already have an account? <a href="#"><span>Login here!</span></a></div>
        </div>
    )
}

export default Signup
