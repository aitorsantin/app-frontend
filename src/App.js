import { ThemeProvider } from '@material-ui/core'
import React from "react";
import Login from "./componentes/seguridad/Login";
import theme from './theme/theme';


function App() {
  return (
      <ThemeProvider theme={theme} >
        <Login />
      </ThemeProvider>
      
  );
}

export default App;
