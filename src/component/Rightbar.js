import { FindReplace, OtherHousesRounded, PlayArrowOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Icon,Stack, Typography } from '@mui/material'
import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import styled from '@emotion/styled';
import logo from '../assests/logo.png'
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from 'react-router-dom';
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
  {name : 'صفحه اصلی', icon : <OtherHousesRounded/> ,to:'./'},
  {name : 'جستجو', icon : <FindReplace/>,to:'./'},
  {name : 'پخش آهنگ', icon : <PlayArrowOutlined/> ,to:'./'},
  {name : 'محبوب ترین ها', icon : <FavoriteBorderRoundedIcon/> ,to:'./'},
  {name : 'لیست پخش منتخب', icon : <FavoriteBorderRoundedIcon/> ,to:'./'},
  {name : 'آپلود آهنگ', icon : <FavoriteBorderRoundedIcon/> ,to:'./upload'},

] ;
const Item = styled(Stack)(({ theme }) => ({
  cursor:'pointer',
  color: '#999999',
  // marginRight:1, 
  marginBottom :theme.spacing(3), 
  ":hover" : {
    borderRight: '0.15em solid #ffab40',
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
  mr:2.5
}
const icon ={
  ml:1 ,mr:1
}
const itemText = {
  mt : 0.2,
  fontSize : 13,
  fontWeight:{
    md : 700
  },
  fontFamily: 'msi'
}
const Rightbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box width='190px' sx={box}>
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
          <Stack  sx={{...stack , alignItems:'flex-start',mr:0.8 }}>
              {menuItems.map((item) => (      
                <Link key={item.name} to={`/${item.to}`} style={{textDecoration: "none"}}>   
                <Item  direction='row'>
                    <Icon sx={icon}>{item.icon}</Icon>
                    <Typography sx={itemText}>{item.name}</Typography>
                </Item>
                </Link>
              ))}
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  )
}


export default Rightbar
