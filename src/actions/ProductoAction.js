import HttpCliente from '../servicios/HttpCliente';

export const getProductos = (request) =>
{
    /*Las promesas sirven para esperar la respuesta del servidor antes de mostrar la pagina*/
    return new Promise( (resolve, eject) => {
        HttpCliente.get(`/api/productos/listproductosspec?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`).
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