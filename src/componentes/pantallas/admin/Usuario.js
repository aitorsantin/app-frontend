import { Container, Table, TableContainer, TableHead, TableRow, Typography, TableCell, TableBody, Icon, Button } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../../../actions/UsuarioAction';
import UseStyles from '../../../theme/UseStyles';

const Usuarios = (props) => {

    const [requestUsuarios, setRequestUsuarios] = useState({
        pageIndex: 1,
        pageSize: 20,
        search: ''
    });

    const [paginadorUsuarios, setPaginadorUsuarios] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestUsuarios((anterior)=>({
            ...anterior,
            pageIndex: value
        }));
    }

    useEffect(() => {
        const getListaUsuarios = async () => {
            const response = await getUsuarios(requestUsuarios);
            setPaginadorUsuarios(response.data);
        }
        getListaUsuarios();
    }, [requestUsuarios])

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
                               UserName
                           </TableCell>
                           <TableCell></TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {
                           paginadorUsuarios.data.map((usuario) => (
                               <TableRow key={usuario.id}>
                                   <TableCell>{usuario.id}</TableCell>
                                   <TableCell>{usuario.nombre + '' + usuario.apellido}</TableCell>
                                   <TableCell>{usuario.email}</TableCell>
                                   <TableCell>{usuario.username}</TableCell>
                               </TableRow>
                           ))
                       }
                   </TableBody>
               </Table>
           </TableContainer>
           <Paginationtion count={paginadorUsuarios.pageCount} page={paginadorUsuarios.pageIndex} onChange={handleChange} />
       </Container>
    );
};

export default Usuarios;