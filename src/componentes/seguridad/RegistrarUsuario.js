import React from 'react';
import { Container, Grid, Card, Typography, Avatar, Icon, TextField, Button, Link    } from '@material-ui/core';
import UseStyles from '../../theme/UseStyles';

const RegistrarUsuario = () => {
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
                        <form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12} className={classes.gridmb} >
                                    <TextField label="nombre" name="nombre" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={6} xs={12} className={classes.gridmb} >
                                    <TextField label="Apellidos" name="apellido" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <TextField label="Username" name="username" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <TextField label="Email" name="email" type="email" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <TextField label="Password" name="password" type="password" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item md={12} xs={12} className={classes.gridmb} >
                                    <Button variant="contained" fullWidth color="primary" type="submit" >
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