import { Menu } from '.';
import './css/Navigation.css';

const Navigation = ({ setPathName, pathName, toggle }) => {
    const links = [
        { name: 'Home', to: '/' },
        { name: 'Projects', to: '/projects' }
    ];

    return (
        <div id='navigation'>
            <button onClick={toggle}>{pathName} ⤈</button>
            <Menu links={links} setPathName={setPathName} toggle={toggle} />
        </div>
    );
};

export default Navigation;