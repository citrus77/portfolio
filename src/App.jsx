import { useState } from 'react';
import { Header } from './components';
import { About, Home, Projects } from './pages'
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathName, setPathName] = useState('Home')

  const [bgColor1, setBgColor1] = useState('');
  const [bgColor2, setBgColor2] = useState('');

  const toggle = () => {
      setMenuOpen(!menuOpen);
      document.getElementById('menu').classList.toggle('hidden');
  };

  return (
    <div
      id='app'
      style={{
        background: `linear-gradient(to right, ${bgColor1}, ${bgColor2}`,
      }}
    >
      <Header setPathName={setPathName} pathName={pathName} toggle={toggle} />
      <Routes>
        <Route exact path='/' element={ <Home bgColor1={bgColor1} setBgColor1={setBgColor1} setBgColor2={setBgColor2} setPathName={setPathName}/> } />
        <Route exact path='/about' element={ <About bgColor1={bgColor1} setBgColor1={setBgColor1} setBgColor2={setBgColor2} setPathName={setPathName}/> } />
        <Route exact path='/projects' element={ <Projects bgColor1={bgColor1} setBgColor1={setBgColor1} setBgColor2={setBgColor2} setPathName={setPathName}/> } />
      </Routes>
    </div>
  );
};

export default App;
