import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

//un interceptor es un metodo que permite incluir dentro de los request que le envias al servidor
//cierta data adicional que puede incluirse dentro del header o dentro del body
//Vamos a obtener el token para incluirlo en el request
axios.interceptors.request.use((config) => {
    const token_seguridad = window.localStorage.getItem('token');
    //Si el token existe quiero que se agregue a todos los request 
    if(token_seguridad)
    {
        config.headers.Authorization = 'Bearer' + token_seguridad;
        return config;
    }
}, error => {
    return Promise.reject(error);
});

const requestGenerico = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url, body),
    put: (url, body) => axios.put(url, body),
    delete: (url) => axios.delete(url)
};

export default requestGenerico;