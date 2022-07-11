/*
Custom hook
*/
import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItems] = React.useState(initialValue);
    const [sincronizedItem, setSincronizeditem] = React.useState(true)

    React.useEffect(() => {
        // usamos setTimeout para simular una API
        setTimeout(() => {
        try{
            const localStorageTodos = localStorage.getItem(itemName);
            // Parsear los datos
            let parsedItems;
            // verificar si es un nuevo usuario o si ya tiene todos 
            if (!localStorageTodos) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItems = [];
            }
            else {
                parsedItems = JSON.parse(localStorageTodos);
            }

            setItems(parsedItems);
            setLoading(false);

            setSincronizeditem(true)
        }
        catch (error) {
            setError(error)
        }
        }, 1000);
    }, [sincronizedItem]);

    const saveItem = (newTodos) => {
        try {
            // Guardamos en el navegador
            const stringifiedTodos = JSON.stringify(newTodos)
            localStorage.setItem(itemName, stringifiedTodos)
            // Aplicamos el re-render
            setItems(newTodos)
        }
        catch (error) {
            setError(error)
        }
    }

    const sincronizeItem = () => {
        setLoading(true)
        setSincronizeditem(false)
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    };
}


export {useLocalStorage};
