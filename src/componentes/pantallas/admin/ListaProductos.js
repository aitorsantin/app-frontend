import { Button, Container, Grid, Icon, Table, TableContainer, TableHead, TableRow, TableCell, Typography, TableBody } from '@material-ui/core';
import React, {useState} from 'react';
import UseStyles from '../../../theme/UseStyles';
import { productoArray } from '../../data/dataPrueba';
import { getProducto } from '../../../actions/ProductoAction';
import  Pagination  from '@material-ui/lab/Pagination';

const ListaProductos = (props) => {
    
    const [requestProductos, setRequestProductos] = useState({
        pageIndex : 1,
        pageSize : 4,
        search : ''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data : []
    });

    const handleChange = (event, value) => {
        setRequestProductos((anterior) => ({ 
            ...anterior,
            pageIndex: value
        }));
    }

    useEffect (() => {
        const getListaProductos = async () => {
            const response = await getProducto(requestProductos);
            setPaginadorProductos(response.data);
        }

        getListaProductos();
    }, [requestProductos] );

       
    
    const classes = UseStyles();
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
                            <TableCell>Categoria</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginadorProductos.data.map((producto) => (
                        <TableRow key={producto.id}>
                            <TableCell>{producto.id}</TableCell>
                            <TableCell>{producto.nombre}</TableCell>
                            <TableCell>{producto.precio}</TableCell>
                            <TableCell>{producto.marcaNombre}</TableCell>
                            <TableCell>{producto.categoriaNombre}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={() => editaProducto(producto.id)} >
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
            <Pagination count={paginadorProductos.pageCount} oage={paginadorProductos.pageIndex} onChange={handleChange} >

            </Pagination>
        </Container>
    );
};

export default ListaProductos;