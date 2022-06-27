import React from "react";
import { TodoContext } from "../TodoContext";

import "./TodoForm.css"

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
        <form
            className="todo-form"
            onSubmit={onSubmit}>
            <label 
                htmlFor="area-text"
                className="label">Escribe el nuevo todo</label>
            <textarea 
                id="area-text"
                className="text-area"
                value={newTodoValue}
                onChange={onChange}
                placeholder="escribe tu nuevo todo"
            />
            <div className="btn-group">
                <button
                    className="btn--submit"
                    type="submit"
                >
                    Añadir todo
                </button>
                <button
                    className="btn--submit btn-cancel"
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