import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Selamat Datang di Lab-Mart</h1>
        <p style={styles.heroSubtitle}>Solusi belanja kebutuhan praktikum dan gadget terkini dalam satu aplikasi.</p>
        <button onClick={() => navigate('/products')} style={styles.ctaButton}>
          Lihat Produk Kami
        </button>
      </header>

      <section style={styles.features}>
        <div style={styles.featureItem}>
          <h3>🚀 Pengiriman Cepat</h3>
          <p>Barang sampai di tanganmu kurang dari 24 jam.</p>
        </div>
        <div style={styles.featureItem}>
          <h3>🛡️ Transaksi Aman</h3>
          <p>Pembayaran terenkripsi dan aman menggunakan sistem terbaru.</p>
        </div>
        <div style={styles.featureItem}>
          <h3>📱 Multi Platform</h3>
          <p>Tersedia dalam versi Web dan Mobile sesuai kebutuhanmu.</p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: { fontFamily: 'Arial, sans-serif' },
  hero: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
  },
  heroTitle: { fontSize: '3rem', marginBottom: '10px' },
  heroSubtitle: { fontSize: '1.2rem', marginBottom: '30px' },
  ctaButton: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '50px 10%',
    backgroundColor: '#fff'
  },
  featureItem: { flex: '1', minWidth: '250px', textAlign: 'center', padding: '20px' }
};

export default Home;