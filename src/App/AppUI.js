// React
import React from 'react';

// Componenetes
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';

import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodo } from '../EmptyTodo/inex';

// context
import { TodoContext } from '../TodoContext';

// Modal
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'

import "./App.css"


function AppUI() {
  const {
    loading,
    error,
    serachedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodoLoading />}
        {error && <TodoError />}
        {(!loading && !serachedTodos.length) && <EmptyTodo />}

        {serachedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            time={todo.time}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      
      {openModal && (
        <Modal>
          <TodoForm>
            
          </TodoForm>
        </Modal>
      )}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
