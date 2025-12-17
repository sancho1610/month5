import styles from './Block.module.css';

export const Block = ({ product, images }) => {
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleBuyNow = () => {
    console.log(`ID: ${product.id}, Name: ${product.name}`);
  };

  return (
    <div className={styles.card}>
      <img src={randomImage} alt={product.name} className={styles.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <button className={styles.button} onClick={handleBuyNow}>Buy now</button>
    </div>
  );
};