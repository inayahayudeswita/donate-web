import React from "react";
import { Link } from 'react-router-dom'; // Impor Link
import '../styles/Konsultasi.css';

const Program = () => {
  const data = [
    { id: 1, type: "Header Title", content: "Program" },
    { id: 2, type: "Title Description", content: "Layanan program online" },
    { id: 3, type: "Header Title 2", content: "Cara Kerja" },
    { id: 4, type: "Title Description 2", content: "Hubungi kami untuk program" },
    { id: 5, type: "Footer Title", content: "Hubungi Sekarang" },
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
      <h2 className="page-title">Program Kami</h2>
      <input type="text" className="search-box" placeholder="Search..." />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Content Type</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.content}</td>
              <td>
                <a href="#" className="edit">Edit</a> |{" "}
                <a href="#" className="delete">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Program;
