import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import UseStyles from '../../../theme/UseStyles';

const ListaPedidos = (props) => {
    const classes = UseStyles();
    const verDetalles = () =>
    {
        const id="9CAC2676-5F6F-43A8-B047-3450AAA3A674";
        props.history.push("/ordenCompra/" + id);
    }
    return (
        <Container className={classes.containermt} >
            <Typography variant="h4" className={classes.text_title} >
                Pedidos
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Pagado</TableCell>
                            <TableCell>Entregado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>D059DAD3-525D-4ACA-BAF0-2773282ADA60</TableCell>
                            <TableCell>Aitor Santin</TableCell>
                            <TableCell>26/07/2021</TableCell>
                            <TableCell>62,50€</TableCell>
                            <TableCell>27/07/2021</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered} >
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="inherit" onClick={verDetalles} >
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>5B97856A-4E97-45F6-AC6B-399CEABD19DF</TableCell>
                            <TableCell>Ricardo Mendez</TableCell>
                            <TableCell>20/07/2021</TableCell>
                            <TableCell>100€</TableCell>
                            <TableCell>21/07/2021</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered} >
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="inherit" onClick={verDetalles} >
                                    Detalles
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;