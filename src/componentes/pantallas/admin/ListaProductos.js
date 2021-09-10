import { Button, Container, Grid, Icon, Table, TableContainer, TableHead, TableRow, TableCell, Typography, TableBody } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';
import { productoArray } from '../../data/dataPrueba';

const ListaProductos = (props) => {
    const classes = UseStyles();
    const productos = productoArray;
    const agregarProducto = () =>
    {
        props.history.push("/admin/agregarProducto");
    }
    const editaProducto = (id) =>
    {
        props.history.push("/admin/editarProducto/" + id);
    }


    return (
        <Container>
            <Grid container >
                <Grid item lg={6} xs={12} >
                    <Typography variant="h4" className={classes.text_title} >
                        Productos
                    </Typography>
                </Grid>
                <Grid item lg={6} xs={12} >
                    <Button variant="contained" color="inherit" className={classes.buttonAgregar} onClick={agregarProducto} >
                        <Icon>add</Icon>
                        Agregar Producto
                    </Button>
                </Grid> 
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Marca</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map((producto) => (
                        <TableRow key={producto.key}>
                            <TableCell>{producto.key}</TableCell>
                            <TableCell>{producto.titulo}</TableCell>
                            <TableCell>{producto.precio}</TableCell>
                            <TableCell>{producto.marca}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => editaProducto(producto.key)} >
                                    <Icon>
                                        edit
                                    </Icon>
                                </Button>
                                <Button variant="contained" color="secondary" >
                                    <Icon>
                                        delete
                                    </Icon>
                                </Button>
                            </TableCell>
                        </TableRow> 
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaProductos;