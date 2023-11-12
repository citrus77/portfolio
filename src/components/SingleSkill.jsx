const SingleSkill = ({ skill }) => {
    return (
        <div className='skill'>
            <img src={skill.img} alt={skill.name} height='72' width='72' className='skill-logo'/>
            <div>{skill.name}</div>
        </div>
    );
};

export default SingleSkill;