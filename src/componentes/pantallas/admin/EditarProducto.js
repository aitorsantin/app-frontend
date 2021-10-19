import { Container, Grid, Typography, TextField, Avatar, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UseStyles from '../../../theme/UseStyles';
import ImageUploader from 'react-images-upload';
import { getProducto, actualizarProducto } from '../../../actions/ProductoAction';

//Props permite acceder a los parametros de la url
const EditarProducto = (props) => {

    const [producto, setProducto] = useState({
        id : 0,
        nombre : '',
        descripcion: '',
        stock : 0,
        marcaId : 0,
        categoriaId : 0,
        precio : 0,
        imagen: '',
        file : ""
    });

    const [marca, setMarca] = useState("");
    const [categoria, setCategoria] = useState("");

    //Estas funciones se lanzan cada vez que se selecciona un valor en el combobox
    const handleMarcaChange = (event) =>{
        //obtenemos el valor del combobox
        setMarca(event.target.value);
    };

    const handleCategoriaChange = (event) =>{
        setCategoria(event.target.value);
    };

    //Cada vez que se cambien el valor de las cajas de texto actualizaremos el objeto producto mediante la funcion setProducto  
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProducto( (prev) =>({
            ...prev,
            [name] : value
        }))
    }

    //Evento para subir imagenes
    const subirImagen = (imagenes) => {
        const foto = imagenes[0];
        setProducto( (prev) =>({
            ...prev,
            file : foto
        }))
    }

    //Cuando se cargue la pagina podremos obtener los datos de la url
    useEffect( () =>{
        //Una vez cargada la pagina obtenemos el id de la url
        const id = props.match.params.id;
        const getProductoAsync = async () =>{
            //llamamos a la funcion getProducto para que el servidor nos devuelva el producto
            const response = await getProducto(id);
            //llenamos el producto, la marca y la categoria
            setProducto(response.data);
            setCategoria(response.data.categoriaId);
            setMarca(response.data.marcaId);
        }
        getProductoAsync();
    }, []);

    const classes = UseStyles();    
    
    return (
        <Container className={classes.containermt} > 
            <Grid container justify="center"  >
                <Grid item sm={6} xs={12} >
                    <Typography variant="h4" className={classes.text_title} >
                        Edtar Producto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form} >
                        <TextField 
                        label="Nombre Producto" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={producto.nombre}
                        name = "nombre"
                        onChange={handleChange}
                        />
                        <TextField 
                        label="Precio" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={producto.precio}
                        name = "precio"
                        onChange={handleChange}
                        />
                        
                        <TextField 
                        label="Stock" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={producto.stock}
                        name = "stock"
                        onChange={handleChange}
                        />
                        <TextField 
                        label="Descripcion" 
                        variant="outlined" 
                        fullWidth
                        multiline
                        rows={4} 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={producto.descripcion}
                        name = "descripcion"
                        onChange={handleChange}
                        />
                        <Grid container spacing={2} >
                            <Grid item sm={6} xs={12} >
                                <ImageUploader
                                withIcon={true}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
                                maxFileSize={5242880}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <Avatar
                                variant="square"
                                className={classes.avatarProducto} 
                                src="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg"
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
        );
    };

export default EditarProducto;