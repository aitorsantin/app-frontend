import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../theme/UseStyles';

const DetalleProducto = (props) => {
    const classes = UseStyles();

    const agregarCarrito = () =>
    {
        props.history.push("/carrito");
    }
    return (
        <Container className={classes.containermt} >
            <Typography variant="h4" className={classes.text_title} >
                Abrigo Vaxi
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12} >
                    <Paper variant="outlined" square className={classes.paperImg} >
                        <CardMedia image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" 
                        title="Mi producto" 
                        className={classes.mediaDetalle} >
                        </CardMedia>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12} >
                    <TableContainer component={Paper} variant="outlined" >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            Precio
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            25.99
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">
                                            Cantidad
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField size="small" select variant="outlined" value={1} >
                                            <MenuItem value={1} >
                                                1
                                            </MenuItem>
                                            <MenuItem value={2} >
                                                2
                                            </MenuItem>
                                            <MenuItem value={3} >
                                                3
                                            </MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button variant="contained" color="primary" size="large" onClick={agregarCarrito} >
                                            Agregar a Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12} >
                    <Grid container spacing={2}>
                        <Grid item md={6} >
                            <Typography className={classes.text_detalle} >
                                Precio: 25.99€
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                Unidades Disponibles: 15
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                Marca: Vaxi
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item md={6} >
                            <Typography className={classes.text_detalle} >
                                Descripcion:
                            </Typography>
                            <Typography className={classes.text_detalle} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;