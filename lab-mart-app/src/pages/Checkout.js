import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  const handleFinish = () => {
    alert("Pesanan Berhasil! Terima kasih sudah berbelanja di Lab-Mart.");
    localStorage.removeItem('cart'); // Bersihkan keranjang
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Checkout</h1>
      
      <div style={styles.wrapper}>
        <div style={styles.formSection}>
          <h3>Data Pengiriman</h3>
          <input type="text" placeholder="Nama Lengkap" style={styles.input} />
          <input type="text" placeholder="Alamat Lengkap" style={styles.input} />
          <input type="text" placeholder="Nomor WhatsApp" style={styles.input} />
          
          <h3 style={{ marginTop: '20px' }}>Metode Pembayaran</h3>
          <select style={styles.input}>
            <option>Transfer Bank (VA)</option>
            <option>E-Wallet (Gopay/OVO)</option>
            <option>COD (Bayar di Tempat)</option>
          </select>
        </div>

        <div style={styles.summarySection}>
          <h3>Ringkasan Pesanan</h3>
          {cartItems.map(item => (
            <div key={item._id} style={styles.itemRow}>
              <span>{item.name}</span>
              <span>Rp {item.price.toLocaleString()}</span>
            </div>
          ))}
          <hr />
          <div style={styles.totalRow}>
            <strong>Total Bayar:</strong>
            <strong>Rp {total.toLocaleString()}</strong>
          </div>
          <button onClick={handleFinish} style={styles.payButton}>Proses Sekarang</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '40px 10%', backgroundColor: '#f4f4f4', minHeight: '100vh' },
  wrapper: { display: 'flex', flexWrap: 'wrap', gap: '30px' },
  formSection: { flex: '2', minWidth: '350px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px' },
  summarySection: { flex: '1', minWidth: '300px', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', height: 'fit-content' },
  input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '4px', border: '1px solid #ddd' },
  itemRow: { display: 'flex', justifyContent: 'space-between', margin: '10px 0', fontSize: '14px' },
  totalRow: { display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '18px', color: '#27ae60' },
  payButton: { width: '100%', padding: '15px', backgroundColor: '#e67e22', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }
};

export default Checkout;