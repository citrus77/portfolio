import { useEffect } from 'react';
import { Menu } from '.';
import './Navigation.css';

const Navigation = ({ setPathName, pathName, toggle }) => {
    const links = [
        { name: 'Home', to: '/' },
        { name: 'Projects', to: '/projects' }
    ];

    useEffect(() => {
        console.log(pathName)
    }, [pathName]);

    return (
        <div id='navigation'>
            <button onClick={toggle}>{pathName}</button>
            <div id='menu-cont'>
                <Menu links={links} setPathName={setPathName} toggle={toggle} />
            </div>
        </div>
    );
};

export default Navigation;