import React, { useState } from 'react'
import Rightbar from './Rightbar'
import Header from './Header'
import { Box, Button, Input, InputBase, Link, Paper, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { CloudUpload } from '@mui/icons-material';

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
};
const uploadButton ={
  fontFamily:'msi',
  width: 250,
  height:40,
  borderRadius:1.5,
  mt:2,
  color:'white ',
  backgroundColor:'#fe9743',
  fontSize:14,
  '&:hover': {
      backgroundColor: '#fe9743',
      // boxShadow: 'none',
    },
}
const inputFile ={
  alignItems:'center',justifyContent:'center',
  height:230,
  border:'0.1em dashed #404040',
  'input[type="file"]::-webkit-file-upload-button':{
    fontFamily:'msi',
    // width: 250,
    // height:1000,
    borderRadius:1.5,
    mt:2,
    color:'white ',
    backgroundColor:'#fe9743',
    fontSize:14,
    cursor:'pointer',
    '&:hover': {
        backgroundColor: '#fe9743',
        // boxShadow: 'none',
      },
  },
}


const Upload = () => {
  const [selectedFile , setSelectedFile] = useState(null)
  const handleFileSelected =event =>{
    setSelectedFile(event.target.files[0])
    //do something with the selected file
  }
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
                  <Paper sx={{mt:2,bgcolor:'#1d1d1d',height:270,maxWidth:1290,borderRadius:2,p:3.5}}>
                    <Stack component={InputBase} type='file' inputProps={{style:{},accept:'.jpg,.jpeg'}} sx={inputFile} onChange={handleFileSelected}
                    // endAdornment={
                    //   <label htmlFor='contained-button-file'>
                    //     <Button disabled={!selectedFile} variant="contained" sx={uploadButton}>
                    //       آپلود آهنگ</Button>
                    //   </label>
                    // }
                    >
                      <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</Typography>
                      <Button disabled={!selectedFile} variant="contained" sx={uploadButton}>آپلود آهنگ</Button>
                    </Stack>
                  </Paper>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Upload
