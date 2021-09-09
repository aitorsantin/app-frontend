import React, { useState } from 'react';
import { Container, Grid, Card, Typography, Avatar, Icon, TextField, Button    } from '@material-ui/core';
import UseStyles from '../../theme/UseStyles';
import { Link } from 'react-router-dom';

const clearUsuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    username: ''
}

const RegistrarUsuario = () => {
    const [ usuario, setUsuario ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        username: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name]: value
        }))
    };

    const guardarUsuario = () => {
        //const insertarData = nuevoUsuario(usuario);
        console.log("Mi usuario es", usuario);
        setUsuario(clearUsuario);
        /*registrarUsuario(usuario).then(response => {
            console.log('el objeto response que envia el servidor', response);
            //Guardamos el valor del parametro token.
            window.localStorage.setItem('token', response.data.token);
        });*/

    }

    const classes = UseStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justifyContent="center">
                <Grid item lg={6} md={8}>
                    <Card className={classes.card} align="center" >
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>
                                person_add
                            </Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Registro de usuario
                        </Typography>
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()} >
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className={classes.gridmb} >
                                    <TextField label="nombre" name="nombre" value={usuario.nombre} onChange={handleChange} variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb} >
                                    <TextField label="Apellidos" name="apellido" value={usuario.apellido} onChange={handleChange} variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <TextField label="Username" name="username" value={usuario.username} onChange={handleChange} variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <TextField label="Email" name="email" value={usuario.email} onChange={handleChange} type="email" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <TextField label="Password" name="password" value={usuario.password} onChange={handleChange} type="password" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <Button variant="contained" fullWidth color="primary" type="submit" onClick={guardarUsuario} >
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link to="/login" variant="body1" className={classes.link}>
                                ¿Ya tienes una cuenta? Inicia Sesion
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegistrarUsuario;