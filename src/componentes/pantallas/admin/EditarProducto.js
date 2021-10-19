import { Container, Grid, Typography, TextField, Avatar, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UseStyles from '../../../theme/UseStyles';
import ImageUploader from 'react-images-upload';
import { getProducto, actualizarProducto } from '../../../actions/ProductoAction';
import {v4 as uuidv4} from 'uuid';

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

    const guardarProducto = async () =>{
        producto.categoriaId = categoria;
        producto.marcaId = marca;
        const id = props.match.params.id;
        var resultado = await actualizarProducto(id, producto);
        console.log(resultado);
        props.history.push('/admin/listaProductos');
    }

    //Esta funcion genera un id automaticamente
    const keyImage = uuidv4();

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
            console.log(response.data);
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
                        <FormControl className={classes.formControl}>
                            <InputLabel id="marca-select-label">
                                Marca
                            </InputLabel>
                            <Select 
                            labelId="marca-select-label"
                            id="marca-select"
                            value={marca}
                            onChange={handleMarcaChange}>
                                <MenuItem value={1}>Nike</MenuItem>
                                <MenuItem value={2}>Addidas</MenuItem>
                                <MenuItem value={3}>Maldiva</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="categoria-select-label">Categoria</InputLabel>
                            <Select 
                            labelId="categoria-select-label"
                            id="categoria-select"
                            value={categoria}
                            onChange={handleCategoriaChange}>
                                <MenuItem value={1}>Verano</MenuItem>
                                <MenuItem value={2}>Invierno</MenuItem>
                                <MenuItem value={3}>Primavera</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid container spacing={2} >
                            <Grid item sm={6} xs={12} >
                                <ImageUploader
                                singleImage={true}
                                key={keyImage}
                                withIcon={true}
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
                                maxFileSize={5242880}
                                onChange={subirImagen}
                                />
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <Avatar
                                variant="square"
                                className={classes.avatarProducto} 
                                src={producto.imagen ? producto.imagen : "https://firebasestorage.googleapis.com/v0/b/ecomerce-d1495.appspot.com/o/images%2Fnodisponible.jpg-1634641609701?alt=media&token=239c22d5-7225-4ffb-ae11-873f8de1afc6"}
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" onClick={guardarProducto} >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
        );
    };

export default EditarProducto;