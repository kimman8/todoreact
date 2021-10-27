import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      // gets rid of whitespace
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const completeTodo = () => {};
  return (
    <div>
      <h1>Whats da plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
