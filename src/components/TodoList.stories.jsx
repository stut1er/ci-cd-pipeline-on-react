import React from 'react';
import TodoList from './TodoList';

export default {
  title: 'Components/TodoList',
  component: TodoList,
  tags: ['autodocs'],
};

export const Empty = {
  args: {},
};

export const WithTasks = {
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('[data-testid="todo-input"]');
    const addButton = canvasElement.querySelector('[data-testid="add-todo-btn"]');
    
    if (input && addButton) {
      input.value = 'Купить продукты';
      input.dispatchEvent(new Event('change', { bubbles: true }));
      addButton.click();
      
      setTimeout(() => {
        input.value = 'Сделать домашку';
        input.dispatchEvent(new Event('change', { bubbles: true }));
        addButton.click();
      }, 300);
    }
  },
};