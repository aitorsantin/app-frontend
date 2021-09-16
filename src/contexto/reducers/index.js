import sesionUsuarioReducer from "./sesionUsuarioReducer"

//la funcion de index es almacenar todos los reducers en una sola funcion.
export const mainReducer = ( {sesionUsuario}, action) => {
    return {
        sesionUsuario : sesionUsuarioReducer(sesionUsuario, action)
    }
}
 