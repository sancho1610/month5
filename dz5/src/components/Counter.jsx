import React, { useState, useCallback } from 'react';
import ChildButton from './ChildButton';

const Counter = () => {
  console.log('Counter rendered');
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <ChildButton onClick={handleClick} label="Increment" />
    </div>
  );
};

export default Counter;