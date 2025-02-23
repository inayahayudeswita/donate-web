import React from "react";
import '../styles/Berita.css';

const Berita = () => {
  const beritaData = [
    {
      id: 1,
      title: "Berita Terbaru: Perkembangan Teknologi",
      description:
        "Teknologi berkembang dengan sangat pesat. Simak update terbaru tentang perkembangan dunia teknologi...",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      id: 2,
      title: "Laporan Keuangan Tahunan",
      description:
        "Laporan keuangan tahunan kami sudah siap! Dapatkan detail tentang pencapaian dan kinerja kami sepanjang tahun...",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    },
    {
      id: 3,
      title: "Meningkatkan Kualitas Pendidikan di Indonesia",
      description:
        "Pendidikan adalah investasi jangka panjang. Simak upaya-upaya yang dilakukan untuk meningkatkan kualitas pendidikan di Indonesia...",
      image: "https://via.placeholder.com/300x200",
      link: "#"
    }
  ];

  return (
    <>
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

      {/* Berita Container */}
      <div className="berita-container">
        <h1 className="berita-title">Berita Terkini</h1>
        <div className="berita-list">
          {beritaData.map((item) => (
            <div className="berita-card" key={item.id}>
              <img src={item.image} alt={item.title} className="berita-image" />
              <div className="berita-content">
                <h3 className="berita-card-title">{item.title}</h3>
                <p className="berita-card-description">{item.description}</p>
                <a href={item.link} className="read-more">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Berita;
