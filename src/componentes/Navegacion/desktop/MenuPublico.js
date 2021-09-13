import { Button, Icon } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import UseStyles from '../../../theme/UseStyles';

const MenuPublico = () => {
    const classes = UseStyles();
    return (
        <>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link to="/carrito" className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    Mis Pedidos
                </Link>
            </Button>
            <Button color="inherit" className={classes.buttonIcon}>
                <Link to="/login" className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}>person</Icon>
                    Login
                </Link>
            </Button>
        </>
    );
};

export default MenuPublico;