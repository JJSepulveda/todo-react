// React
import React from "react";


function CreateTodoButton(props) {
    // Functions
    const onClickButton = (msg) => {
        alert(msg)
    }

    return(
        <button
            onClick={() => onClickButton('Aqui se debe abrir un modal')}>
            +
        </button>
    );
}

export { CreateTodoButton };
