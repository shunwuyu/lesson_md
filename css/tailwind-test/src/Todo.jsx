import React from 'react';

const Todo = ({ todo, onDelete }) => {
  return (
    <li className="flex items-center mb-2">
      <span className="mr-2">{todo}</span>
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;