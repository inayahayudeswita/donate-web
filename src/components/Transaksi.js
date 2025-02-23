import React, { useState } from "react";
import '../styles/Konsultasi.css';

const Transaksi = () => {
  const [donations, setDonations] = useState([
    { id: 1, name: "John Doe", amount: 100000, date: "2025-02-15" },
    { id: 2, name: "Jane Smith", amount: 50000, date: "2025-02-16" },
    { id: 3, name: "Ali Baba", amount: 200000, date: "2025-02-17" },
  ]);

  const [newDonation, setNewDonation] = useState({ name: "", amount: "", date: "" });
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fungsi untuk menambah donasi baru
  const addDonation = () => {
    setDonations([...donations, { ...newDonation, id: donations.length + 1 }]);
    setNewDonation({ name: "", amount: "", date: "" });
  };

  // Fungsi untuk mengedit donasi
  const editDonation = (id) => {
    const donation = donations.find((d) => d.id === id);
    setNewDonation(donation);
    setEditing(true);
    setEditId(id);
  };

  // Fungsi untuk menyimpan perubahan
  const saveDonation = () => {
    setDonations(donations.map((d) => (d.id === editId ? { ...d, ...newDonation } : d)));
    setNewDonation({ name: "", amount: "", date: "" });
    setEditing(false);
    setEditId(null);
  };

  // Fungsi untuk menghapus donasi
  const deleteDonation = (id) => {
    setDonations(donations.filter((d) => d.id !== id));
  };

  return (
    <div className="content">
      {/* Header Container */}
      <div className="header-container">
        <div className="user-container">
          <i className="fas fa-user"></i>
        </div>
        <div className="search-container">
          <i className="fas fa-search"></i>
          <input type="text" className="search-box" placeholder="Search..." />
        </div>
      </div>

      <h2 className="page-title">Donasi Transaksi</h2>

      {/* Form Input */}
      <div className="donation-form">
        <input
          type="text"
          className="form-input"
          placeholder="Nama Donatur"
          value={newDonation.name}
          onChange={(e) => setNewDonation({ ...newDonation, name: e.target.value })}
        />
        <input
          type="number"
          className="form-input"
          placeholder="Jumlah Donasi"
          value={newDonation.amount}
          onChange={(e) => setNewDonation({ ...newDonation, amount: e.target.value })}
        />
        <input
          type="date"
          className="form-input"
          placeholder="Tanggal Donasi"
          value={newDonation.date}
          onChange={(e) => setNewDonation({ ...newDonation, date: e.target.value })}
        />
        {editing ? (
          <button onClick={saveDonation}>Save Changes</button>
        ) : (
          <button onClick={addDonation}>Add Donation</button>
        )}
      </div>

      {/* Table Donasi */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Donatur</th>
            <th>Jumlah Donasi</th>
            <th>Tanggal Donasi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.id}</td>
              <td>{donation.name}</td>
              <td>{donation.amount}</td>
              <td>{donation.date}</td>
              <td>
                <a href="#" className="edit" onClick={() => editDonation(donation.id)}>Edit</a> |{" "}
                <a href="#" className="delete" onClick={() => deleteDonation(donation.id)}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Transaksi;
