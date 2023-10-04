/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

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

export default MenuItem;