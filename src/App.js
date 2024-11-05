import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Forums from './pages/Forums';
import Contest from './pages/Contest';
import Upskill from './pages/Upskill';
import Chapter1 from './pages/Chapter1';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/forum" element={<Forums />} />
        <Route path="/chapter" element={<Chapter1 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
