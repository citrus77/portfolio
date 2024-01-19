import PropTypes from 'prop-types';

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
            <p className='description'>{description}</p>
        </div>
    );
};

SingleEdu.propTypes = {
    edu: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startMonth: PropTypes.string.isRequired,
        startYear: PropTypes.string.isRequired,
        endMonth: PropTypes.string.isRequired,
        endYear: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        logoSrc: PropTypes.string.isRequired
    }).isRequired
};

export default SingleEdu;