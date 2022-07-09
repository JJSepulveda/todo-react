import React from "react";

import "./TodoList.css"

function TodoList(props) {
    return(
        <section className="todo-section">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}
            {(props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
            <div>
                { props.render } 
            </div>
            {/* En caso de que quiera enviar los componentes por la propieda children. */}
            <div>
                { props.children } 
            </div>
        </section>
    );
}

export { TodoList };