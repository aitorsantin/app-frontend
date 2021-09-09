import { Icon, Typography, AppBar, Container, Toolbar, Button, IconButton, ListItem, ListItemIcon, Drawer
, ListItemText, List  } from '@material-ui/core';
import React, { useState } from 'react';
import UseStyles from '../../theme/UseStyles';
import { Link } from 'react-router-dom';

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
        <AppBar position="static" className={classes.appBar}>
            <Container>
                <Toolbar>
                    <div className={classes.sectionMovile} >
                        <IconButton color="inherit" onClick={openToggle}>
                            <Icon fontSize="large" >
                                menu
                            </Icon>
                        </IconButton>
                    </div>
                    <Drawer open={open} onClose={closeToogle} > 
                            <div className={classes.list} >
                               <List>
                                   <ListItem button className={classes.listItem} onClose={closeToogle}>
                                        <Link to="/login" color="inherit" underline="none" className={classes.linkAppBarMobile} >
                                            <ListItemIcon className={classes.listItemIcon}>
                                                <Icon>person</Icon>
                                            </ListItemIcon>
                                            <ListItemText>Login</ListItemText>
                                       </Link>
                                   </ListItem>
                               </List>
                            </div>
                        </Drawer>
                    <div className={classes.grow} >
                        <Link  to="/" color="inherit" underline="none" className={classes.linkAppBarLogo} >
                            <Icon fontSize="large" className={classes.mr} >
                                store
                            </Icon>
                            <Typography variant="h5" >VAXI SHOP</Typography>
                        </Link>
                    </div>
                    <div>
                        <Button  color="inherit" className={classes.buttonIcon}>
                            <Link to="/login" color="inherit" className={classes.linkAppBarDesktop} underline="none" >
                                <Icon className={classes.mr} >
                                    person
                                </Icon>
                                LOGIN
                            </Link>
                        </Button>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MenuAppBar;