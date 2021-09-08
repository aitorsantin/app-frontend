import { Icon, Link, Typography, AppBar, Container, Toolbar, Button  } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../theme/UseStyles';

const MenuAppBar = () => {
    const classes = UseStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Container>
                <Toolbar>
                    <div className={classes.grow} >
                        <Link color="inherit" underline="none" className={classes.linkAppBarLogo} >
                            <Icon fontSize="large" className={classes.mr} >
                                store
                            </Icon>
                            <Typography variant="h5" >VAXI SHOP</Typography>
                        </Link>
                    </div>
                    <div>
                        <Button  color="inherit" className={classes.buttonIcon}>
                            <Link color="inherit" className={classes.linkAppBarDesktop} underline="none" >
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