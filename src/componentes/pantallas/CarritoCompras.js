import React from 'react';
import UseStyles from '../../theme/UseStyles';
import { Container, Typography, Grid, TableContainer, Table, TableBody, TableRow, TableCell, CardMedia, TextField, MenuItem, IconButton, Icon, Paper, Divider, Button, Select   } from '@material-ui/core';
import { productoArray } from '../data/dataPrueba';
import { UseStateValue } from '../../contexto/store';

const carritoCompras = (props) => {

    const [{sesionCarritoCompra}, dispatch] = UseStateValue();

    console.log('sesionCarritoCompras', sesionCarritoCompra);

    const myArray = sesionCarritoCompra ? sesionCarritoCompra.items : []; /*productoArray;*/

    const realizarCompra = () =>
    {
        props.history.push("/procesoCompra");
    }

    const classes = UseStyles();

    return (
        <Container className={classes.containermt} >
            <Typography variant="h4" className={classes.text_title} >
                Carrito de Compras
            </Typography>
            <Grid container spacing={2}>
                <Grid item lg={9} md={8} sm={12} xs={12} >
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {myArray.map(item => (
                                    <TableRow key={item.id} >
                                        <TableCell>
                                            <CardMedia 
                                            className={classes.imgProductoCC} 
                                            image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" 
                                            title="Imagen en Carrito" 
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                {item.producto}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                {item.precio}€
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                {item.cantidad}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>delete</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={3} md={4} sm={6} xs={12} >
                    <Paper variant="outlined" square className={classes.paperPadding} >
                        <Typography variant="h6" className={classes.text_title} >
                            Subtotal ({myArray.length}) Productos
                        </Typography>
                        <Typography className={classes.text_title} >
                            143.46€
                        </Typography>
                        <Divider className={classes.gridmb} />
                        <Button variant="contained" color="primary" size="large" onClick={realizarCompra} >
                            Realizar Compra
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default carritoCompras;