import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, CardMedia, Card, Avatar, CardContent, Button  } from '@material-ui/core';
import UseStyles from '../../theme/UseStyles';
import { productoArray } from '../data/dataPrueba';
import { getProductos } from '../../actions/ProductoAction';

const Productos = (props) => {

    const [paginadorProductos, setPaginadorProductos] = useState({
        count : 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    useEffect(() => {
        const getListaProductos = async () => {
            const response = await getProductos();
            console.log(response);
            setPaginadorProductos(response.data);
        }
        getListaProductos();
    }, [] );

    const myArray = productoArray;
    
    const classes = UseStyles();

    const verProducto = (id) =>
    {
        props.history.push("/detalleProducto/" + id);
    };

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
                <Grid item lg={3} md={4} sm={6} xs={12} >
                    <Card>
                        <CardMedia image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" title= "Mi producto" className={classes.media} >
                            <Avatar variant="square" className={classes.price} >
                                {data.precio}€
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card} >
                                {data.Nombre}
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth onClick={()=>verProducto(data.Id)}>
                                Mas Detalles
                            </Button>
                        </CardContent>
                    </Card>
               </Grid>
               ))}
           </Grid>
        </Container>
    );
};

export default Productos;