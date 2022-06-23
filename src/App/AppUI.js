// React
import React from 'react';

// Componenetes
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';

// context
import { TodoContext } from '../TodoContext';

// Modal
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm'


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

  console.log(serachedTodos)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

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
