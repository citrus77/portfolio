import { MenuItem } from '.';
import './Menu.css';

const Menu = ({ links, setPathName, toggle }) => {

    return (
        <div id='menu'>
            {
                links && links.map(link => <MenuItem key={link.name} link={link} setPathName={setPathName} toggle={toggle}/>)
            }
        </div>
    );
};

export default Menu;