import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import About from './pages/About';
import GlobalStyle from './styles/global';
import DeliveryAppContainer from './pages/DeliveryApp';
import ResponsiveSite from './pages/ResponsiveSite';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/projetos" element={ <Projetos/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/deliveryApp" element={ <DeliveryAppContainer/> } />
          <Route path="/responsiveSite" element={ <ResponsiveSite/> } />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
