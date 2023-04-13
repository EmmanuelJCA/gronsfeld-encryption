import { Box, Divider, Grid, Typography } from "@mui/material"

export const Output = ({ originalMessage, secretKey, message}) => {
    return (
        <Box
            className='box-shadow'
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                height: '90vh',
                width: '50%',
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 2
            }}
        >
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <Typography variant="h6">Entrada: { originalMessage }</Typography>
                <Divider />
                <Typography variant="h6">Clave: { secretKey }</Typography>
                <Divider />
                <Typography variant="h6">Salida: { message }</Typography>
            </Grid>

        </Box>
    )
}
