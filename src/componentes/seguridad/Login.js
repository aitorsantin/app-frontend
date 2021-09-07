import { Avatar, Card, Container, Grid, Icon, Typography, TextField, Button, Link, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    containermt : {
        marginTop: 30
    },
    card : {
        padding: 30
    },
    avatar : {
        backgroundColor: '#3a0ca3',
        width: 80,
        height: 80
    },
    icon: {
        fontSize: 60
    },
    form : {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb : {
        marginBottom: 20
    },
    link : {
        marginTop: 8
    }
});

const Login = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Grid container justify="center">
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