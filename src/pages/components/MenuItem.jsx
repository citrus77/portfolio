import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const MenuItem = ({ link, setPathName, toggle }) => {
    const { name, to } = link;

    const handleOnClick = () => {
        setPathName(name);
        toggle();
    };

    return (
        <NavLink className='menu-item' onClick={handleOnClick} to={to}>{name}</NavLink>
    );
};

MenuItem.propTypes = {
    link: PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    }).isRequired,
    setPathName: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
};

export default MenuItem;