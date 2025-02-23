import React, { useState } from "react";
import '../styles/Kontak.css';

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could be an API call)
    alert('Pesan terkirim!');
  };

  return (
    <div className="kontak-container">
      {/* Header */}
      <div className="header-container">
        <div className="user-container">
          <i className="fas fa-user"></i>
        </div>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>

      {/* Kontak Form Section */}
      <div className="kontak-form-section">
        <h2 className="kontak-title">Kontak Kami</h2>
        <p className="kontak-description">
          Kami senang mendengar dari Anda! Kirimkan pesan atau pertanyaan Anda melalui formulir di bawah ini.
        </p>

        <form className="kontak-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              placeholder="Tuliskan pesan Anda"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn submit-btn">
            Kirim Pesan
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info-section">
        <h3>Alamat Kami</h3>
        <p>Jl. Contoh No.123, Jakarta, Indonesia</p>
        <h3>Telepon</h3>
        <p>+62 21 1234 5678</p>
        <h3>Email</h3>
        <p>info@contoh.com</p>
      </div>
    </div>
  );
};

export default Kontak;
