import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './pages/TodoListPage';
import { TodoProvider } from './contexts/TodoContext';
import { BrowserRouter, Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/todo-app">TODO-APP</Link>
          </li>
          <li>
            <Link to="/rota-protegida">ROUTER-PROTECTED</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
      </div>
    </div>
  );
}

export default App;
