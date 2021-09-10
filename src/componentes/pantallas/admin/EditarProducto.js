import { Container, Grid, Typography, TextField, Avatar, Button } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';
import ImageUploader from 'react-images-upload';
const EditarProducto = () => {
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
                        value="casaca vaxi veraniego"
                        />
                        <TextField 
                        label="Precio" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={9,99}
                        />
                        <TextField 
                        label="Marca" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value="vaxi"
                        />
                        <TextField 
                        label="Stock" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        InputLabelProps={{
                            shrink: true
                        }} 
                        value={15}
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
                        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec cursus scelerisque sapien quis posuere. Pellentesque habitant morbi tristique 
                        senectus et netus et malesuada fames ac turpis egestas. Nulla sit amet neque non odio 
                        consectetur ornare et eget dui. Morbi tincidunt lacinia urna quis rutrum. Duis vel 
                        condimentum turpis. Suspendisse massa nibh, tincidunt ac molestie ut, aliquam ut felis."
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