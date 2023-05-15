import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import States from "./pages/States";
import Provinces from "./pages/Provinces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states" element={<States />} />
        <Route path="/provinces" element={<Provinces />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
