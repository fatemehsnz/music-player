import React from 'react'
import Rightbar from './Rightbar'
import Header from './Header'
import { Box, Button, Link, Paper, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const button ={
  borderRadius:0,
  color:'#999999',
  fontFamily:'msi',
  fontSize:12,
  '&:focus': {
    color:' #ffab40',
    boxShadow: 'none',
    borderBottom: '0.1em solid #ffab40',
  },
}

const Upload = () => {
  return (
    <Box >
        <Stack direction='row'>
            <Rightbar/>
            <Box flex={7}  sx={{ backgroundColor :'black' ,height:'100vh' }}>
                <Header/> 
                <Stack direction='row' p={5}>
                  <Button component={Link} sx={button}>
                    بارگذاری آهنگ
                  </Button>
                  <KeyboardArrowLeftIcon sx={{color:'#999999',fontSize:20,pt:1}}/>
                  <Button sx={button}>
                    ذخیره اطلاعات
                  </Button>
                </Stack>
                <Stack pr={6}>
                  <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>بارگذاری آهنگ</Typography>
                  <Paper sx={{mt:2,bgcolor:'#1d1d1d',height:300,maxWidth:1290,borderRadius:2,p:3.5}}>
                    <Stack sx={{alignItems:'center',height:250,border:'0.1em dashed #404040'}}>
                      hi
                    </Stack>
                  </Paper>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Upload
