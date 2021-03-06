import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getProducto } from '../../actions/ProductoAction';
import UseStyles from '../../theme/UseStyles';
import {addItem} from '../../actions/CarritoCompraAction';
import {UseStateValue} from '../../contexto/store';

const DetalleProducto = (props) => {
    const [{sesionCarritoCompra}, dispatch] = UseStateValue();
    const[cantidad, setCantidad] = useState(1);

    //Estructura del producto seleccionado desde la pagina inicial.
    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id: 0,
        nombre: "",
        descripcion: "",
        stock: 0,
        marcaId: 0,
        marcaNombre: "",
        categoriaId: 0,
        categoriaNombre: "",
        precio: 0.0,
        imagen: ""
    });

    //Obtener el producto por el id y actualizar los datos de productoSeleccionado
    useEffect(() =>{
        const id = props.match.params.id;
        const getProductoAsync = async () => {
            const response = await getProducto(id);
            setProductoSeleccionado(response.data);
        }
        getProductoAsync();
    }, [productoSeleccionado]);
    
    const classes = UseStyles();

    const agregarCarrito = async () =>
    {
        const item = {
            id: productoSeleccionado.id,
            producto : productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: cantidad,
            imagen : productoSeleccionado.imagen,
            marca: productoSeleccionado.marcaNombre,
            categoria: productoSeleccionado.categoriaNombre
        };

        await addItem(sesionCarritoCompra, item, dispatch);
        props.history.push("/carrito");
    }

    return (
        <Container className={classes.containermt} >
            <Typography variant="h4" className={classes.text_title} >
            {    productoSeleccionado.nombre }
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12} >
                    <Paper variant="outlined" square className={classes.paperImg} >
                        <CardMedia image={productoSeleccionado.imagen ? productoSeleccionado.imagen : "https://firebasestorage.googleapis.com/v0/b/ecomerce-d1495.appspot.com/o/images%2Fnodisponible.jpg-1634641609701?alt=media&token=239c22d5-7225-4ffb-ae11-873f8de1afc6"} 
                        title={ productoSeleccionado.descripcion }
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
                                            { productoSeleccionado.precio }
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
                                        <TextField 
                                         id="cantidad-producto"
                                         label="" 
                                         type="number" 
                                         value={cantidad} 
                                         onChange={event => setCantidad(event.target.value)}
                                         defaultValue={1}
                                         InputLabelProps={{
                                             shrink:true
                                         }}
                                          />
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
                                Precio: { productoSeleccionado.precio }
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                Unidades Disponibles: { productoSeleccionado.stock }
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                Marca: { productoSeleccionado.marcaNombre }
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                Temporada: { productoSeleccionado.categoriaNombre }
                            </Typography>
                        </Grid>
                        <Grid item md={6} >
                            <Typography className={classes.text_detalle} >
                                Descripcion:
                            </Typography>
                            <Typography className={classes.text_detalle} >
                                { productoSeleccionado.descripcion }
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;