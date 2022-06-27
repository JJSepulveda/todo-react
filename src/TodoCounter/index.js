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
        <div className="counter">
			<p className="couter__total">
				Completaste <br />
				{completed} de {total} todos
			</p>
		</div>
    );
}

export { TodoCounter };
