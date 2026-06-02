import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  it('рендерит заголовок и пустой список', () => {
    render(<TodoList />);
    expect(screen.getByText('Список задач')).toBeInTheDocument();
    expect(screen.getByTestId('empty-message')).toBeInTheDocument();
  });

  it('добавляет новую задачу', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-btn');

    fireEvent.change(input, { target: { value: 'Купить молоко' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Купить молоко')).toBeInTheDocument();
    expect(screen.queryByTestId('empty-message')).not.toBeInTheDocument();
  });

  it('переключает статус задачи при клике', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-btn');

    fireEvent.change(input, { target: { value: 'Сделать домашку' } });
    fireEvent.click(addButton);

    const todoText = screen.getByText('Сделать домашку');
    expect(todoText).toHaveStyle('text-decoration: none');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  it('удаляет задачу', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-btn');

    fireEvent.change(input, { target: { value: 'Задача для удаления' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Задача для удаления')).toBeInTheDocument();

    const deleteButton = screen.getByTestId(/delete-todo-/);
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Задача для удаления')).not.toBeInTheDocument();
  });
});