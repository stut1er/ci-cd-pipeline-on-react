import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
  role?: string;
}

export default function UserCard({ 
  name, 
  email, 
  avatar, 
  role = 'Пользователь' 
}: UserCardProps) {
  return (
    <div data-testid="user-card" style={{
      border: '1px solid #000000',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      margin: '10px',
      backgroundColor: '#2b0c64'
    }}>
      {avatar && (
        <img
          data-testid="user-avatar"
          src={avatar}
          alt={name}
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
        />
      )}
      <h3 data-testid="user-name" style={{ margin: '10px 0 5px' }}>{name}</h3>
      <p data-testid="user-email" style={{ margin: '5px 0' }}>{email}</p>
      <p data-testid="user-role" style={{ margin: '5px 0' }}>
        <strong>Роль:</strong> {role}
      </p>
    </div>
  );
}