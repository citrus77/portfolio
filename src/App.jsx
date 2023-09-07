import { useState } from 'react';
import { Header, Home, Projects } from './components';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathName, setPathName] = useState('home')

  const toggle = () => {
      setMenuOpen(!menuOpen);
      document.getElementById('menu').classList.toggle('hidden');
      console.log(menuOpen)
  };

  return (
    <div id='app'>
      <Header setPathName={setPathName} pathName={pathName} toggle={toggle} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
      <Home />
    </div>
  );
};

export default App;
