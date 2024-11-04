import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './App.css';
import Learn from './pages/Learn';
import Forums from './pages/Forums';
import Contest from './pages/Contest';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/forum" element={<Forums />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
