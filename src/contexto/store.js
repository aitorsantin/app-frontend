import React, {createContext, useContext, useReducer} from 'react'; 

//este objeto va a almacenar las variables de estado
export const stateContext = createContext();

//initialState variable global a la que queremos tener acceso

export const StateProvider = ( { reducer, initialState, children } ) => (
    //Todo los componentes podran acceder al a todo lo que entregue el StateContext.Provider
    //reducer es la funcion que permite modificar la variable
    <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
);

export const UseStateValue = () => useContext(stateContext); 