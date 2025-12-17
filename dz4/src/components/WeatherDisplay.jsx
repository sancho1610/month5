import React from 'react';
import styles from './WeatherDisplay.module.css';

const WeatherDisplay = ({ weather, error }) => {
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!weather) {
    return <div className={styles.message}>Enter a city to see the weather</div>;
  }

  return (
    <div className={styles.weather}>
      <div className={styles.icon}>{weather.icon}</div>
      <div className={styles.temp}>{weather.temp}°C</div>
      <div className={styles.description}>{weather.description}</div>
    </div>
  );
};

export default WeatherDisplay;