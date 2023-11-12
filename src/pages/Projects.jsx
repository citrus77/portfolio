import './css/Projects.css';
import dataFns from '../components/dataFns';
import { SingleProject } from '../components';

const Projects = ({ setBgColor1, setBgColor2 }) => {
    setBgColor1('#00bee1');
    setBgColor2('#ea65a3');
    
    const { getProjects } = dataFns;
    const projects = getProjects();
    return (
        <div id='projects'>
            <h1>Projects</h1>
            {
                projects.reverse().map(project => <SingleProject key={project.id} projectData={project} />)
            }
        </div>
    );
};

export default Projects;