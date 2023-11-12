/* eslint-disable react/prop-types */
import { Navigation } from '.';
import './css/Header.css';

const Header = ({ bgColor1, bgColor2, setPathName, pathName, toggle }) => {
    return (
        <header>
            <h1 style={
                {
                    textShadow: `-1px 1px 0px ${bgColor2},
                    1px 1px 0px ${bgColor1}`
                }
            }>Jason Lammers</h1>
            <Navigation setPathName={setPathName} pathName={pathName} toggle={toggle} />
        </header>
    );
};

export default Header;