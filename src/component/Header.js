import React from 'react'
import { Box,Chip,Divider,InputBase, Paper, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from "@mui/material";
import { red } from '@mui/material/colors';
const theme = createTheme ()



const paper ={
    display: 'flex',
    alignItems: 'center',
    height : 55,
    backgroundColor:'#0f0f0f',
    borderRadius : 3,
    width : 1000,
    margin: 5,
    p: '2px 10px',
    color: 'white',

}
const chip ={
    fontFamily:'msi',color:'white',backgroundColor:'#202020',
    width:65,
    ml:1.5
}
const Header = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Stack flexDirection='row' sx={{backgroundColor :'#111', color:'white' }}>
        <Paper sx={paper}>
            <SearchIcon sx={{ml:1}}/>
            <InputBase placeholder='جستجو...' sx={{color: 'white',fontFamily:'msi',fontSize:15}}></InputBase>
            <Stack flexDirection='row'>
                <Chip label='آواز' sx={chip}/>
                <Chip label="ایرانی" sx={chip}/>
                <Chip label="سنتی" sx={chip}/>
                <Divider sx={{ height: 25, borderColor:'white',display:'flex'}} orientation="vertical" />
                <Chip label="فیلتر" />
            </Stack>
        </Paper>
      </Stack>
    </div>
    </ThemeProvider>
  )
}

export default Header
