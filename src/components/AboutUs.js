// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';  // Make sure the path is correct

const AboutUs = () => {
  const tableData = [
    { id: 1, contentType: 'Header Title', content: 'Tentang Kami' },
    { id: 2, contentType: 'Title Description', content: 'Latar Belakang - Visi & Misi' },
    { id: 3, contentType: 'Background', content: 'Yuk-Mari Project atau disingkat YMP merupakan...' },
    { id: 4, contentType: 'Vision & Mission', content: '1. Berkomitmen memberikan layanan berkualitas...' },
  ];

  return (
    <div className="content">
      <div className="header-container">
        <div className="user-container">
          <i className="fas fa-user"></i>
        </div>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>
      <div className="table-container">
        <h3>Tentang Kami</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Content Type</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.contentType}</td>
                <td>{item.content}</td>
                <td className="actions">
                  <a href="#">Edit</a> <a href="#" className="delete">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
