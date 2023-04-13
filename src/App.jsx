import { AppTheme } from "./theme"
import { Form, Output } from "./components"
import { Grid, Typography } from "@mui/material"
import { useForm } from "./hooks"

const initialForm = { 
	message: '',
	password: '',
}

export const App = () => {
	const { message, password, formState, onInputChange } = useForm(initialForm)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(formState)
	}

	return (
		<AppTheme>
			<Grid 
				container
				direction='column'
				sx={{ 
					minHeight: '100vh', backgroundColor: 'rgb(17 24 39 / 1)'
				}}
			>
				<Typography variant="h3" sx={{textAlign: 'center', color: 'white', minHeight: '10vh'}}>
					Metodo de encriptacion Gronsfeld
				</Typography>
				<Grid 
					container
					justifyContent='center'
					alignItems='center'
					spacing={ 2 }
					gap={ 25 }
					sx={{ 
						flexDirection: { xs: "column", md: "row"},
						minHeight: '90vh',
					}}
				>
					<Form 
						message= { message }
						password= { password }
						onInputChange= { onInputChange }
						handleSubmit={ handleSubmit }
					/>
					<Output />
				</Grid>
			</Grid>
		</AppTheme>
	)
}

