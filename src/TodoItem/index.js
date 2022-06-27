import React from "react";
import "./TodoItem.css"

function TodoItem(props) {

    return(
/*         <li>
            <span
                onClick={props.onComplete}>
                C
            </span>
            <p>
                { props.text }
            </p>
            <span
                onClick={props.onDelete}>
                X
            </span>
        </li> */
        <div className="cardv">
            <div className="cardv__left">
                <div className="cardv__group">
                    <button 
                        className="btn"
                        onClick={props.onComplete} >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24"
                            className={`check-icon ${props.completed && 'checked'}`}>
                                <path 
                                    d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                            </svg>
                    </button>
                    <button 
                        className="btn"
                        onClick={props.onDelete}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24"
                            className="trash-icon">
                                <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                    </button>
                </div>
            </div>
            <div className={`cardv__content ${props.completed && 'cardv__content--completed'}`}>
                <p>
                    {props.text}
                    <br />
                    <span className="cardv__date">({props.time})</span>
                </p>
            </div>
        </div>
    );
}

export { TodoItem };