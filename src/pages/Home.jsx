import { useLayoutEffect } from 'react';
import './css/Home.css';
import './css/card.css';

const Home = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
    useLayoutEffect(() => {
        setBgColor1('#bfffbc');
        setBgColor2('#00bee1');
    }, [bgColor1]);

    useLayoutEffect(() => {
        setPathName('Home');
    }, []);

    return (
        <div id='home'>
            <div className='card'>
                <img src='./assets/img/profile.jpg' className='profile-pic' height='300' width='300' />
                <span>Hello! I am a Software Engineer specializing in Full-Stack Web Development. Check out my portfolio for some examples of my projects!</span>
            </div>
        </div>
    );
};

export default Home;