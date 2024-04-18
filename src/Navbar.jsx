import profilePic from './image/login-icon.png'

function Navbar() {

    return(
        <nav className="nav">
            <a href="/" className="site-title">LOGO</a>
            <ul>
                <li>
                    <a href="">Collection</a>        
                </li>
                <li>                
                    <a href="">Fashion Consultant</a>                    
                </li>
                <li>                    
                    <a href="">Calendar</a>
                </li>
            </ul>            
            <a href='#'><img className='profile-image' src={profilePic}/></a>
            
        </nav>
    );
}

export default Navbar
