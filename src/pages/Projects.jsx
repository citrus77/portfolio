import { useLayoutEffect } from 'react';
import { SingleProject } from '../components';
import dataFns from '../dataFns';
import './css/Projects.css';

const Projects = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
    useLayoutEffect(() => {
        setBgColor1('#00bee1');
        setBgColor2('#b49fff');        
    }, [bgColor1]);

    useLayoutEffect(() => {
        setPathName('Projects');
    }, []);
    
    const { getProjects } = dataFns;
    const projects = getProjects();
    return (
        <div id='projects'>
            {
                projects.reverse().map(project => <SingleProject key={project.id} projectData={project} />)
            }
        </div>
    );
};

export default Projects;