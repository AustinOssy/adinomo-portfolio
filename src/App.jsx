import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import "../src/assets/sass/main.scss"
import Footer from './components/Footer';
import SideBar from './components/SideBar';

function App() {
  return (
     <div className="font-primary outfit bg-primary text-info px-5 md:px-7">
        <NavBar />
        <Home />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
        <SideBar />
     </div>
  );
}

export default App;