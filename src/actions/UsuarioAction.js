import HttpCliente from '../servicios/HttpCliente';

export const registrarUsuario = usuario => {
    return new Promise((resolve, eject) =>{
        HttpCliente.post("/api/usuario/registrar", usuario).then( response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error);
        })
    });
}