import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ... (useEffect fetch data yang sudah ada sebelumnya) ...

  // FUNGSI ADD TO CART
  const addToCart = () => {
    // 1. Ambil data keranjang yang sudah ada di localStorage (kalau belum ada, buat array kosong)
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // 2. Cek apakah produk ini sudah ada di keranjang atau belum
    const isProductInCart = existingCart.find(item => item._id === product._id);

    if (isProductInCart) {
      alert("Produk sudah ada di keranjang!");
    } else {
      // 3. Tambahkan produk ke dalam array (tambahkan field quantity)
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];
      
      // 4. Simpan kembali ke localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      alert("Berhasil ditambahkan ke keranjang!");
      // Opsional: langsung arahkan ke halaman cart
      navigate('/cart');
    }
  };

  if (loading) return <h2>Memuat Detail...</h2>;

  return (
    <div style={styles.container}>
      {/* ... bagian gambar dan info lainnya ... */}
      
      <div style={styles.infoSection}>
        <h1>{product.name}</h1>
        <h2>Rp {product.price.toLocaleString()}</h2>
        
        {/* PASANG FUNGSI DI TOMBOL INI */}
        <button onClick={addToCart} style={styles.addToCartButton}>
          + Masukkan ke Keranjang
        </button>
      </div>
    </div>
  );
};