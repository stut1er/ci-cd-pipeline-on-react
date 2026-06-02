import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard Component', () => {
  const defaultProps = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    avatar: 'https://via.placeholder.com/80'
  };

  it('рендерит имя пользователя', () => {
    render(<UserCard {...defaultProps} />);
    expect(screen.getByTestId('user-name')).toHaveTextContent('Иван Иванов');
  });

  it('рендерит email', () => {
    render(<UserCard {...defaultProps} />);
    expect(screen.getByTestId('user-email')).toHaveTextContent('ivan@example.com');
  });

  it('использует роль по умолчанию', () => {
    render(<UserCard {...defaultProps} />);
    expect(screen.getByTestId('user-role')).toHaveTextContent('Пользователь');
  });

  it('отображает переданную роль', () => {
    render(<UserCard {...defaultProps} role="Администратор" />);
    expect(screen.getByTestId('user-role')).toHaveTextContent('Администратор');
  });

  it('отображает аватар при наличии', () => {
    render(<UserCard {...defaultProps} />);
    const avatar = screen.getByTestId('user-avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', defaultProps.avatar);
  });
});