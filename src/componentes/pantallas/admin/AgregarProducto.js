import { Container, Grid, Typography, TextField, Avatar, Button, Select, InputLabel, FormControl, MenuItem } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';
import ImageUploader from 'react-images-upload';
import { registrarProducto } from '../../../actions/ProductoAction';
import {v4 as uuidv4} from 'uuid';

const AgregarProducto = () => {
    const [producto, setProducto] = React.useState({
        id : 0,
        nombre : '',
        descripcion : '',
        stock : 0,
        marcaId: 0,
        categoriaId : 0,
        precio: 0.0,
        imagen : '' ,
        file : '',

    });

    const [categoria, setCategoria] = React.useState("");
    const [marca, setMarca] = React.useState("");

    const handeCategoriaChange = (event) => {
        /*Obtenemos el valor seleccionado en el combobox*/
        setCategoria(event.target.value);
    }

    const handeMarcaChange = (event) => {
        /*Obtenemos el valor seleccionado en el combobox*/
        setMarca(event.target.value);
    }

    const guardarProducto = async () => {

        producto.categoriaId = categoria;
        producto.marcaId = marca;

        //Llamamos a la funcion regisrarProducto de ProductoAction para pasarle el producto a registrar
        const resultado = await registrarProducto(producto)
        console.log('resultado de guardar producto', resultado);
    }

    //esta funcion actualiza la informacion del objeto producto cada vez que se realice un cambio en la caja de texto
    // la variable (e) es la representacion de la caja de texto
    const handleChange = (e) =>{
        //para obtener el valor y el nombre de la caja de texto utilizamos la propiedad target
        const {name, value} = e.target;
        //prev es el objeto producto antes de realizar los cambios, lo que valos a hacer es actualizar sus propiedades
        setProducto(prev => ({
            //Mantenemos los valores anteriores
            ...prev,
            //Actualizamos los elementos con los valores de la caja de texto
            [name]: value
        }))
    }

    //la variable imagenes es un array de imagenes
    const subirImagen = imagenes => {
        //obtenemos la primera imagen del array de fotos
        const foto = imagenes[0];
        setProducto(prev => ({
            //Mantenemos los valores anteriores
            ...prev,
            //Actualizamos la propiedad file con el valor de foto
            [file]: foto
        }))
    }

    const classes = UseStyles();

    //Esta funcion genera un id automaticamente
    const keyImage = uuidv4();
    return (
        <Container className={classes.containermt} > 
            <Grid container justify="center"  >
                <Grid item sm={6} xs={12} >
                    <Typography variant="h4" className={classes.text_title} >
                        Agregar Producto
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
                        name="nombre"
                        value={producto.nombre}
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
                        name="precio"
                        value={producto.precio}
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
                        name="stock"
                        value={producto.stock}
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
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        />
                        <FormControl className={classes.FormControl}>
                            <InputLabel id="marca-select-label">Marca</InputLabel>
                            <Select 
                            label="marca-select-label" 
                            id="marca-select" 
                            value={marca} 
                            onChange={handeMarcaChange} 
                            className={classes.combobox}
                            >
                                <MenuItem value={1}>Nike</MenuItem>
                                <MenuItem value={2}>Addidas</MenuItem>
                                <MenuItem value={3}>Maldiva</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.FormControl}>
                            <InputLabel id="categoria-select-label">Categoria</InputLabel>
                            <Select label="categoria-select-label" id="categoria-select" value={categoria} onChange={handeCategoriaChange}  className={classes.combobox}>
                                <MenuItem value={1}>Verano</MenuItem>
                                <MenuItem value={2}>Invierno</MenuItem>
                                <MenuItem value={3}>Primavera</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid container spacing={2} >
                            <Grid item sm={6} xs={12} >
                                <ImageUploader
                                withIcon={true}
                                key={keyImage}
                                singleImage={true}
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
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" onClick={guardarProducto} >
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AgregarProducto;