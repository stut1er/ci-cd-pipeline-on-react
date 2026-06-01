import React, { useState } from 'react';

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 data-testid="count-value">Счётчик: {count}</h1>
      <button 
        data-testid="increment-btn"
        onClick={() => setCount(count + 1)}
        style={{ marginRight: '10px' }}
      >
        Увеличить (+1)
      </button>
      <button 
        data-testid="decrement-btn"
        onClick={() => setCount(count - 1)}
        style={{ marginRight: '10px' }}
      >
        Уменьшить (-1)
      </button>
      <button 
        data-testid="reset-btn"
        onClick={() => setCount(initialCount)}
      >
        Сбросить
      </button>
      <p data-testid="parity-message">
        {count % 2 === 0 ? 'Чётное число' : 'Нечётное число'}
      </p>
    </div>
  );
}