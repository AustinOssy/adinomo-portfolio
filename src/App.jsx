import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../src/assets/sass/main.scss"
import Footer from './components/Footer';
import Reveal from './components/Reveal'

function App() {
  return ( 
    <div className=''>
      <NavBar />
      <Reveal><Home /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Contacts /></Reveal>
      <Footer />
    </div>  
  );
}

export default App;