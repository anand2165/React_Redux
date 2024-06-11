//TodoItem.js
import React from 'react'
import { useDispatch } from 'react-redux';
import { FaToggleOn, FaToggleOff, FaTrash } from 'react-icons/fa';
import {
    removeTodo,
    toggleCompleted
  } from '../redux/Actions';

const TodoItem = ({ todo, index }) => {
    const dispatch=useDispatch();
  return (
    <li className='d-flex flex-row align-items-center mb-3'>
<div className="d-flex align-items-center flex-grow-1">
<span className={`me-3 ${todo.completed ? 'text-success' : 'text-gray-500'}`}>
          {index + 1}.
        </span>
        <span className={`me-4 ${todo.completed ? 'text-decoration-line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='d-flex align-items-center ms-auto'>
        <button
          className="btn btn-danger me-2"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
          <button className="btn btn-success" onClick={() => dispatch(toggleCompleted(index))}>
            {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
          </button>
    
      </div>
    </li>
  )
}

export default TodoItem




  
  
  
  
  
  
  
  