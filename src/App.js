import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Sidebar from './menu/Sidebar';
import './App.css';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
