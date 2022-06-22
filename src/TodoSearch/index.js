import React from "react";

function TodoSearch({searchValue, setSearchValue}) {
    // const [searchValue, setSearchValue] = React.useState('');

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
