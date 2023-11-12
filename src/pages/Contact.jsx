import { useLayoutEffect } from 'react';
import dataFns from '../dataFns';
import './css/Contact.css';

const Contact = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
    useLayoutEffect(() => {
        setBgColor1('#d5194e');
        setBgColor2('#f69c47');
    }, [bgColor1]);

    useLayoutEffect(() => {
        setPathName('Contact');
    }, []);

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

export default Contact;