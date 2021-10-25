import { Avatar, Card, Container, Grid, Icon, Typography, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import UseStyles from '../../theme/UseStyles';
import { Link } from 'react-router-dom';
import { loginUsuario } from '../../actions/UsuarioAction';
import {UseStateValue} from '../../contexto/store';

const clearUsuario = {
    email: '',
    password: ''
}

const Login = (props) => {
    const [{sesionUsuario}, dispatch] = UseStateValue();


    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const loginEventoUsuario = () => {
        
        
        loginUsuario(usuario, dispatch).then(response => {
            if(response.status === 200)
            {
                window.localStorage.setItem('token', response.data.token);
                console.log('login realizado correctamente', response.data);
                props.history.push('/');
            }else{
                dispatch({
                    type: "OPEN_SNACKBAR",
                    openMensaje: {
                      open: true,
                      mensaje: "El password o el email son incorrectos",
                    },
                  });
            }
        })
        //const respuesta = accesoUsuario(usuario);
        //if(!respuesta.status){
           //console.log("Email y Password incorrectos");
            //return;
        //}
        //setUsuario(clearUsuario);
        //console.log("Bienvenido", respuesta.miUsuario.nombre); 
    }

    const classes = UseStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={5} md={6}>   
                    <Card align="center" className={classes.card} >
                        <Avatar className={classes.avatar} > 
                            <Icon className={classes.icon} >person</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Ingrese su Usuario
                        </Typography>
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth 
                                    type="email" 
                                    name="email" 
                                    value={usuario.email}
                                    onChange={handleChange}
                                    />
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Password" 
                                    variant="outlined" 
                                    fullWidth 
                                    type="password"
                                    name="password"
                                    value={usuario.password}
                                    onChange={handleChange}
                                     />
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <Button 
                                    variant="contained" 
                                    fullWidth 
                                    color="primary"
                                    type="submit"
                                    onClick={loginEventoUsuario}
                                     >
                                        Introducir
                                </Button>
                            </Grid>
                        </Grid>
                            <Link to="/registrar" variant="body1" className={classes.link}>
                                ¿Aun no estas registrado? Registrate
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;