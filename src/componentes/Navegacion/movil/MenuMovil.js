import React, { useState } from 'react';
import UseStyles from '../../../theme/UseStyles';
import { Avatar, Collapse, Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuMovil = (props) => {
    const classes = UseStyles();
    const [openCliente, setOpenCliente] = useState(false);
    const handleClickCliente = () =>
    {
        setOpenCliente((orevOpen) => !orevOpen );
    }
    const [openAdmin, setOpenAdmin] = useState(false);
    const handleClickAdmin = () =>
    {
        setOpenAdmin((orevOpen) => !orevOpen );
    }
    return (
        <>
            <ListItem button className={classes.listItem} onClick={handleClickCliente} >
                <div className={classes.linkAppBarMobile} >
                    <Avatar 
                    alt="Mi imagen"
                    className={classes.avatarPerfilAppBar}
                    src="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg"
                    />
                    <ListItemText>
                        John Peralta
                    </ListItemText>
                    <Icon>
                        keyboard_arrow_down
                    </Icon>
                </div>
            </ListItem>
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit >
                <List dissablePadding >
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler} >
                        <Link className={classes.linkAppBarMobile} to="/perfil" >
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/" >
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItemText>Cerrar Sesion</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/*fin cliente*/}
            <ListItem button className={classes.listItem} onClick={handleClickAdmin} >
                <div className={classes.linkAppBarMobile} >
                    <ListItemIcon className={classes.listItemIcon} >
                        <Icon>admin_panel_settings</Icon>
                    </ListItemIcon>
                    <ListItemText>
                        Admin
                    </ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>
            <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit >
                <List dissablePadding >
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler} >
                        <Link className={classes.linkAppBarMobile} to="/admin/usuarios" >
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Usuarios</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/listaProductos" >
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobile} to="/admin/listaPedidos" >
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/*fin admin*/}
            <ListItem button className={classes.listItem} onClick={props.clickHandler}>
                <Link className={classes.linkAppBarMobile} to="/carrito" >
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>Mis Pedidos</ListItemText>
                </Link>
            </ListItem>
        </>
    );
};

export default MenuMovil;