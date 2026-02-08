import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Ganti URL ini dengan endpoint login dari API temanmu
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      localStorage.setItem('token', res.data.token);
      
      alert("Login Berhasil!");
      navigate('/'); 
    } catch (err) {
      alert("Login Gagal! Cek email/password.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h2>Login Lab-Mart</h2>
        <input type="email" placeholder="Email" style={styles.input} 
               onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" style={styles.input} 
               onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        <button type="submit" style={styles.button}>Masuk</button>
        <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
      </form>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', backgroundColor: '#f4f4f4' },
  card: { padding: '40px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center', width: '350px' },
  input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }
};

export default Login;