import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ganti URL ini dengan link Backend temenmu (misal dari Render/Railway)
  const API_URL = 'https://lab-mart-api.vercel.app/api';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data produk:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Memuat Produk...</h2>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Daftar Produk Lab-Mart</h1>
      
      {/* Container Flexbox untuk responsivitas */}
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product._id} style={styles.card}>
            <img 
              src={product.image || 'https://via.placeholder.com/150'} 
              alt={product.name} 
              style={styles.image} 
            />
            <div style={styles.info}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.price}>Rp {product.price.toLocaleString()}</p>
              <Link to={`/product/${product._id}`} style={styles.button}>
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling menggunakan Flexbox sesuai instruksi Soal 1
const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh'
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap', // Membuat item turun ke bawah jika layar sempit
    justifyContent: 'center',
    gap: '25px'
  },
  card: {
    width: '280px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  info: {
    padding: '15px',
    textAlign: 'center'
  },
  productName: {
    fontSize: '18px',
    margin: '10px 0',
    color: '#444'
  },
  price: {
    fontWeight: 'bold',
    color: '#e67e22',
    fontSize: '16px',
    marginBottom: '15px'
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '14px'
  }
};

export default ProductList;