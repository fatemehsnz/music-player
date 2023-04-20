import { Box, Button, FormControl, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo.png'

const logocontainer ={
    alignItems:'center',
    pt:5,
}
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
 
        if (email && password) {
            console.log(email, password)
        }
    }
  return (
    <Stack direction='row'>
         <Box flex={1} bgcolor='white'> {/*  //#242424 */}
            <Stack sx={logocontainer}>
                <Box
                        component="img"
                        sx={{
                            height: '70px',
                        }}
                        alt="Your logo."
                        src={logo}
                    />
                <Typography sx={{fontSize:'1.2em' ,fontWeight:600,color:'white'}}>PLAYER</Typography>
                <Typography sx={{fontSize:'0.5em' ,letterSpacing:2,fontWeight:300,color:'white'}}>music player</Typography>
            </Stack>
            <Box component="form" noValidate autoComplete="off">
                <InputLabel shrink htmlFor="bootstrap-input">
                    شماره همراه
                </InputLabel>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
        </Box>
        <Box flex={3} bgcolor='red'>
            bye
        </Box>

    </Stack>
  )
}

export default Login
