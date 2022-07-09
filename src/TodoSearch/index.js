import React from "react";

import "./TodoSearch.css"

function TodoSearch({ searchValue, setSearchValue, loading }) {

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
                onChange={onSearchValueChange}
                disabled={loading} />
        </div>
    );
}

export { TodoSearch };
