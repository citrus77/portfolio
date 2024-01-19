import { useLayoutEffect } from 'react';
import './css/Home.css';
import './css/card.css';

import PropTypes from 'prop-types';

const Home = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
    useLayoutEffect(() => {
        setBgColor1('#bfffbc');
        setBgColor2('#00bee1');
    }, [bgColor1, setBgColor1, setBgColor2]);

    useLayoutEffect(() => {
        setPathName('Home');
    }, [setPathName]);

    return (
        <div id='home'>
            <div className='card'>
                <img src='./assets/img/profile.jpg' className='profile-pic' height='300' width='300' />
                <div>
                    <p>Hello! I am a Software Engineer specializing in Full-Stack Web Development. Check out my portfolio for some examples of my projects!</p>
                    <p>I am interested in developing applications for web, desktop and mobile that will have a positive impact.  I also greatly enjoy sharing what knowledge I have with aspiring developers.</p>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    bgColor1: PropTypes.string,
    setBgColor1: PropTypes.func,
    setBgColor2: PropTypes.func,
    setPathName: PropTypes.func,
};

export default Home;