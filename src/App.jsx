import { useState } from 'react';
import { Header } from './components';
import { Home, Projects } from './pages'
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathName, setPathName] = useState('Home')

  const toggle = () => {
      setMenuOpen(!menuOpen);
      document.getElementById('menu').classList.toggle('hidden');
  };

  return (
    <div id='app'>
      <Header setPathName={setPathName} pathName={pathName} toggle={toggle} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
