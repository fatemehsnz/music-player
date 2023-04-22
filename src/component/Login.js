import { Box, Button, Divider, FormControl, InputBase, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/logo.png'
import SearchIcon from '@mui/icons-material/Search';

const logocontainer ={
    alignItems:'center',
    pt:5,
}
const phoneInput={
    fontFamily:'msi',
    fontSize:15,color:'white ',
    border: '1px solid #363636',
    backgroundColor:'#363636',
    direction:'ltr',
    width: 290,
    height:47,
    borderRadius:2,
    p:1,
    mb:5,
    '&:focus': {
    backgroundColor:'red'
    }
}
const button ={
    fontFamily:'msi',
    width: 290,
    height:40,
    borderRadius:2,
    mb:2,
    color:'white ',
    backgroundColor:'#fe9743',
    fontSize:14,
    '&:hover': {
        backgroundColor: '#fe9743',
        // boxShadow: 'none',
      },
    //   '&:active': {
    //     boxShadow: 'none',
    //     backgroundColor: '#fe9743',
    //   },
    //   '&:focus': {
    //     boxShadow: 'none',
    //     backgroundColor: '#fe9743',
    //   },

}

const Login = () => {
    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setPhoneError(false)
 
        if (phone == '') {
            setPhoneError(true)
        } 
        if (phone) {
            console.log(phone)
        }
    }
  return (
    <Stack direction='row'>
         <Box flex={1} bgcolor='#242424 '>
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
                <Typography sx={{fontSize:'0.5em' ,letterSpacing:2,fontWeight:300,color:'white', }}>music player</Typography>
            </Stack>
            <Box component="form" noValidate autoComplete="off" sx={{display:'flex',flexDirection:'column',alignItems:'center',mt:4}}>
                <InputLabel sx={{fontSize:'0.9em',fontWeight:600,color :'white',mb:1}}>
                    شماره همراه
                </InputLabel>
                <InputBase type='phone' placeholder='09*********' required sx={phoneInput}></InputBase>
                <Button type='submit' variant="contained" sx={button}>ورود</Button>
                <Typography sx={{color:'#959596'}}>حساب کاربری ندارید؟  <Link style={{color:'white',textDecoration: 'none',fontSize:13}} to="/signup">ثبت‌نام</Link></Typography>
                <Divider variant="middle" sx={{borderColor:'#555556',width:290,mb:5,mt:5}}/>
            </Box>
            <Stack  sx={{alignItems:'center'}}>
                <Button startIcon={<SearchIcon sx={{ml:1}}/>} component={Link} to={'/first'} variant="contained" 
                sx={{...button, bgcolor:'#363636',fontSize:12, '&:hover': {backgroundColor: '#363636'}}}>
                ورود با حساب گوگل
                </Button>
            </Stack>
        </Box>
        <Box flex={3} bgcolor='red'>
            bye
        </Box>

    </Stack>
  )
}

export default Login
