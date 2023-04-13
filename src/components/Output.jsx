import { Box, Divider, Grid, Typography } from "@mui/material"

export const Output = ({ mensaje, clave, encriptado}) => {
    return (
        <Grid
            item
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
                <Typography variant="h6">Mensaje: Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui placeat enim nam quos odio id quod voluptatem totam molestias, voluptatibus quaerat, voluptates earum sequi sit rem explicabo animi nostrum fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam aliquid ut quaerat molestias alias repellat. Numquam mollitia natus, blanditiis ipsam provident dolores! Vel numquam praesentium quisquam earum amet neque?</Typography>
                <Divider />
                <Typography variant="h6">Clave:</Typography>
                <Divider />
                <Typography variant="h6">Encriptado:</Typography>
            </Grid>

        </Grid>
    )
}
