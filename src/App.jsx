import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/sass/main.scss"
import Footer from './components/Footer';


function App() {
  return ( 
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/skills"} element={<Skills />} />
        <Route path={"/contacts"} element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   );
}

export default App;