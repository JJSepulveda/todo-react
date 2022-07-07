// React
import React from 'react'

// Custom Hooks
import { useLocalStorage } from './useLocalStorage';

const STORAGE_NAME = 'TODOS_V1';

const TodoContext = React.createContext();

function TodoProvider(props) {
    // codigo para buscar todos
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage(STORAGE_NAME, []);
    const [searchValue, setSearchValue] = React.useState('');
    // estado del modal
    const [openModal, setOpenModal] = React.useState(false)

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

    // codigo para crear todos
    const addTodo = (text) => {
        const newTodos = [...todos] // ... - operación de propagación
        // get time
        const time = new Date()
        const timestr = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        newTodos.push({
            text,
            time: timestr,
            completed: false,
        });
        // ejecutamos el re-render
        saveTodos(newTodos)
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            serachedTodos,
            setSearchValue,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
