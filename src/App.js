import './App.css';
import React, { useState, useEffect } from 'react';
import About from './pagesComponents/About';
import Missing from './pagesComponents/cannotFind';
import Home from './pagesComponents/Home';
import { Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Missing />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;

