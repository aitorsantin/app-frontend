import { Button, Container, FormControl, FormLabel, Grid, RadioGroup, Step, StepLabel, Stepper, TextField, Paper, Typography, FormControlLabel, Radio, Divider, TableContainer, Table, TableBody, TableRow, CardMedia, TableCell } from '@material-ui/core';
import React, { useState } from 'react';
import UseStyles from '../../theme/UseStyles';

const ProcesoCompra = (props) => {
    const classes = UseStyles();
    const [activeStep, setActiveStep] = useState(1);
    const realizarPedido = () =>
    {
        const idCompra = "9cac2676-5f6f-43a8-b047-3450aaa3a674";
        props.history.push("/ordenCompra/" + idCompra);
    }
    const continuarProceso = () =>
    {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const retrocederProceso = () =>
    {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    return (
        <Container className={classes.containermt} > 
            <Stepper activeStep={activeStep} alternativeLabel >
                <Step>
                    <StepLabel>
                        Registrarse
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Envio
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Metodo de Pago
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Realizar Pedido
                    </StepLabel>
                </Step>
            </Stepper>
            {activeStep === 1 ? (
                <Grid md ={6} xs={12} className={classes.gridPC} >
                    <Typography variant="h6" className={classes.text_title} >
                        Envio del producto
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault() } className={classes.form} >
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField label="Direccion" fullWidth InputLabelProps={{shrink : true}} >
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Ciudad" fullWidth InputLabelProps={{shrink : true}} >
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Pais" fullWidth InputLabelProps={{shrink : true}} >
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" onClick={continuarProceso} >
                                    Continar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            ) : activeStep === 2 ? (
                <Grid md={3} xs={12} className={classes.gridPC} >
                    <Typography variant="h6" className={classes.text_title} >
                        Metodo de Pago
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl} >
                                <FormLabel>
                                    Seleccione Metodo de Pago
                                </FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="Paypal" control={<Radio color="primary" />} label="Paypal o Tarjeta" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" className={classes.buttonAnterior} onClick={retrocederProceso} >
                                Anterior
                            </Button>
                            <Button variant="contained" color="primary" onClick={continuarProceso} >
                                Siguiente
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            ) : activeStep === 3 ? (
                <Grid container className={classes.gridPC} >
                    <Grid item md={8} xs={12} className={classes.gridLR} >
                        <Typography variant="h6" className={classes.text_title} >
                            Envio
                        </Typography>
                        <Typography  >
                            Direccion: Calle 2, Cali, Colombia
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="h6" className={classes.text_title} >
                            Metodo de Pago
                        </Typography>
                        <Typography  >
                            Metodo: Paypal
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="h6" className={classes.text_title} >
                            Productos
                        </Typography>
                        <TableContainer className={classes.gridmb} >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <CardMedia className={classes.imgProductoPC} title="Imagen producto compra" image="https://www.elmotorista.es/image?i=504415989/zz-tm190202s.jpg" />
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                Abrigo Vaxi moda 2020
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography className={classes.text_detalle} >
                                                2 x 25,00€ = 50,00€
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button variant="contained" color="primary" onClick={retrocederProceso} >
                            Anterior
                        </Button>
                    </Grid>
                    <Grid item md={4} xs={12} >
                        <TableContainer component={Paper} square >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={2} >
                                            <Typography className={classes.text_title} variant="h6" >
                                                Resumen del Pedido
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                Productos
                                            </Typography>
                                        </TableCell>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                50,00€
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                Envio
                                            </Typography>
                                        </TableCell>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                2€
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                IVA
                                            </Typography>
                                        </TableCell>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                10,5€
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                Total
                                            </Typography>
                                        </TableCell>
                                        <TableCell >
                                            <Typography className={classes.text_title} >
                                                62,5€
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Button variant="contained" color="primary" size="large" onClick={realizarPedido} >
                                                Realizar Pedido
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>   
                    </Grid>
                </Grid>
            ) : null }
        </Container>
    );
};

export default ProcesoCompra;