import './css/PageNotFound.css';
import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';

const PageNotFound = ({ bgColor1, setBgColor1, setBgColor2, setPathName }) => {
  useLayoutEffect(() => {
    setBgColor1('#00bee1');
    setBgColor2('#b49fff');        
}, [bgColor1]);

useLayoutEffect(() => {
  setPathName('404');
}, []);

  return (
    <div id='not-found'>
      <h1>404 Page Not Found</h1>
      <p>These are not the droids you are looking for</p>
    </div>
  );
};

PageNotFound.propTypes = {
  bgColor1: PropTypes.string.isRequired,
  setBgColor1: PropTypes.func.isRequired,
  setBgColor2: PropTypes.func.isRequired,
  setPathName: PropTypes.func.isRequired,
};

export default PageNotFound;