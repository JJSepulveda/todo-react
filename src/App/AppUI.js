// React
import React from 'react';

// Componenetes
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    loading,
    error,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue, 
    serachedTodos,
    completeTodos,
    deleteTodos
}) {
    return (
        <React.Fragment>
          <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
          />
          <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          /> 
          <TodoList>
            {loading && <p>keep and calm and wait we are loading. </p>}
            {error && <p>Hubo un error... NOo!</p>}
            {(!loading && !serachedTodos.length) && <p>Crea tu primer todo</p>}

            {serachedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
              /> 
            ))}
          </TodoList>
          <CreateTodoButton/> 
        </React.Fragment>
    );
}

export { AppUI };
