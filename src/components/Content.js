// src/components/Content.js
import React from 'react';
import '../styles/Content.css';  // Pastikan path-nya benar

const Content = () => {
  return (
    <div className="content">
      <div className="header-container">
        <div className="user-container"><i className="fas fa-user"></i></div>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>
      <div className="welcome-message">Selamat Datang di Dashboard Admin!</div>
    </div>
  );
};

export default Content;
