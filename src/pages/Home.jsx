import './css/Home.css';
import profilePic from '../assets/img/profile.jpg';

const Home = ({ setBgColor1, setBgColor2 }) => {
    setBgColor1('#bfffbc');
    setBgColor2('#00bee1');
    
    return <>
        <div id='home'>
            <div className='card'>
                <img src={profilePic} className='profile-pic' height='300' width='300' />
                <span>Hello! I am a Software Engineer specializing in Full-Stack Web Development. Check out my portfolio for some examples of my projects!</span>
            </div>
        </div>
    </>;
};

export default Home;