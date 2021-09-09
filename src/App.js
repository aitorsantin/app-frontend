import { ThemeProvider } from '@material-ui/core'
import React from "react";
import MenuAppBar from './componentes/Navegacion/MenuAppBar';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './componentes/seguridad/Login';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <MenuAppBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registrar" component={RegistrarUsuario} />
      </Switch>
    </Router>
  </ThemeProvider>
      
  );
}

export default App;
