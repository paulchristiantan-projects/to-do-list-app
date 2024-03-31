// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
            editTodo={editTodo} // Make sure to include editTodo here
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
