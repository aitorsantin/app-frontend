import { Avatar, Container, Divider, Grid, Icon, Typography, TextField, Button, TableContainer, Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UseStyles from '../../theme/UseStyles';
import ImageUploader from 'react-images-upload';
import {UseStateValue} from "../../contexto/store";
import {v4 as uuidv4} from "uuid";
import { actualizarUsuario } from '../../actions/UsuarioAction';
import { withRouter } from 'react-router-dom';

const Perfil = (props) => {

    const imagenDefault = "https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg";

    const [{sesionUsuario}, dispatch] = UseStateValue();

    const [usuario, setUsuario] = useState({
        id: "",
        nombre: "",
        apellido: "",
        imagen: "",
        password: "",
        file: "",
        imagenTemporal: "",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name]: value
        }))
    }

    /*Si existe una sesion de usuario, carga dentro de las variables de usuario con lo que nos devuelve la API*/ 
    useEffect(() => {
        if(sesionUsuario)
        {
            setUsuario(sesionUsuario.usuario);
        }
    }, [sesionUsuario])

    const subirImagen = (imagenes) => {
        let foto = imagenes[0];
        let fotoUrl = "";
        try{
            fotoUrl = URL.createObjectURL(foto);
        }
        catch(e)
        {
            console.log(e);
        }
        setUsuario((prev) =>({
            ...prev,
            file: foto,
            imagenTemporal: fotoUrl
        }));
    }

    const guardarUsuario = (e) =>{
        e.preventDefault();
        actualizarUsuario(sesionUsuario.usuario.id, usuario, dispatch)
        .then(response => {
            if(response.status === 200)
            {
                window.localStorage.setItem("token", response.data.token);
                props.history.push('/');
            }
            else
            {
                dispatch({
                    type:"OPEN_SNACKBAR",
                    openensaje: {
                        open: true,
                        mensaje: "Errores actualizando el prefil de usuario"
                    }
                });
            }
        })
    }

    const keyImage = uuidv4();

    const classes = UseStyles();
    const verDetalles = () =>
    {
        const id = 'E0F3F2AC-C199-40C2-8FAE-2ED0A268E11F';
        props.history.push("/ordenCompra/" + id );
    }
    return (
        <Container className={classes.containermt} >
            <Grid container spacing={2} >
                <Grid item md={3} xs={12} >
                    <Typography variant="h5" className={classes.text_title}>
                        Perfil de Usuario
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form} >
                    <ImageUploader
                        key={keyImage}
                        onChange={subirImagen}
                        withIcon={false}
                        buttonStyles={{borderRadius: "50%", padding: 10, margin: 0,
                        position: "absolute", bottom: 15, left: 15}}
                        className={classes.imageUploader}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label={
                        <Avatar alt="Mi Perfil" className={classes.avatarPefil}
                        src ={
                            usuario.imagenTemporal ? usuario.imagenTemporal : (usuario.imagen ? usuario.imagen : imagenDefault)
                        }
                        />
                        }
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        />
                        <TextField 
                        label="Nombre" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb} 
                        name = "nombre"
                        value={usuario.nombre}
                        onChange={handleChange} 
                        />
                        <TextField 
                        label="Apellidos"
                         variant="outlined" 
                         fullWidth 
                         className={classes.gridmb} 
                         name = "apellido"
                         value={usuario.apellido}
                         onChange={handleChange}
                         />
                        <TextField 
                        label="Correo Electronico" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb}
                        name = "email"
                        value={usuario.email}
                        onChange={handleChange}
                        />
                        <Divider className={classes.divider} />
                        <TextField 
                        label="Contraseña" 
                        variant="outlined" 
                        fullWidth 
                        className={classes.gridmb} 
                        name = "password"
                        />
                        <TextField label="Confirmar Contraseña" variant="outlined" fullWidth className={classes.gridmb} />
                        <Button variant="contained" color="primary" onClick={guardarUsuario} >
                            Actualizar
                        </Button>
                    </form>
                </Grid>
                <Grid item md={9} xs={12} >
                    <Typography variant="h5" className={classes.text_title} >
                        Mis Pedidos
                    </Typography>
                    <TableContainer className={classes.form} >
                        <Table className={classes.table} >
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Id
                                    </TableCell>
                                    <TableCell>
                                        Fecha
                                    </TableCell>
                                    <TableCell>
                                        Total
                                    </TableCell>
                                    <TableCell>
                                        Pagado
                                    </TableCell>
                                    <TableCell>
                                        Entregado
                                    </TableCell>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow>
                                    <TableCell>
                                        E0F3F2AC-C199-40C2-8FAE-2ED0A268E11F
                                    </TableCell>
                                    <TableCell>
                                        22/07/2021
                                    </TableCell>
                                    <TableCell>
                                        62,50€
                                    </TableCell>
                                    <TableCell>
                                        22/07/2021
                                    </TableCell>
                                    <TableCell>
                                        {/*
                                        <Icon className={classes.iconNotDelivered} >
                                            clear
                                        </Icon>
                                        */}
                                        <Icon className={classes.iconDelivered} >
                                            check
                                        </Icon>
                                    </TableCell>
                                        <Button variant="contained" onClick={verDetalles} >
                                            Detalle
                                        </Button>
                                    <TableCell>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid> 
            </Grid>
        </Container>
    );
};

export default withRouter(Perfil);