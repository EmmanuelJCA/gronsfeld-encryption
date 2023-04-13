import {  Button, Grid, TextField, Typography } from "@mui/material"
import { EnhancedEncryption } from '@mui/icons-material';

export const Form = ({ message, password, onInputChange, handleSubmit }) => {
    return (
        <Grid
            item
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
                        // error={!!emailValid && formSubmitted}
                        // helperText={formSubmitted && emailValid}
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
                        // error={!!emailValid && formSubmitted}
                        // helperText={formSubmitted && emailValid}
                        />
                </Grid>

                <Grid container sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={ 12 }>
                        <Button
                            type="submit"
                            variant='contained'
                            fullWidth
                            onSubmit={ (e) => handleSubmit(e) }
                        >
                            <EnhancedEncryption />
                            <Typography sx={{ ml: 1 }}>Encriptar</Typography>
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </Grid>
    )
}
