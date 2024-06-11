// Todo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPlus } from 'react-icons/bs';
import { addTodo} from '../redux/Actions';

import TodoList from './TodoList';

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <div className="container p-5 my-5 bg-dark text-white border">
    <p className='h2 text-center'>To Do App</p>
    <div className='d-flex flex-row justify-content-around p-4'>
     <input type='text' className='col-10' value={newTodoText} onChange={(e)=>{setNewTodoText(e.target.value)}} placeholder='Enter todo'>
     </input>
     <button className='btn btn-primary' onClick={handleAddTodoClick}> <BsPlus size={20} /></button>
    </div>
    <TodoList/>
</div>
  );
};

export default Todo;