import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';

const EditarUsuario = () => {
    const classes = UseStyles();
    return (
        <Container className={classes.containermt} >
            <Grid container justify="center" >
                <Grid item lg={6} md={12} >
                    <Typography variant="h4" className={classes.text_title} >
                        Editar Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form} >
                        <TextField label="Nombre" variant="filled" value="Aitor Santin" fullWidth disabled className={classes.gridmb} />
                        <TextField label="Correo" variant="filled" value="aitor@gmail.com" fullWidth disabled />
                        <FormControl className={classes.checkbox} >
                            <FormControlLabel control={<Checkbox color="primary" />} label="Es Administrador" />
                        </FormControl>
                        <Button variant="contained" color="orimary" >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditarUsuario;