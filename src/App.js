import { ThemeProvider } from '@material-ui/core'
import React, { useEffect, useState } from "react";
import MenuAppBar from './componentes/Navegacion/MenuAppBar';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './componentes/seguridad/Login';
import Productos from './componentes/pantallas/Productos';
import DetalleProducto from './componentes/pantallas/DetalleProducto';
import carritoCompras from './componentes/pantallas/CarritoCompras';
import ProcesoCompra from './componentes/pantallas/ProcesoCompra';
import OrdenCompra from './componentes/pantallas/OrdenCompra';
import Perfil from './componentes/seguridad/Perfil';
import Usuarios from './componentes/pantallas/admin/Usuario';
import EditarUsuario from './componentes/pantallas/admin/EditarUsuario';
import ListaProductos from './componentes/pantallas/admin/ListaProductos';
import AgregarProducto from './componentes/pantallas/admin/AgregarProducto';
import EditarProducto from './componentes/pantallas/admin/EditarProducto';
import ListaPedidos from './componentes/pantallas/admin/ListaPedidos';  
import { getUsuario } from './actions/UsuarioAction';
import { UseStateValue } from './contexto/store';
import {v4 as uuidv4} from 'uuid';
import {getCarritoCompra} from './actions/CarritoCompraAction';

function App() {

  const [{sesionUsuario}, dispatch] = UseStateValue();

  const [servidorRespuesta, setServidorRespuesta] = useState(false);

  //Metodo que se ejecuta tras cargar el html
  useEffect( async () => {

    let carritoCompraId = window.localStorage.getItem('carrito');

    if(!carritoCompraId)
    {
      carritoCompraId = uuidv4();
      window.localStorage.setItem('carrito', carritoCompraId);
    }

    if(!servidorRespuesta)
    {
      await getUsuario(dispatch);
      await getCarritoCompra(dispatch, carritoCompraId);
      
      setServidorRespuesta(true);
    }
  }, [servidorRespuesta]);

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <MenuAppBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registrar" component={RegistrarUsuario} />
        <Route exact path="/" component={Productos} />
        <Route exact path="/detalleProducto/:id" component={DetalleProducto} />
        <Route exact path="/carrito" component={carritoCompras} />
        <Route exact path="/procesoCompra" component={ProcesoCompra} />
        <Route exact path="/ordenCompra/:id" component={OrdenCompra} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/admin/usuarios" component={Usuarios} />
        <Route exact path="/admin/usuario/:id" component={EditarUsuario} />
        <Route exact path="/admin/listaProductos" component={ListaProductos} />
        <Route exact path="/admin/agregarProducto" component={AgregarProducto} />
        <Route exact path="/admin/editarProducto/:id" component={EditarProducto} />
        <Route exact path="/admin/listaPedidos" component={ListaPedidos} />
      </Switch>
    </Router>
  </ThemeProvider>
      
  );
}

export default App;
