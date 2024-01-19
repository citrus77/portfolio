import PropTypes from 'prop-types';
import './css/SingleSkill.css';

const SingleSkill = ({ skill }) => {
    return (
        <div className='skill'>
            <img src={skill.imgSrc} alt={skill.name} height='72' width='72' className='skill-logo'/>
            <div>{skill.name}</div>
        </div>
    );
};

SingleSkill.propTypes = {
    skill: PropTypes.object.isRequired,
};

export default SingleSkill;