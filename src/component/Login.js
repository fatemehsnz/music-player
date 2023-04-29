import { Box, Button, Divider, FormControl, InputBase, InputLabel, Stack, TextField, Typography, withTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import back from '../assets/back.jpg'
import GoogleIcon from '@mui/icons-material/Google';

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
    <Stack direction='row' bgcolor='#242424 ' sx={{height:'100vh'}}>
         <Box flex={1}>
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
                <InputLabel sx={{fontSize:'0.9em',fontWeight:600,color :'white',mb:1,ml:27}}>
                    شماره همراه
                </InputLabel>
                <InputBase type='phone' placeholder='09xxxxxxxxx' required sx={phoneInput}></InputBase>
                <Button type='submit' variant="contained" sx={button}>ورود</Button>
                <Typography sx={{color:'#959596'}}>حساب کاربری ندارید؟  <Link style={{color:'white',textDecoration: 'none',fontSize:13}} to="/signup">ثبت‌نام</Link></Typography>
                <Divider variant="middle" sx={{borderColor:'#555556',width:290,mb:5,mt:5}}/>
                <Button startIcon={<GoogleIcon sx={{ml:1}}/>} href="" variant="contained" 
                sx={{...button,mb:0, bgcolor:'#363636',fontSize:12, '&:hover': {backgroundColor: '#363636'}}}>
                ورود با حساب گوگل
                </Button>
            </Box>
            {/* <Box component="form" noValidate autoComplete="off" sx={{display:'flex',flexDirection:'column',alignItems:'center',mt:4}}>
                <InputLabel sx={{fontSize:'1.1em',fontWeight:540,color :'white',mb:1,ml:27}}>
                    کد تایید
                </InputLabel>
                <InputBase required sx={phoneInput}></InputBase>
                <Button type='submit' variant="contained" sx={button}>تایید</Button>
                <Typography ><Link style={{color:'white',textDecoration: 'none',fontSize:13}}>ارسال مجدد کد تایید</Link></Typography>
                <Divider variant="middle" sx={{borderColor:'#555556',width:290,mb:5,mt:5}}/>
            </Box> */}
            <Stack direction='row' sx={{width:340,pr:5,justifyContent:'center',alignItems:'center'}}>
                <Stack sx={{mr:3,justifyContent:'center',alignItems:'center'}}>
                    {/* <ul style={{margin:0}}> */}
                        <li style={{display:'flex',color:'#946826',height:30}}>
                            <span style={{fontSize:'4rem'}}>.</span>
                        </li>
                        <li style={{display:'flex',color:'#946826'}}>
                            <span style={{fontSize:'4rem'}}>.</span>
                        </li>
                    {/* </ul> */}
                </Stack>
                <Stack sx={{mt:6,mr:0.5,}}>
                    <li style={{display:'flex',color:'#d5d5d5',fontSize:11.5}}>
                        <span style={{}}>لورم ایپسون متن ساختگی با تولید سادگی</span>
                    </li>
                    <li style={{display:'flex',color:'#d5d5d5',fontSize:11.5,width:290}}>
                        <span style={{marginTop:12}}>لورم ایپسون متن ساختگی با تولید سادگی و لورم ایپسون متن ساختگی با </span>
                    </li>  
                </Stack>
                
            </Stack>
        </Box>
        <Box flex={3} >
            {/* <Box
            sx={{backgroundImage:'url("https://cdn4.vectorstock.com/i/1000x1000/30/53/colorful-music-background-vector-19343053.jpg")',
            height:'100vh',backgroundSize:'cover',display:'flex',alignItems:'center',justifyContent:'center' ,color:'white'}}>
            <Typography variant='h3' sx={{fontFamily:'msi'  }}>به آوالند خوش امدید.</Typography>
            </Box> */}
            <Box
            sx={{backgroundImage:'url("https://cdn4.vectorstock.com/i/1000x1000/30/53/colorful-music-background-vector-19343053.jpg")',
            height:'100vh',backgroundSize:'cover',filter:'blur(1px)'}}>
            </Box>
            <Box
            sx={{position:'absolute',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
                zIndex:1,top:'50%',left:'50%',transform:'translate(-85%,-90%)',color:'white',
                width:590}}
            >
                <Typography variant='h3' sx={{fontFamily:'msi',mb:5}}>به آوالند خوش امدید.</Typography>
                <Typography variant='body'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</Typography>
            </Box>
            

            
        </Box>

    </Stack>
  )
}

export default Login
