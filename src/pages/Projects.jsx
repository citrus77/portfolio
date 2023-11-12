import dataFns from '../components/dataFns';
import { SingleProject } from '../components';

const Projects = () => {
    const { getProjects } = dataFns;
    const projects = getProjects();
    return (
        <div className='projects'>
            <h1>Projects</h1>
            {
                projects.reverse().map(project => <SingleProject key={project.id} projectData={project} />)
            }
        </div>
    );
};

export default Projects;