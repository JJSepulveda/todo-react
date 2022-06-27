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
        <button className="btn btn--large btn--rounded create-button"
            onClick={onClickButton}>
            <svg 
				xmlns="http://www.w3.org/2000/svg" 
				width="24" 
				height="24" 
				className="icon">
					<path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
			</svg>
        </button>
    );
}

export { CreateTodoButton };
