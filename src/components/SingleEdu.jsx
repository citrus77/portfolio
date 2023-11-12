const SingleEdu = ({ edu }) => {
    const {
        name, 
        location, 
        startMonth, 
        startYear, 
        endMonth, 
        endYear, 
        description, 
        logo
    } = edu;
    return <div className='edu'>
            <div>
                <img src={logo} alt='edu image' className='edu-logo' />
                <h3>{name}</h3>
            </div>
            <div><i>{location}</i></div>
            <br />
            <div>{startMonth} {startYear} - {endMonth} {endYear}</div>
            <br />
            <div>{description}</div>
        </div>
};

export default SingleEdu;