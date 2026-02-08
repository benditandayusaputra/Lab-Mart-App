import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // Fungsi logout sederhana (menghapus token dan ke login)
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert("Berhasil Logout");
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>Lab-Mart</Link>
      </div>
      
      <div style={styles.menu}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/products" style={styles.navLink}>Products</Link>
        <Link to="/cart" style={styles.navLink}>Cart 🛒</Link>
        
        {/* Tombol Logout */}
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
    </nav>
  );
};

// Styling CSS-in-JS dengan Flexbox (LO1)
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 5%',
    backgroundColor: '#2c3e50',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  logoLink: {
    color: '#3498db',
    textDecoration: 'none'
  },
  menu: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },
  navLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s'
  },
  logoutBtn: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default Navbar;