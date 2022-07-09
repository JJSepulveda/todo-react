/*
TodoCounter componet.
*/
// React
import React from "react";

// CSS
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos, loading}) {
    return(
        <div className={`counter ${loading && 'counter--loading'}`}>
			<p className="couter__total">
				Completaste <br />
				{completedTodos} de {totalTodos} todos
			</p>
		</div>
    );
}

export { TodoCounter };
