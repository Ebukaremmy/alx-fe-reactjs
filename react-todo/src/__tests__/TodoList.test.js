import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList and adds a new todo', () => {
  render(<TodoList />);
  
  // Verify initial render
  expect(screen.getByText('Learn React')).toBeInTheDocument();

  // Simulate adding a todo
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');
  
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(screen.getByText('New Task')).toBeInTheDocument();

  // Simulate deleting a todo
  const deleteButtons = screen.getAllByText('Delete');
  fireEvent.click(deleteButtons[0]);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});