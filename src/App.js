import Header from './components/Header';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Crudlist from './components/Crudlist';

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); // Fix: Initialize as an empty array
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Crudlist 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
