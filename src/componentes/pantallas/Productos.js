import { Container, Grid, Typography, CardMedia, Card, Avatar, CardContent, Button  } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getProductos } from '../../actions/ProductoAction';
import UseStyles from '../../theme/UseStyles';
import { productoArray } from '../data/dataPrueba';
import { Pagination } from '@material-ui/lab';

const Productos = (props) => {

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

    const handleChange = (event, value) => {
        setRequestProductos( (anterior) => ({
            ...anterior,
            pageIndex : value
        }) );
    }

    useEffect(() => {
        const getListaProductos = async () => {
            
        const response = await getProductos(requestProductos);
        console.log(response);
        setPaginadorProductos(response.data);
           
        }
        getListaProductos();
    }, [requestProductos]);

    const classes = UseStyles();
    const verProducto = (id) =>
    {
        props.history.push("/detalleProducto/" + id);
    }
    const myArray = productoArray;

    if(!paginadorProductos.data)
    {
        return null;
    }

    return (
       <Container className={classes.containermt} >
           <Typography variant="h4" className={classes.text_title} >
                Productos
           </Typography>
           <Grid container spacing={4}>
               {paginadorProductos.data.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" title= "Mi producto" className={classes.media} >
                            <Avatar variant="square" className={classes.price} >
                                {data.precio}€
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card} >
                                {data.nombre}
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth onClick={()=>verProducto(data.id)}>
                                Mas Detalles
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                  ))}
           </Grid>
            <Pagination count={paginadorProductos.pageCount} pageIndex={paginadorProductos.pageIndex}
            onChange={handleChange} />
       </Container>
    );
};

export default Productos;