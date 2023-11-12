import './css/SingleProject.css';

const SingleProject = ({ projectData }) => {
    const {contributors, description, github, imgUrl, project, url } = projectData;

    return (
        <div className='project card'>
            <h3>
                <span>
                    <a href={url} target='_project'>{project}</a>
                </span>
            </h3>
            <div className='proj-content'>
                <div>
                    <a href={url} target='_project'>
                        <img src={imgUrl} alt={project} className='proj-img' />
                    </a>
                </div>
                <div className='proj-desc'>
                    <div>{description}</div>
                    <div>
                        <a href={github} target='_github'>Project GitHub</a>
                    </div>
                    <br />
                    <h3>Contributors:</h3>
                    {
                        contributors.map(contributor => <div key={contributor.id} className='contributor'>
                                <div>{contributor.name}</div>
                                <div>
                                    <a href={contributor.github} target='_github'>{contributor.github}</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleProject;