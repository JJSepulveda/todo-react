import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    };

    const onSubmit = (event) => {
        // evita que el submit recarge la pagina
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="escribe tu nuevo todo"
            />
            <div>
                <button
                    type="submit"
                >
                    Añadir todo
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export { TodoForm }