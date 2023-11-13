import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (id, title, completed) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title, completed } : todo
    );
    setTodos(newTodos);
    setEditTodo(null);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) {
      // Prevent adding empty todos
      return;
    }

    if (editTodo) {
      updateTodo(editTodo.id, input, editTodo.completed);
    } else {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    }

    setInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Text Here.."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      
      <button className="button-add" type="submit">
        {editTodo ? 'OK' : 'ADD'}
      </button>
    </form>
  );
};

export default Form;
