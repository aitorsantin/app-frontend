import HttpCliente from '../servicios/HttpCliente';
import axios from 'axios';
import { uploadImage } from '../firebase';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;  

/*Insertar productos*/ 
export const registrarProducto = async (producto) =>{

    //Tenemos que pasarle al objeto producto que va a almacenarse en la base de datos la url de la imagen
    //Esta nos la va a proporcionar firebase
    const urlImage = await uploadImage(producto.file);
    producto.imagen = urlImage;

    return new Promise((resolve, eject) => {
        HttpCliente.post("api/productos/", producto)
        .then(response =>{
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        });
    })
};

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

export const getProducto = id =>{
    return new Promise( (resolve, eject) => {
        instancia.get(`/api/Productos/ProductoSpec/${id}`).
        then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        });
    });
}

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