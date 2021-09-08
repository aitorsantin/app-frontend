import { ThemeProvider } from '@material-ui/core'
import React from "react";
import MenuAppBar from './componentes/Navegacion/MenuAppBar';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import theme from './theme/theme';


function App() {
  return (
      <ThemeProvider theme={theme} >
        <MenuAppBar />
        <RegistrarUsuario />
      </ThemeProvider>
      
  );
}

export default App;
