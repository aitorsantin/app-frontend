import { Container, Icon, Typography, AppBar, Toolbar, IconButton, Drawer, List} from '@material-ui/core';
import UseStyles from '../../theme/UseStyles';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MenuCliente from './desktop/MenuCliente';
import MenuAdmin from './desktop/MenuAdmin';
import MenuMovil from './movil/MenuMovil';
import MenuMovilPublico from './movil/MenuMovilPublico';
import MenuPublico from './desktop/MenuPublico';


const MenuAppBar = () => {
   
    const classes = UseStyles();

    const [open, setOpen] = useState(false);
    const openToggle = () => {
        setOpen(true);
    };

    const closeToogle = () => {
        setOpen(false);
    }

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <div className={classes.sectionMovile} >
                            <IconButton color="inherit" onClick={openToggle} >
                                <Icon fontSize="large" >
                                    menu
                                </Icon>
                            </IconButton>
                        </div>
                        <Drawer open={open} onClose={closeToogle} > 
                            <div className={classes.list} >
                                <List>
                                    {/*<MenuMovilPublico clickHandler={closeToogle} />*/}
                                    <MenuMovil clickHandler={closeToogle} />
                                </List>
                            </div>
                        </Drawer>
                        <div className={classes.grow} >
                            <Link color="inherit" to="/" className={classes.linkAppBarLogo} underline="none" >
                                <Icon className={classes.mr} fontSize="large">store</Icon>
                                <Typography variant="h5" >VAXI SHOP</Typography>
                            </Link>
                        </div>
                        <div className={classes.sectionDesktop}>
                            {/*
                                <MenuPublico />
                            */}
                            <MenuCliente />
                            <MenuAdmin />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default MenuAppBar;