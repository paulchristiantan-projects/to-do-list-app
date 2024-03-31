// TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, updatedText);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <div className="sticky-note">
      <div className="todo-item">
        {!isEditing ? (
          <>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleComplete(todo.id)} 
            />
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
            <span 
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => toggleComplete(todo.id)}>
              {todo.text}
            </span>
          </>
        ) : (
          <>
            <input 
              type="text" 
              className="edit-input" 
              value={updatedText} 
              onChange={handleInputChange} 
            />
            <button className="save-btn" onClick={handleSave}>Save</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
