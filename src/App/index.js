import React from 'react'
// import './App.css';

// ui
import { AppUI } from './AppUI'

const STORAGE_NAME = 'TODOS_V1';

function useLocalStorage(itemName, initialValue) {
  // Cargar la lista de todos
  const localStorageTodos = localStorage.getItem(itemName);
  // Parsear los datos
  let parsedItems;
  // verificar si es un nuevo usuario o si ya tiene todos 
  if (!localStorageTodos) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = []
  }
  else {
    parsedItems = JSON.parse(localStorageTodos);
  }

  const [item, setItems] = React.useState(parsedItems);

  const saveItem = (newTodos) => {
    // Guardamos en el navegador
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem(STORAGE_NAME, stringifiedTodos)
    // Aplicamos el re-render
    setItems(newTodos)
  }

  return [
    item,
    saveItem,
  ];
}

function App() {
  // codigo para buscar todos
  const [todos, saveTodos] = useLocalStorage(STORAGE_NAME, []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length

  let serachedTodos = [];

  if (!searchValue.length >= 1) {
    serachedTodos = todos;
  }
  else {
    serachedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText);
    })
  }

  // codigo para eliminar todos
  const deleteTodos = (text) => {
    // estamos usando el text como el id
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos] // ... - operación de propagación
    newTodos.splice(todoIndex, 1)
    // ejecutamos el re-render
    saveTodos(newTodos)
  };

  // codigo para completar todos
  const completeTodos = (text) => {
    // estamos usando el text como el id
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos] // ... - operación de propagación
    // copiamos los todos
    newTodos[todoIndex].completed = true;
    // ejecutamos el re-render
    saveTodos(newTodos)
  };

/*   console.log('render antes del useEffect')

  React.useEffect(() => {
    console.log('use effect');
  }, [totalTodos]);

  console.log('render despues del del useEffect') */

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      serachedTodos={serachedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
  
}

export default App;
