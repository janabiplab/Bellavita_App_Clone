import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import './App.css'
import Auth from './components/Auth/Auth';
import Login from './components/Login/Login';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signUp" element={<Auth/>} />
        <Route path="/login" element={<Login/>} />
      
      </Routes>
    </Router>
  )
}

export default App
