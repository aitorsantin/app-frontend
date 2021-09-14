import HttpCliente from '../servicios/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;    

export const registrarUsuario = usuario => {
    return new Promise((resolve, eject) =>{
        instancia.post("/api/usuario/registrar", usuario).then( response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}

export const loginUsuario = usuario => {
    return new Promise((resolve, eject) =>{
        instancia.post("api/usuario/login", usuario).then( response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}
//Obtener el usuario actual
export const getUsuario = () => {
    return new Promise((resolve, eject) =>{
        HttpCliente.get("api/usuario").then(response => {
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    })
}