/* eslint-disable react/prop-types */
import { MenuItem } from '.';
import './css/Menu.css';

const Menu = ({ links, setPathName, toggle }) => {

    return (
        <div id='menu' className='hidden'>
            {
                links && links.map(link => <MenuItem key={link.name} link={link} setPathName={setPathName} toggle={toggle} />)
            }
        </div>
    );
};

export default Menu;