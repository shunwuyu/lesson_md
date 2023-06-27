import React, { useState } from 'react';
import Todo from './Todo';
import useLocalStorage from './hooks/useLocalStorage';

const Todos = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);
//   const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleFormSubmit} className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a todo..."
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;