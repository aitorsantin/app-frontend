import { Avatar, Card, Container, Grid, Icon, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../theme/UseStyles';
import { Link } from 'react-router-dom';


const Login = () => {
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
                        <form className={classes.form}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth 
                                    type="email" 
                                    name="email" 
                                    />
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Password" 
                                    variant="outlined" 
                                    fullWidth 
                                    type="password"
                                    name="password"
                                     />
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}>
                                <Button 
                                    variant="contained" 
                                    fullWidth 
                                    color="primary"
                                    type="submit"
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