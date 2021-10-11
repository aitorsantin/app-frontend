import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import useStyles from '../../theme/UseStyles';
import { getProductos } from '../../actions/ProductoAction';
import { productoArray } from '../data/dataPrueba';
import { Pagination } from '@material-ui/lab';
import { addItem } from '../../actions/CarritoCompraAction';
import {UseStateValue} from '../../contexto/store';


const Productos = (props) => {

    //Funcion generada para añadir elementos al carrito de la compra
    const [{sesionCarritoCompra}, dispatch] = UseStateValue();

    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 2,
        search: ''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count : 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    /*El value es el numero de la pagina para el paginador*/
    const handleChange = (event, value) =>{
        setRequestProductos( (anterior) => ({
            ...anterior,
            pageIndex: value
        }));

    }

    useEffect(() => {
        const getListaProductos = async () => {
            
        const response = await getProductos(requestProductos);
        console.log(response);
        setPaginadorProductos(response.data);
           
        }
        getListaProductos();
    }, [requestProductos]);


    const miArray = productoArray;
    const verProducto = async (item) => {
        await addItem(sesionCarritoCompra, item , dispatch)
        
        //props.history.push("/detalleProducto/" + id);
    }
    
    const classes = useStyles();

    if(!paginadorProductos.data)
    {
        return null;
    }
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                { paginadorProductos.data.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
                    <Card>
                        <CardMedia
                        className={classes.media}
                        image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg"
                        title="mi producto"
                        >
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.nombre}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => verProducto(data)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange} />
        </Container>
    );
};

export default Productos;