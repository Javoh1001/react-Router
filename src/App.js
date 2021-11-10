import React from 'react';
import './App.css';
import Nav from './Nav'
import Blog from './Blog';
import About from './About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element = {<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
