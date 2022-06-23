/*
TodoCounter componet.
*/
// React
import React from "react";

// context
import { TodoContext } from "../TodoContext";

// CSS
import './TodoCounter.css'

function TodoCounter() {
    const {
        totalTodos: total, 
        completedTodos: completed 
    } = React.useContext(TodoContext)

    return(
        <h2 className="TodoCounter">
            Has completados {completed} de {total} TODOs
        </h2>
    );
}

export { TodoCounter };
