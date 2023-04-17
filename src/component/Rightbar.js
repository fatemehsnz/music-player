import { FindReplace, OtherHousesRounded, PlayArrowOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Icon, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../assests/logo.png'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import styled from '@emotion/styled';
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
  alignItem:'center',
  cursor:'pointer',
  color: '#999999',
  marginBottom :theme.spacing(3), 
  ":hover" : {
    borderRight: '0.13em solid #ffab40', marginRight: '1em',
    marginX:'-1em' ,
    color :'#ffab40',
  }
    
}));
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
    <Box sx={{backgroundColor :'#0f0f0f' , height:'100vh'}}>
      <Box  sx={{display:'flex',flexDirection:'column' ,alignItems:'center' ,pt:3, mb:5}}>
      <Box
            component="img"
            sx={{
              height: '70px'
            }}
            alt="Your logo."
            src={logo}
        />
        <Typography sx={{fontSize:'1.2em' ,fontWeight:600,color:'white'}}>PLAYER</Typography>
        <Typography sx={{fontSize:'0.5em' ,letterSpacing:2,fontWeight:300}}>music player</Typography>
      </Box>
      <Stack  sx={{alignItems:'flex-start'}}>
      <div>
            {menuItems.map((item) => (      
              // <Link key={item.name} to={`/${item.name}`} sx={{textDecoration: "none"}}>   
              <Item  key={item.name} direction='row'>
                
                  <Icon sx={icon}>{item.icon}</Icon>
                  <Typography sx={itemText}>{item.name}</Typography>
                
                </Item>
                // </Link>
            ))}
      </div>
      {/* <Item direction='row'>
        <OtherHousesRounded sx={icon}/>
        <Typography sx={itemText}>صفحه اصلی</Typography>
      </Item>
      <Item direction='row'>
        <FindReplace sx={icon}/>
        <Typography sx={itemText}>جستجو</Typography>
      </Item>
      <Item direction='row'>
        <PlayArrowOutlined sx={icon}/>
        <Typography sx={itemText}>پخش آهنگ</Typography>
      </Item>
      <Item direction='row'>
        <FavoriteBorderRoundedIcon sx={icon}/>
        <Typography sx={itemText}>محبوب ترین ها</Typography>
      </Item>
      <Item direction='row'>
        <OtherHousesRounded sx={icon}/>
        <Typography sx={itemText}>لیست پخش منتخب</Typography>
      </Item>
      <Item direction='row'>
        <OtherHousesRounded sx={icon}/>
        <Typography sx={itemText}>آپلود آهنگ</Typography>
      </Item> */}
      
      </Stack>
    </Box>
    </ThemeProvider>
  )
}


export default Rightbar
