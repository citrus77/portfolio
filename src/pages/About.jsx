import { useLayoutEffect } from 'react';
import { SingleEdu, SingleSkill } from '../components';
import dataFns from '../dataFns';
import './css/About.css';

const About = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
    useLayoutEffect(() => {
        setBgColor1('#b49fff');
        setBgColor2('#d5194e');
    }, [bgColor1]);

    useLayoutEffect(() => {
        setPathName('About');
    }, []);

    const { getAboutMe, getEducation, getSkills } = dataFns;
    const { description } = getAboutMe();
    const education = getEducation();
    const skills = getSkills();

    return (
        <div id='about'>
            <div className='description'>{description}</div>
            <br />
            <h2>Skills</h2>
            <div className='skills'>
                {
                    skills ? skills.map(skill => <SingleSkill key={skill.id} skill={skill} />) : null
                }
            </div>
            <br />
            <br />
            <h2>Education</h2>
            <div className='education'>
                {
                    education.map(edu => <SingleEdu key={edu.id} edu={edu} />)
                }
            </div>
        </div>
    );
};

export default About;