import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

//Un intercertor nos permitira incluir el token
axios.interceptors.request.use((config) => {
    //almacenamos en la variable el token que guardamos en localStorage en el navegador
    const token_seguridad = window.localStorage.getItem('token');

    if(token_seguridad)
    {
        //Si el token existe lo agregamos a todos los headers de todos los request que envie el servidor
        config.headers.Authorization = 'Bearer ' + token_seguridad;
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