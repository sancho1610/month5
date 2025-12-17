import { Block } from "./components/Block";
import styles from './App.module.css';

function App() {
  const images = [
    'https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwX8eZKk_GZJcefhD1QVHoM2dh3nL47nmQg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49XI5IJqIkI5sC4e6zk4FxCr79ZE7smPe5g&s',
    'https://img3.procvetok.com/crop/w500h500/32/a0/32a074858cfe875cb16d47a91e7d3c93.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonlE1vswAD82wN5B90v1cazq7ta-BqkbBKw&s'
  ];

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' }
  ];

  return (
    <div className={styles.container}>
      <h1>Интернет-магазин</h1>
      <div className={styles.productList}>
        {products.map(product => (
          <Block key={product.id} product={product} images={images} />
        ))}
      </div>
    </div>
  );
}

export default App;
