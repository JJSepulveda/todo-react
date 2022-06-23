import React from 'react'
// import './App.css';

// Provider
import { TodoProvider } from '../TodoContext';

// ui
import { AppUI } from './AppUI'

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
