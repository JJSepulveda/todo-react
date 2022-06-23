import React from "react";
import ReactDOM from 'react-dom';
// CSS
import './Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>, // componente
        document.getElementById('modal') // contenedor
    );
}

export { Modal }