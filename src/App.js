// src/App.js
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import Main from './Components/Main';
import ConfirmedBooking from './pages/ConfirmedBooking'; // ✅ naya component import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
