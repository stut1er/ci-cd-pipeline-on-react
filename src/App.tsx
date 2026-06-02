import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  return (
    <div className="App" style={{ marginTop: '60px' }}>
      <section style={{ marginBottom: '40px' }}>
        <h2>Компонент 1: Счётчик</h2>
        <Counter initialCount={5} min={0} max={10} />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Компонент 2: Список задач</h2>
        <TodoList />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Компонент 3: Карточка пользователя</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <UserCard
            name="Анна Смирнова"
            email="anna@example.com"
            role="Разработчик"
            avatar="https://i.pravatar.cc/80?img=4"
          />
          <UserCard
            name="Пётр Петров"
            email="petr@example.com"
            role="Тестировщик"
            avatar="https://i.pravatar.cc/80?img=9"
          />
          <UserCard
            name="Мария Сидорова"
            email="maria@example.com"
            avatar="https://i.pravatar.cc/80?img=12"
          />
        </div>
      </section>
    </div>
  );
}

export default App;