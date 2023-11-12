import { useState } from 'react';
import { Header } from './components';
import { Home, Projects } from './pages'
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
        background: `linear-gradient(100deg, ${bgColor1} 5%, ${bgColor2} 95%`,
      }}
    >
      <Header setPathName={setPathName} pathName={pathName} toggle={toggle} />
      <Routes>
        <Route exact path='/' element={ <Home setBgColor1={setBgColor1} setBgColor2={setBgColor2}/> } />
        <Route exact path='/projects' element={ <Projects setBgColor1={setBgColor1} setBgColor2={setBgColor2}/> } />
      </Routes>
    </div>
  );
};

export default App;
