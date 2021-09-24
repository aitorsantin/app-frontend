import HttpCliente from '../servicios/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;    

export const getCarritoCompra =(dispatch, id) => {
    return new Promise((ressolve, eject) => {
        instancia.get(`/api/carritocompra?id=${id}`)
        .then(Response => {
            dispatch({
                type="CARRITO_SESION",
                id= Response.data.id,
                items = Response.data.items
            });
            ressolve(Response)
        })
        .catch(error =>{
            ressolve(error.Response);
        });
    }); 
}