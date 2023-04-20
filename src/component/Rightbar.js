import { FindReplace, OtherHousesRounded, PlayArrowOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Icon, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import styled from '@emotion/styled';
import logo from '../assests/logo.png'
import { createTheme, ThemeProvider } from "@mui/material";
// import theme from '../theme'
const theme = createTheme ({
  typography: {
    fontFamily: 'msi'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    }
  },
})

const menuItems =[
  {name : 'صفحه اصلی', icon : <OtherHousesRounded/>},
  {name : 'جستجو', icon : <FindReplace/>},
  {name : 'پخش آهنگ', icon : <PlayArrowOutlined/>},
  // {name : 'محبوب ترین ها', icon : <FavoriteBorderRoundedIcon/>},
  // {name : 'لیست پخش منتخب', icon : <FavoriteBorderRoundedIcon/>},
  // {name : 'آپلود آهنگ', icon : <FavoriteBorderRoundedIcon/>},

] ;
const Item = styled(Stack)(({ theme }) => ({
  cursor:'pointer',
  color: '#999999',
  marginBottom :theme.spacing(3), 
  ":hover" : {
    borderRight: '0.13em solid #ffab40', marginRight: '1em',
    marginX:'-1em' ,
    color :'#ffab40',
  }
    
}));

const box ={
  display: { xs:'none',sm: 'none', md: 'block' },
  bgcolor:'#1e1e1e',
  top:0,bottom:0,
}
const stack={
  alignItems:'center',
  pt:5,
}
const icon ={
  ml:1 ,mr:2
}
const itemText = {
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
      <Box flex={1} sx={box}>
        <Box position='fixed'>
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
          <Stack  sx={{...stack , alignItems:'flex-start' }}>
              {menuItems.map((item) => (      
                // <Link key={item.name} to={`/${item.name}`} sx={{textDecoration: "none"}}>   
                <Item  key={item.name} direction='row'>
                    <Icon sx={icon}>{item.icon}</Icon>
                    <Typography sx={itemText}>{item.name}</Typography>
                </Item>
                  // </Link>
              ))}
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  )
}


export default Rightbar
