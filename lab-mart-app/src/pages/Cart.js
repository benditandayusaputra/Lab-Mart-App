import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // 1. Ambil data keranjang dari localStorage saat halaman dimuat
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  // 2. Fungsi hapus item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // 3. Hitung total harga
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Keranjang Belanja</h1>

      {cartItems.length === 0 ? (
        <div style={styles.empty}>
          <p>Keranjangmu masih kosong nih.</p>
          <button onClick={() => navigate('/products')} style={styles.shopButton}>
            Mulai Belanja
          </button>
        </div>
      ) : (
        <div style={styles.cartWrapper}>
          <div style={styles.itemList}>
            {cartItems.map((item) => (
              <div key={item._id} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <h4>{item.name}</h4>
                  <p>Rp {item.price.toLocaleString()}</p>
                </div>
                <button onClick={() => removeItem(item._id)} style={styles.deleteButton}>
                  Hapus
                </button>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3>Ringkasan Belanja</h3>
            <div style={styles.summaryRow}>
              <span>Total Harga:</span>
              <span style={styles.totalAmount}>Rp {totalPrice.toLocaleString()}</span>
            </div>
            <button onClick={() => navigate('/checkout')} style={styles.checkoutButton}>
              Lanjut ke Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styling Flexbox Responsif (LO1)
const styles = {
  container: { padding: '40px 5%', minHeight: '100vh', backgroundColor: '#f4f7f6' },
  title: { marginBottom: '30px', textAlign: 'center' },
  cartWrapper: { display: 'flex', flexWrap: 'wrap', gap: '30px' },
  itemList: { flex: '2', minWidth: '350px' },
  cartItem: { 
    display: 'flex', alignItems: 'center', backgroundColor: '#fff', 
    padding: '15px', borderRadius: '10px', marginBottom: '15px', 
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)' 
  },
  itemImage: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' },
  itemDetails: { flex: '1', marginLeft: '20px' },
  deleteButton: { backgroundColor: '#ff4d4d', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' },
  summary: { 
    flex: '1', minWidth: '300px', backgroundColor: '#fff', padding: '25px', 
    borderRadius: '10px', height: 'fit-content', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' 
  },
  summaryRow: { display: 'flex', justifyContent: 'space-between', margin: '20px 0', fontSize: '18px' },
  totalAmount: { fontWeight: 'bold', color: '#27ae60' },
  checkoutButton: { 
    width: '100%', padding: '15px', backgroundColor: '#2ecc71', color: '#fff', 
    border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
  },
  shopButton: { padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }
};

export default Cart;