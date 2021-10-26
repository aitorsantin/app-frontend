import openSnackbarReducer from "./openSnackBarReducer"
import sesionCarritoCompraReducer from "./sesionCarritoCompraReducer"
import sesionUsuarioReducer from "./sesionUsuarioReducer"

//la funcion de index es almacenar todos los reducers en una sola funcion.
export const mainReducer = (  {sesionUsuario, sesionCarritoCompra, openSnackbar}, action  ) => {
    return {
        sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
        sesionCarritoCompra: sesionCarritoCompraReducer(sesionCarritoCompra, action),
        openSnackbar: openSnackbarReducer(openSnackbar, action)
    }
}
 