import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoProvider>
      <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
