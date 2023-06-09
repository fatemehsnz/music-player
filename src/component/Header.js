import React from 'react'
import { AppBar, Box,Button,Chip,CssBaseline,Divider,InputBase, Paper, Stack, styled, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
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



const paper ={
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    height : 55,
    maxWidth : 950,
    width: '100%', 
    backgroundColor:'#1e1e1e',
    borderRadius : 3,
    mr:2,
    pl:1.5,pr:1.5,
    // p: '2px 10px',
    color: 'white',

}
const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  fontSize: 16,
  borderRadius: 16,  //theme.shape.borderRadius
  width : 100,
  height : 55,
  backgroundColor: '#242424',
  fontFamily:'msi',
  fontSize:13,
  '&:hover': {
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fe9743',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#fe9743',
  },
}));

const chip ={
    fontFamily:'msi',color:'white',backgroundColor:'#2a2a2a',
    width:65,
    ml:1.5
}
const filter={
  fontFamily:'msi',color:'white',backgroundColor:'#1e1e1e','.css-6od3lo-MuiChip-label':{padding:0}
}
const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{pt:{xs:11,sm:13}}}>
          {/* <AppBar component="nav"  style={{backgroundColor:'white',position:'fixed'}}>hi */}
            <header style={{}}>
              <Toolbar sx={{ pt:3,pb:2 , backgroundColor:'black',justifyContent:'space-between',position:'fixed',top:0,width:{xs:'100%',md:'85%',lg:'85%'}}}>
                <Paper sx={paper}>
                  <Stack direction='row' alignItems='center'>
                    <SearchIcon sx={{ml:1}}/>
                    <InputBase placeholder='جستجو...' sx={{fontFamily:'msi',fontSize:15,color:'white'}}></InputBase>
                  </Stack>
                  <Stack direction='row' >
                    <Chip clickable label='آواز' sx={chip}/>
                    <Chip clickable label="ایرانی" sx={chip}/>
                    <Chip clickable label="سنتی" sx={chip}/>
                    <Divider sx={{ height: 25, borderColor:'white',display:'flex'}} orientation="vertical" />
                    <Chip clickable sx={filter} icon={<TuneIcon sx={{'&.MuiChip-icon':{color:'white', mr:1,}}}/> }  label="فیلتر" />
                  </Stack>
                </Paper>
                <Paper sx={{display: 'flex',alignItems: 'center',height : 55,backgroundColor:'#242424',borderRadius:4 ,width:'100%',maxWidth:200,color: 'white',mr:5,ml:5}}>
                  <Link to={'./login'}>
                    <CustomButton variant="contained" disableRipple>
                      ورود
                    </CustomButton>
                  </Link>
                  <Link to={'./signup'}>
                    <CustomButton variant="contained" disableRipple>
                      ثبت‌نام
                    </CustomButton>
                  </Link>
                </Paper>
              // </Toolbar>
            </header>
           {/* </AppBar> */}
      </Box>
    </ThemeProvider>
  )
}

export default Header
