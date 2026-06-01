import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('отображает начальное значение 0 по умолчанию', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 0');
  });

  it('увеличивает счётчик при клике на кнопку "+1"', () => {
    render(<Counter initialCount={10} />);
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 11');
  });

  it('сбрасывает счётчик до начального значения', () => {
    render(<Counter initialCount={3} />);
    fireEvent.click(screen.getByTestId('increment-btn')); // стало 4
    fireEvent.click(screen.getByTestId('reset-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 3');
  });

  it('показывает "Чётное число" для чётного значения', () => {
    render(<Counter initialCount={2} />);
    expect(screen.getByTestId('parity-message')).toHaveTextContent('Чётное число');
  });
});