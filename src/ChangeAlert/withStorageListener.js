import React from "react";

import { STORAGE_NAME } from "../App/useTodos" 

function withStorageListener(WrapperComponent) {
    return function WrapperComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        // Un evento de storage ocurre cuando se modifica el storage del navegador
        window.addEventListener('storage', (change) => {
            // Si hay un cambio en nuestros todos
            if (change.key === STORAGE_NAME) {
                console.log('Hubo cambios en TODOS_V1')
                setStorageChange(true)
            }
        });

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return (
            <WrapperComponent 
                show={storageChange} 
                toggleShow={toggleShow}
            />
        );
    }
}

export { withStorageListener };
