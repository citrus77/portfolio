import { Navigation } from '.';
import './Header.css';

const Header = ({ setPathName,pathName, toggle }) => {
    return (
        <header>
            <h1>Header</h1>
            <Navigation setPathName={setPathName} pathName={pathName} toggle={toggle} />
        </header>
    );
};

export default Header;