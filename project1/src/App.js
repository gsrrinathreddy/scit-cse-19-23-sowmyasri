import React from 'react';
import { Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutus from './pages/Aboutus';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Contactme from './pages/Contactme';
import Certifications from './pages/Certifications';
import Workshop from './pages/Workshop';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return(
    <div className='App'>
      <INavbar/>
      <Routes>
        <Route path="Aboutus"element ={<Aboutus/>}/>
        <Route path="Experience"element ={<Experience/>}/>
        <Route path="Hobbies"element ={<Hobbies/>}/>
        <Route path="Qualification"element ={<Qualification/>}/>
        <Route path="Skills"element ={<Skills/>}/>
        <Route path="Contactme"element ={<Contactme/>}/>
        <Route path="Certifications"element ={<Certifications/>}/>
        <Route path="Workshop"element ={<Workshop/>}/>
        <Route path="Projects"element ={<Projects/>}/>
     </Routes>
      
    </div>
  );
}

export default App;