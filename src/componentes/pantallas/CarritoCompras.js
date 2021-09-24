import React from 'react';
import UseStyles from '../../theme/UseStyles';
import { Container, Typography, Grid, TableContainer, Table, TableBody, TableRow, TableCell, CardMedia, TextField, MenuItem, IconButton, Icon, Paper, Divider, Button   } from '@material-ui/core';
import { productoArray } from '../data/dataPrueba';
import { useStateValue } from '../../contexto/store';

const carritoCompras = (props) => {

    onst [{sesionCarritoCompra}, dispatch] = useStateValueValue();

    console.log('sesionCarritoCompras', sesionCarritoCompra);

    const classes = UseStyles();
    const myArray = productoArray;
    const realizarCompra = () =>
    {
        props.history.push("/procesoCompra");
    }

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
                                {myArray.map(producto => (
                                    <TableRow key={producto.key} >
                                        <TableCell>
                                            <CardMedia className={classes.imgProductoCC} image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" title="Imagen en Carrito" >

                                            </CardMedia>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                {producto.titulo}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                {producto.precio}€
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <TextField select variant="outlined" size="small" value={1} >
                                                <MenuItem value={1}>
                                                    1
                                                </MenuItem>
                                                <MenuItem value={2}>
                                                    2
                                                </MenuItem>
                                                <MenuItem value={3}>
                                                    3
                                                </MenuItem>
                                                <MenuItem value={4}>
                                                    4
                                                </MenuItem>
                                                <MenuItem value={5}>
                                                    5
                                                </MenuItem>
                                            </TextField>
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