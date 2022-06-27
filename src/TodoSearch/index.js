import React from "react";
import { TodoContext } from "../TodoContext";

import "./TodoSearch.css"

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
        <div className="search">
            <input 
                placeholder='¿Qué buscas?'
                value={searchValue}
                className="search__input"
                onChange={onSearchValueChange} />
        </div>
    );
}

export { TodoSearch };
