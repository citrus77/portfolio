/* eslint-disable react/prop-types */
import { MenuItem } from '.';
import './css/Menu.css';

const Menu = ({ bgColor2, links, setPathName, toggle }) => {

    return (
        <div
            id='menu'
            className='hidden'
            style={
                {
                    background: `${bgColor2} `
                }
            }>
            {
                links && links.map(link => <MenuItem
                    key={link.name}
                    link={link}
                    setPathName={setPathName}
                    toggle={toggle}
                />)
            }
        </div>
    );
};

export default Menu;