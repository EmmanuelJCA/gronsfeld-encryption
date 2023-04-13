import {  Box, Button, Grid, TextField, Typography } from "@mui/material"
import { EnhancedEncryption, NoEncryption } from '@mui/icons-material';

export const Form = ({ message, password, onInputChange, handleEncrypt, handleDecrypt }) => {
    return (
        <Box
            className='box-shadow'
            direction='column'
            xs={ 10 }
            md={ 4 }
            sx={{
                height: '30vh',
                width: { sm: 450 },
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 2
            }}
        >
            <form>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Mensaje"
                        type="text"
                        placeholder="Mensaje a encriptar"
                        fullWidth
                        name="message"
                        value={ message }
                        onChange={ onInputChange }
                        />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                    <TextField
                        label="Clave"
                        type="number"
                        placeholder="Clave de encriptado"
                        fullWidth
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                        />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                variant='contained' 
                                fullWidth
                                onClick={ handleEncrypt }
                            >
                                <EnhancedEncryption />
                                <Typography sx={{ ml: 1}}>Encriptar</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button 
                                variant='contained' 
                                fullWidth
                                onClick={ handleDecrypt }
                            >
                                <NoEncryption />
                                <Typography sx={{ ml: 1}}>Desencriptar</Typography>
                            </Button>
                        </Grid>
                    </Grid>

            </form>
        </Box>
    )
}
