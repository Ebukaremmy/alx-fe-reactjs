import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders TodoList component and initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Test Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Test Todo')).toBeInTheDocument();
});

test('toggles a todo completion status', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  const todoText = screen.getByText('Learn React');

  fireEvent.click(deleteButton);
  expect(todoText).not.toBeInTheDocument();
});