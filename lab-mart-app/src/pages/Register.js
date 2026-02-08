import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ganti URL ini dengan endpoint register dari API temanmu
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert("Registrasi Berhasil! Silakan Login.");
      navigate('/login');
    } catch (err) {
      alert("Registrasi Gagal: " + err.response?.data?.message);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2>Daftar Akun Lab-Mart</h2>
        <input type="text" placeholder="Username" style={styles.input} 
               onChange={(e) => setFormData({...formData, username: e.target.value})} required />
        <input type="email" placeholder="Email" style={styles.input} 
               onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" style={styles.input} 
               onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        <button type="submit" style={styles.button}>Daftar Sekarang</button>
        <p>Sudah punya akun? <Link to="/login">Login di sini</Link></p>
      </form>
    </div>
  );
};

// Styling disamakan agar konsisten
const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', backgroundColor: '#f4f4f4' },
  card: { padding: '40px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center', width: '350px' },
  input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }
};

export default Register;