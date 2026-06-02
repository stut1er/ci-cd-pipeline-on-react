import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
  min?: number;
  max?: number;
}

export default function Counter({ initialCount = 0, min, max }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (max === undefined || count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (min === undefined || count > min) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 data-testid="count-value">Счётчик: {count}</h1>
      <div>
        <button data-testid="decrement-btn" onClick={decrement} style={{ margin: '5px' }}>
          -1
        </button>
        <button data-testid="increment-btn" onClick={increment} style={{ margin: '5px' }}>
          +1
        </button>
        <button data-testid="reset-btn" onClick={reset} style={{ margin: '5px' }}>
          Сброс
        </button>
      </div>
      <p data-testid="parity-message">
        {count % 2 === 0 ? 'Чётное число' : 'Нечётное число'}
      </p>
      {(min !== undefined || max !== undefined) && (
        <p data-testid="limits-message" style={{ fontSize: '12px', color: '#666' }}>
          {min !== undefined && `Минимум: ${min} `}
          {max !== undefined && `Максимум: ${max}`}
        </p>
      )}
    </div>
  );
}