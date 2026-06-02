import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('отображает начальное значение 0 по умолчанию', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 0');
  });

  it('отображает начальное значение из props', () => {
    render(<Counter initialCount={10} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 10');
  });

  it('увеличивает счётчик при клике +1', () => {
    render(<Counter initialCount={5} />);
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 6');
  });

  it('уменьшает счётчик при клике -1', () => {
    render(<Counter initialCount={5} />);
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 4');
  });

  it('сбрасывает счётчик до начального значения', () => {
    render(<Counter initialCount={3} />);
    fireEvent.click(screen.getByTestId('increment-btn'));
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 5');
    fireEvent.click(screen.getByTestId('reset-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 3');
  });

  it('не превышает максимальное значение', () => {
    render(<Counter initialCount={5} max={7} />);
    fireEvent.click(screen.getByTestId('increment-btn'));
    fireEvent.click(screen.getByTestId('increment-btn'));
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 7');
  });

  it('не опускается ниже минимального значения', () => {
    render(<Counter initialCount={3} min={1} />);
    fireEvent.click(screen.getByTestId('decrement-btn'));
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Счётчик: 1');
  });
});