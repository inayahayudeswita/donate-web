// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutUs from './components/AboutUs'; // Impor komponen AboutUs
import { Content } from './components/Content'; // Impor komponen Home
import Program from './components/Program'; // Impor komponen Program
import Transaksi from './components/Transaksi'; // Impor komponen Transaksi
import Settings from './components/Settings'; // Impor komponen Settings
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/content" element={<Content />} /> {/* Route untuk Home */}
          <Route path="/aboutus" element={<AboutUs />} /> {/* Route untuk AboutUs */}
          <Route path="/program" element={<Program />} /> {/* Route untuk Program */}
          <Route path="/transaksi" element={<Transaksi />} /> {/* Route untuk Transaksi */}
          <Route path="/settings" element={<Settings />} /> {/* Route untuk Kontak */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;