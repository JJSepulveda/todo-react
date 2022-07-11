import React from 'react'

import { withStorageListener } from "./withStorageListener";

import "./ChangeAlert.css"

const ChangeAlert = ({show, toggleShow}) => {
    if (show) {
        return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert__container'>
                    <p className='ChangeAlert__p'>Hubo cambios, Actualiza la pagina para continuar:</p>
                    <button className='btn--primary' onClick={toggleShow}>
                        Actualizar
                    </button>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
