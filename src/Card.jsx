import profilePic from './image/Amiya_Elite_2_icon.png'

function Card() {

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Bo Kiet</h2>
            <p className='card-text'>I make fashion consultant</p>
        </div>
    );
}

export default Card