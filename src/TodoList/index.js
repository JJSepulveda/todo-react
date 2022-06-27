import React from "react";

import "./TodoList.css"

function TodoList(props) {
    return(
        <section className="todo-section">
            <div>
                {props.children}
            </div>
        </section>
    );
}

export { TodoList };