import React from 'react';
import styles from './WeatherInput.module.css';

const WeatherInput = ({ city, setCity }) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
        className={styles.input}
      />
    </div>
  );
};

export default WeatherInput;