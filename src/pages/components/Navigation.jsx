import { Menu } from '.';
import './css/Navigation.css';

const Navigation = ({ bgColor2, setPathName, pathName, toggle }) => {
    const links = [
        { name: 'Home', to: '/' },
        { name: 'Projects', to: '/projects' },
        { name: 'About', to: '/about' },
        { name: 'Contact', to: '/contact' }
    ];

    return (
        <div id='navigation'>
            <button onClick={toggle} id='menuBtn'>{pathName} ⇣</button>
            <Menu
                bgColor2={bgColor2}
                links={links}
                setPathName={setPathName}
                toggle={toggle}
            />
        </div>
    );
};

export default Navigation;