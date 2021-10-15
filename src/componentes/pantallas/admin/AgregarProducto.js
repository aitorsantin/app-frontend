import { Container, Grid, Typography, TextField, Avatar, Button, Select, InputLabel, FormControl, MenuItem } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';
import ImageUploader from 'react-images-upload';

const AgregarProducto = () => {

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

    const classes = UseStyles();
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
                        />
                         <TextField 
                        label="Precio" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        />  
                         <TextField 
                        label="Stock" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
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
                                buttonText="Buscar Imagen"
                                imgExtension={['.jpg', '.png', '.gif', '.jpeg']}
                                maxFileSize={5242880}
                                 />
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <Avatar
                                variant="square"
                                className={classes.avatarProducto} 
                                />
                            </Grid>
                        </Grid>
                        <Button variant="contained" color="primary" >
                            Agregar
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AgregarProducto;