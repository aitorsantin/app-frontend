import { Container, Table, TableContainer, TableHead, TableRow, Typography, TableCell, TableBody, Icon, Button } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';

const Usuarios = (props) => {
    const classes = UseStyles();

    const EditaUsuario = () =>
    {
        const id="B4951AC1-D83E-46DA-983B-0C32A25E1CB7";
        props.history.push("/admin/usuario/" + id); 
    }

    return (
       <Container className={classes.containermt} >
           <Typography variant="h4" className={classes.text_title} >
               Usuarios
           </Typography>
           <TableContainer>
               <Table>
                   <TableHead>
                       <TableRow>
                           <TableCell>
                               Id
                           </TableCell>
                           <TableCell>
                               Usuario
                           </TableCell>
                           <TableCell>
                               Email
                           </TableCell>
                           <TableCell>
                               Admin
                           </TableCell>
                           <TableCell></TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                        <TableRow>
                           <TableCell>
                                B4951AC1-D83E-46DA-983B-0C32A25E1CB7
                           </TableCell>
                           <TableCell>
                               John Peralta
                           </TableCell>
                           <TableCell>
                               john@gmail.com
                           </TableCell>
                           <TableCell>
                               <Icon className={classes.iconDelivered} >
                                   check
                               </Icon>
                           </TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" onClick={EditaUsuario} >
                                   <Icon>
                                       edit
                                   </Icon>
                               </Button>
                               <Button variant="contained" color="secondary" >
                                   <Icon>
                                       delete
                                   </Icon>
                               </Button>
                           </TableCell>
                       </TableRow>
                       <TableRow>
                           <TableCell>
                                4980DB5D-C1D0-4A44-A739-6CD06F4DCF8D
                           </TableCell>
                           <TableCell>
                               Aitor Santin
                           </TableCell>
                           <TableCell>
                               aitor@gmail.com
                           </TableCell>
                           <TableCell>
                               <Icon className={classes.iconNotDelivered} >
                                   clear
                               </Icon>
                           </TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" onClick={EditaUsuario} >
                                   <Icon>
                                       edit
                                   </Icon>
                               </Button>
                               <Button variant="contained" color="secondary" >
                                   <Icon>
                                       delete
                                   </Icon>
                               </Button>
                           </TableCell>
                       </TableRow>
                   </TableBody>
               </Table>
           </TableContainer>
       </Container>
    );
};

export default Usuarios;