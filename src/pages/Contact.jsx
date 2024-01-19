import { useLayoutEffect } from 'react';
import dataFns from '../dataFns';
import './css/Contact.css';

import PropTypes from 'prop-types';

const Contact = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
    useLayoutEffect(() => {
        setBgColor1('#ff0048');
        setBgColor2('#f69c47');
    }, [bgColor1, setBgColor1, setBgColor2]);

    useLayoutEffect(() => {
        setPathName('Contact');
    }, [setPathName]);

    const { getAboutMe } = dataFns;
    const { email, linkedIn, github, resumeLnk } = getAboutMe();

    return (
        <div id='contact'>
            <h1>Get in touch!</h1>
            <br />
            <div className='contact-info'>
                <div>e-mail: <a href='mailto:{email}' target='_email'>
                        {email}
                    </a>
                </div>
                <div>LinkedIn: <a href={linkedIn} target='_linkedin'>
                        {linkedIn}
                    </a>
                </div>                
                <div>GitHub: <a href={github} target='_github'>
                        {github}
                    </a>
                </div>
                <br />
                <div>
                    You may view my resume <a href={resumeLnk} target='_resume'>here</a>!
                </div>
            </div>
        </div>
    );
};

Contact.propTypes = {
    bgColor1: PropTypes.string.isRequired,
    setBgColor1: PropTypes.func.isRequired,
    setBgColor2: PropTypes.func.isRequired,
    setPathName: PropTypes.func.isRequired,
};

export default Contact;