import { FindReplace, OtherHousesRounded, PlayArrowOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Icon, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import styled from '@emotion/styled';
import logo from '../assests/logo.png'
import { createTheme, ThemeProvider } from "@mui/material";
// import {theme} from '../theme'
const theme = createTheme ()

const menuItems =[
  {name : 'صفحه اصلی', icon : <OtherHousesRounded/>},
  {name : 'جستجو', icon : <FindReplace/>},
  {name : 'پخش آهنگ', icon : <PlayArrowOutlined/>},
  // {name : 'محبوب ترین ها', icon : <FavoriteBorderRoundedIcon/>},
  // {name : 'لیست پخش منتخب', icon : <FavoriteBorderRoundedIcon/>},
  // {name : 'آپلود آهنگ', icon : <FavoriteBorderRoundedIcon/>},

] ;
const Item = styled(Stack)(({ theme }) => ({
  display: { xs: 'none', sm: 'block' } ,
  cursor:'pointer',
  color: '#999999',
  marginBottom :theme.spacing(3), 
  ":hover" : {
    borderRight: '0.13em solid #ffab40', marginRight: '1em',
    marginX:'-1em' ,
    color :'#ffab40',
  }
    
}));
const stack={
  display:'flex',
  alignItems:'center',
  backgroundColor :'#1e1e1e',
  pt:5
}
const icon ={
  ml:1 ,mr:2
}
const itemText = {
  display: { xs: 'none', md: 'block' },
  mt : 0.2,
  fontSize : {
    md : '11px' , lg : '12px'
  },
  fontWeight:{
    md : 700
  },
  fontFamily: 'msi'
}
const Rightbar = () => {
  return (
    <ThemeProvider theme={theme}>
        <Stack  sx={stack}>
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
        <Stack  sx={{...stack , alignItems:'flex-start', height:'100vh'}}>
            {menuItems.map((item) => (      
              // <Link key={item.name} to={`/${item.name}`} sx={{textDecoration: "none"}}>   
              <Item  key={item.name} direction='row'>
                  <Icon sx={icon}>{item.icon}</Icon>
                  <Typography sx={itemText}>{item.name}</Typography>
              </Item>
                // </Link>
            ))}
      </Stack>
    </ThemeProvider>
  )
}


export default Rightbar
