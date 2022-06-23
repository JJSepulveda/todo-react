// React
import React from "react";

// Css
import "./CreateTodoButton.css"


function CreateTodoButton(props) {
    // Functions
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return(
        <button className="create-button"
            onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton };
