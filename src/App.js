import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/projetos" element={ <Projetos/> } />
          <Route path="/contato" element={ <Contato/> } />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
