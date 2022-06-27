import React from "react";
import ReactDOM from 'react-dom';
// CSS
import './Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="modal-container">
                {children}
            </div>
        </div>, // componente
        document.getElementById('modal') // contenedor
    );
}

export { Modal }