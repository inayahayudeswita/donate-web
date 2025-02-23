// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/images/Logo.png" alt="Logo" />
      </div>
      <ul id="menu">
        <li>
          <Link to="/"><i className="fas fa-home"></i> Home</Link>
        </li>
        <li>
          <Link to="/aboutus"><i className="fas fa-info-circle"></i> Tentang Kami</Link>
        </li>
        <li>
          <Link to="/konsultasi"><i className="fas fa-phone"></i> Konsultasi</Link>
        </li>
        <li>
          <Link to="/program"><i className="fas fa-tasks"></i> Program Kami</Link>
        </li>
        <li>
          <Link to="/transaksi"><i className="fas fa-money-bill"></i> Transaksi</Link>
        </li>
        <li>
          <Link to="/berita"><i className="fas fa-newspaper"></i> Berita</Link>
        </li>
        <li>
          <Link to="/kontak"><i className="fas fa-envelope"></i> Kontak Kami</Link>
        </li>
      </ul>
      <div className="logout-container">
        <div className="logout"><i className="fas fa-sign-out-alt"></i> Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
