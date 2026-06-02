import UserCard from './UserCard';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    role: 'Пользователь',
  },
};

export const WithAvatar = {
  args: {
    name: 'Анна Смирнова',
    email: 'anna@example.com',
    role: 'Администратор',
    avatar: 'https://i.pravatar.cc/80?img=1',
  },
};