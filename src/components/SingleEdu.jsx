import './css/SingleEdu.css';

const SingleEdu = ({ edu }) => {
    const {
        name,
        location,
        startMonth,
        startYear,
        endMonth,
        endYear,
        description,
        logoSrc
    } = edu;

    return (
        <div className='edu'>
            <div>
                <img src={logoSrc} alt='edu image' className='edu-logo' />
                <h3>{name}</h3>
            </div>
            <p><i>{location}</i></p>
            <p>{startMonth} {startYear} - {endMonth} {endYear}</p>
            <br />
            <p>{description}</p>
        </div>
    );
};

export default SingleEdu;