// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import AboutUs from './components/AboutUs'; // Impor komponen AboutUs
import Home from './components/Home'; // Impor komponen Home
import Konsultasi from './components/Konsultasi'; // Impor komponen Konsultasi
import Program from './components/Program'; // Impor komponen Program
import Transaksi from './components/Transaksi'; // Impor komponen Transaksi
import Berita from './components/Berita'; // Impor komponen Berita
import Kontak from './components/Kontak'; // Impor komponen Kontak
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} /> {/* Route untuk Home */}
          <Route path="/aboutus" element={<AboutUs />} /> {/* Route untuk AboutUs */}
          <Route path="/konsultasi" element={<Konsultasi />} /> {/* Route untuk Konsultasi */}
          <Route path="/program" element={<Program />} /> {/* Route untuk Program */}
          <Route path="/transaksi" element={<Transaksi />} /> {/* Route untuk Transaksi */}
          <Route path="/berita" element={<Berita />} /> {/* Route untuk Berita */}
          <Route path="/kontak" element={<Kontak />} /> {/* Route untuk Kontak */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;