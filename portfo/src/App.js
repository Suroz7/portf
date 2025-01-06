import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Projects from './components/Projects';
import "./assets/home.css";
import "./assets/credentials.css";
import "./assets/contact.css";
import "./assets/about.css";
import "./App.css";
import "./assets/projects.css";

function App() {
  return (
    <div className="App">
    
    <div>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Credentials" element={<Credentials />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
        </div>
        
    </div>
  );
}

export default App;