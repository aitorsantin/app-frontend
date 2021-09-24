import HttpCliente from '../servicios/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;    

export const getCarritoCompra = (dispatch, id) => {
    return new Promise( (resolve, eject) => {

        instancia.get(`/api/carritocompra?id=${id}`)
        .then(response => {

            dispatch({
                type: "CARRITO_SESION",
                id: response.data.id,
                items: response.data.items
            });
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        });
    });

}