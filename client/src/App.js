import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Write from './Pages/Write'
import Single from './Pages/Single'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import "./Style.scss"



const App = () => {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/write" element={<Write />} />
              <Route path="/post/:id" element={<Single />} />
            </Routes>
          <Footer />
          
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App