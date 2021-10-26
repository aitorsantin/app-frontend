import { Avatar, Button, Icon, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { UseStateValue } from '../../../contexto/store';
import useStyles from '../../../theme/UseStyles';


const MenuCliente = (props) => {

    const [{sesionUsuario}, dispatch] = UseStateValue();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const salirSesion = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch({
            type: "SALIR_SESION",
            nuevoUsuario: null,
            autenticado: false
        });

        props.history.push("/login");
    }

    const classes = useStyles();
    return (
        <>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link className={classes.linkAppBarDesktop} to="/carrito">
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
            </Button>
            <div>
                <Button color="inherit" className={classes.buttonIcon}
                onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Avatar 
                        alt="mi imagen"
                        className={classes.avatarPerfilAppBar}
                        src="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg"
                        />
                        {sesionUsuario
                        ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' ' + sesionUsuario.usuario.apellido : "Inicie Sesion")  
                        : "Inicie Sesion"}
                        <Icon>keyboard_arrow_down</Icon>
                    </div>
                </Button>
                <Menu
                elevation={2}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItem button onClick={salirSesion}>
                                <ListItemText>Cerrar Sesion</ListItemText>
                            </ListItem>
                            
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
};

export default withRouter(MenuCliente);