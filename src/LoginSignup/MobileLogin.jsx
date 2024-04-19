import React from 'react' 
import './LoginSignup.css'

const MobileLogin = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'><h2>LOGO</h2></div>
                <div className='underline'></div>
            </div>
            <div className='notification-text'><h2>Enter your number</h2></div>
            <div className='number-field'>
                <div className='text'>+84</div>
                <div className='input'>
                    <input type="tel" className='input-text'/>
                </div>
            </div>            
            <div className='Login-Button'>Login</div>
            <div className='Back-Button'>Back</div>            
        </div>
    )
}

export default MobileLogin