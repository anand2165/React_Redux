//TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos); // Accessing the correct state path
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
