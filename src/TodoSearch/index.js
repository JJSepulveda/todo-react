import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { 
        searchValue, 
        setSearchValue 
    } = React.useContext(TodoContext)

    // event es una variable de javascript que
    // almacena lo que hace el usuario.
    const onSearchValueChange = (event) => {
        // obtener el valor que se ingreso
        const value = event.target.value
        console.log(value)
        setSearchValue(value);
    }

    return(
        <input 
            placeholder='hola'
            value={searchValue}
            onChange={onSearchValueChange} />
    );
}

export { TodoSearch };
