import React from 'react' 
import './LoginSignup.css'

const MobileOTP = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'><h2>LOGO</h2></div>
                <div className='underline'></div>
            </div>
            <div className='notification-text'>
                <h2>We sent OTP code to</h2>
                <h2>verify your number</h2>
            </div>
            <div className='number-field'>                
                <div className='input'>
                    <input type="tel" className='input-text'/>
                </div>
            </div>            
            <div className='Login-Button'>Verify</div>
            <div className='Back-Button'>Back</div>            
        </div>
    )
}

export default MobileOTP