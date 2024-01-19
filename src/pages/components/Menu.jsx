import { MenuItem } from '.';
import './css/Menu.css';

import PropTypes from 'prop-types';

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

Menu.propTypes = {
    bgColor2: PropTypes.string,
    links: PropTypes.array,
    setPathName: PropTypes.func,
    toggle: PropTypes.func,
};

export default Menu;