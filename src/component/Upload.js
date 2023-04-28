import React, { useState } from 'react'
import Rightbar from './Rightbar'
import Header from './Header'
import { Box, Button, Input, InputBase, Link, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import pic from '../assests/esharat.jpg'

const button ={
  borderRadius:0,
  color:'#999999',
  fontFamily:'msi',
  fontSize:13,
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
  '.css-1iuehy7-MuiButtonBase-root-MuiButton-root.Mui-disabled':{
    color:'white'
  }  
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
const infoInput={
  color:'white',
  bgcolor:'#292929',
  borderRadius:3,mt:1,p:2,
  maxWidth:410,width:'100%',
  height:50
}

const Upload = () => {
  const [selectedFile , setSelectedFile] = useState(null)
  const handleFileSelected =event =>{
    setSelectedFile(event.target.files[0])
    //do something with the selected file
  }
  const [upload , setUpload] = useState('upload')
  return (
    <Box >
        <Stack direction='row' >
            <Rightbar/>
            <Box flex={1}  sx={{ backgroundColor :'black' , height: upload==='upload' ? '100vh' :'none' }}>
                <Header/> 
                <Stack direction='row' p={5}>
                  <Button component={Link} sx={button} onClick={()=>{setUpload('upload')}}>
                    بارگذاری آهنگ
                  </Button>
                  <KeyboardArrowLeftIcon sx={{color:'#999999',fontSize:20,pt:1}}/>
                  <Button sx={button} onClick={()=>{setUpload('info')}}>
                    ذخیره اطلاعات
                  </Button>
                </Stack>
                {upload==='upload'&& <Stack pr={6}>
                  <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>بارگذاری آهنگ</Typography>
                  <Paper sx={{mt:2,bgcolor:'#1d1d1d',height:270,maxWidth:1290,borderRadius:2,p:3.5}}>
                    <Stack component={InputBase} type='file' inputProps={{style:{display:'none'},accept:'.jpg,.jpeg'}} sx={inputFile} onChange={handleFileSelected}
                    endAdornment={
                      <label htmlFor='contained-button-file' style={{backgroundColor:'white',width:500,height:200}}>
                        <Button disabled={!selectedFile} variant="contained" sx={uploadButton}>
                          آپلود آهنگ</Button>
                      </label>
                    }
                    >
                      <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</Typography>
                      <Button disabled={!selectedFile} variant="contained" sx={uploadButton}>آپلود آهنگ</Button>
                    </Stack>
                  </Paper>
                </Stack>}
                {upload==='info'&& <Stack pr={6} component="form">
                  <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>ذخیره اطلاعات</Typography>
                  <Paper sx={{mt:2,bgcolor:'#1d1d1d',maxWidth:1290,borderRadius:2,p:3,mb:6}}>
                    <Stack>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid2 container columnSpacing={5}>
                          <Grid2 container  xs={7.5} sx={{justifyContent:'space-between'}}>
                            <Grid2 xs={6}>
                              <Typography sx={{color:"white",fontSize:13,fontFamily:'msi'}}>نام آهنگ</Typography>
                              <InputBase type='text' sx={infoInput}/>
                            </Grid2>
                            <Grid2 xs={6}>
                            <Typography sx={{color:"white",fontSize:13,fontFamily:'msi'}}>دسته بندی</Typography>
                            <Select  sx={{...infoInput,}}>
                              <MenuItem value={"سنتی"}>سنتی</MenuItem>
                              <MenuItem value={"پاپ"}>پاپ</MenuItem>
                              <MenuItem value={"رپ"}>رپ</MenuItem>
                            </Select>
                            </Grid2>
                            <Grid2 xs={6}>
                            <Typography sx={{color:"white",fontSize:13,fontFamily:'msi'}}>نام خواننده</Typography>
                            <InputBase type='text' sx={infoInput}/>
                            </Grid2>
                            <Grid2 xs={6}>
                            <Typography sx={{color:"white",fontSize:13,fontFamily:'msi'}}>نام آلبوم</Typography>
                            <InputBase type='text' sx={infoInput}/>
                            </Grid2>
                            <Grid2 xs={6}>
                            <Typography sx={{color:"white",fontSize:13,fontFamily:'msi'}}>مدت زمان آهنگ</Typography>
                            <InputBase type='text' sx={infoInput}/>
                            </Grid2>
                            <Grid2 xs={6}>
                            <Typography sx={{color:"white",fontSize:13,fontFamily:'msi'}}>عنوان</Typography>
                            <InputBase type='text' sx={infoInput}/>
                            </Grid2>
                          </Grid2>
                          <Grid2 xs={4.5} sx={{maxHeight:350}}>
                            {/* <Box sx={{width: 400,height:300 ,borderRadius:4}}> */}
                              <Box
                                component="img"
                                sx={{width:'95%',height:'86%',mt:1, borderRadius:4}}
                                alt="cover"
                                src={pic}
                              />
                            {/* </Box> */}
                          </Grid2>
                        </Grid2>
                      </Box>
                      <Stack>
                       <Typography sx={{color:"white",fontSize:13,fontFamily:'msi',mt:1}}>متن آهنگ</Typography>
                       <InputBase type='text'  
                        sx={{ color:'white',bgcolor:'#292929',borderRadius:3,mt:1,p:2,mb:2,width:'100%',height:250}}
                        multiline={true}
                        rows={8}
                       />
                      </Stack>
                      <Stack alignItems='flex-end'>
                      <Button type='submit' variant="contained" sx={{...uploadButton,height:50,}}>
                          ذخیره اطلاعات</Button>
                      </Stack>
                    </Stack>
                  </Paper>
                </Stack>}
            </Box>
        </Stack>
    </Box>
  )
}

export default Upload
