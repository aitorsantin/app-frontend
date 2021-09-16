export const initialState = {
    usuario: {
        nombre: "",
        apellido: "",
        email: "",
        username: "",
        imagen: ""
    },
    //Flag para comprobar si el usuario ha iniciado sesion o no
    autenticado : false
}

//Si se inicia sesion se va a llenar el objeto usuario con los datos que nos devuelve el servidor, y tambien nos va a dar 
//un nuevo autenticador.
const sesionUsuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INICIAR_SESION":
            return {
                ...state,
                usuario : action.sesion,
                autenticado : action.autenticado
            };
        case "SALIR_SESION":
            return {
                ...state,
                usuario : action.nuevoUsuario,
                autenticado : action.autenticado
            };
        case "ACTUALIZAR_USUARIO":
            return {
                ...state,
                usuario : action.nuevoUsuario,
                autenticado : action.autenticado
            };
        default:
            return state;
    }
}

export default sesionUsuarioReducer;