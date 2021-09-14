import HttpCliente from '../servicios/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;  

export const getProductos = (request) =>
{
    /*Las promesas sirven para esperar la respuesta del servidor antes de mostrar la pagina*/
    return new Promise( (resolve, eject) => {
        instancia.get(`/api/productos/listproductosspec?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`).
        then(response => {
            resolve(response);
        });
    })
};

/*
    response 
        count : 5
        pageIndex: 1
        pageSize: 5
        pageCount: 3
        data: [
            {....},
            {....}
        ]
*/