import { Container, Grid, Typography, TableContainer, Table, TableBody, Paper, Button,  TableRow, TableCell, CardMedia, Divider  } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../theme/UseStyles';

const OrdenCompra = (props) => {
    const classes = UseStyles()
    const {id} = props.match.params;
    const mensajeEnvio = "No entregado";
    const mensajePago = "Pagado 12/04/2021";
    return (
        <Container className={classes.containermt} > 
            <Typography variant="h5" className={classes.text_title} >
                Orden de compra: {id.toUpperCase()}
            </Typography>
            <Grid container spacing={2} className={classes.paperPadding} >
                <Grid item md={8} xs={12} >
                    <Typography variant="h6" className={classes.text_title} >
                        Envio
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio} >
                        Nombre y Apellidos: Aitor Santin Mariño
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio} >
                        Email: santinaitor@gmail.com
                    </Typography>
                    <Typography variant="body2" className={classes.text_envio} >
                        Direccion: Calle 2, Cali, Colombia
                    </Typography>
                    <div className={classes.alertNotDelivered} >
                        <Typography variant="body2" className={classes.text_title}>
                            {mensajeEnvio}
                        </Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Typography variant="h6" className={classes.text_title} >
                        Metodo de Pago
                    </Typography>
                    <Typography  >
                        Metodo: Paypal
                    </Typography>
                    <div className={classes.alertDelivered} >
                        <Typography variant="body2" className={classes.text_title}>
                            {mensajePago}
                        </Typography>
                    </div>
                    <Divider className={classes.divider} />
                    <Typography variant="h6" className={classes.text_title} >
                        Productos
                    </Typography>
                    <TableContainer className={classes.gridmb} >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <CardMedia className={classes.imgProductoPC} title="Imagen producto compra" image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" />
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle} >
                                            Abrigo Vaxi moda 2020
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography className={classes.text_detalle} >
                                            2 x 25,00€ = 50,00€
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={4} xs={12} >
                    <TableContainer component={Paper} square >
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={2} >
                                        <Typography className={classes.text_title} variant="h6" >
                                            Resumen del Pedido
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            Productos
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            50,00€
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            Envio
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            2€
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            IVA
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            10,5€
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            Total
                                        </Typography>
                                    </TableCell>
                                    <TableCell >
                                        <Typography className={classes.text_title} >
                                            62,5€
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} >
                                        {/* Boton para el usuario */}
                                        {/*
                                        <Button variant="contained" color="primary" fullWidth className={classes.gridmb} >
                                            PayPal
                                        </Button>
                                        <Button variant="contained" size="large" fullWidth > 
                                            Tarjeta de Credito o Devito
                                        </Button>
                                        */}
                                        {/* Boton para el admin */}
                                        <Button variant="contained" color="primary" size="large" fullWidth >
                                            Marcar como entregado
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>   
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrdenCompra;