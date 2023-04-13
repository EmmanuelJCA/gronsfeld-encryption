import { AppTheme } from "./theme"
import { Form, Output } from "./components"
import { Grid, Typography } from "@mui/material"
import { useForm, useGronsfeld } from "./hooks"

const initialForm = { 
	message: '',
	password: '',
}

export const App = () => {
	const { message, password, formState, onInputChange } = useForm(initialForm)
	const { encrypt, decrypt, secretMessage } = useGronsfeld( message, password )
	
	const handleEncrypt = (event) => {
		event.preventDefault()
		if( message.length > 0 && password > -1) encrypt()
	}

	const handleDecrypt = (event) => {
		event.preventDefault()
		if( message.length > 0 && password > -1) decrypt()
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
						handleEncrypt={ handleEncrypt }
						handleDecrypt= { handleDecrypt }
					/>
					<Output 
						originalMessage={ message }
						secretKey={ password }
						message={ secretMessage }
					/>
				</Grid>
			</Grid>
		</AppTheme>
	)
}

