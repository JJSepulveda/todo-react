/*
TodoCounter componet.
*/
// React
import React from "react";

// CSS
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos}) {
    return(
        <div className="counter">
			<p className="couter__total">
				Completaste <br />
				{completedTodos} de {totalTodos} todos
			</p>
		</div>
    );
}

export { TodoCounter };
