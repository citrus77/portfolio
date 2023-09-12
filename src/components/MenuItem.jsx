/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuItem = ({ link, setPathName, toggle }) => {
    const { name, to } = link;

    const handleOnClick = () => {
        setPathName(name);
        toggle();
        console.log('clicked')
    };

    return (
        <NavLink class='menu-item' onClick={handleOnClick} to={to}>{name}</NavLink>
    );
};

export default MenuItem;