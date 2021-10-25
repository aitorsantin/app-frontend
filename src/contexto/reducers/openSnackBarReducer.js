//Este reducer se utiliza para mostrar un toast con los mensajes de error
const initialState = {
    open: false,
    mensaje: ""
    
}

const openSnackBarReducer =(state = initialState, action) => {
    switch(action.type)
    {
        case "OPEN SNACKBAR":
            return{
                ...state,
                open: action.openMensaje.open,
                mensaje: action.openMensaje.mensaje
            };
        default:
            return state;
    }
}

export default openSnackBarReducer;