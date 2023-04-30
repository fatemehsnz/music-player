import React, { useState } from 'react'
import Rightbar from './Rightbar'
import Header from './Header'
import { Box, Button, Card, CardActions, CardMedia, Input, InputBase, Link, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import pic from '../assets/esharat.jpg'

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
  const [image , setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  const handleImageChange = (e)=>{
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onloadend = () =>{
      setImageUrl(reader.result);
    }
    reader.readAsDataURL(file)
    setImage(file)
  }
  return (
    <Box >
        <Stack direction='row' >
            <Rightbar/>
            <Box flex={1}  sx={{ backgroundColor :'black' , height: upload==='upload' ? '100vh' :'none' }}>
                <Header/> 
                <Stack  direction='row' p={5} >
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
                    <Stack sx={inputFile}>
                      <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</Typography>
                      <Button variant="contained" component="label" sx={uploadButton}>
                         آپلود آهنگ  
                        <input hidden  multiple type="file" onChange={handleFileSelected}/>
                      </Button>
                    </Stack>
                    {/* <Stack sx={inputFile} component={InputBase} id='contained-button-file' type='file'  onChange={handleFileSelected}  inputProps={{style:{display:'none'}}} 
                    endAdornment={
                      <label htmlFor='contained-button-file'>
                        <Button component='span' variant="contained" sx={uploadButton} >آپلود آهنگ</Button>
                      </label>
                    }>
                      <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</Typography>
                    </Stack> */}
                  </Paper>
                </Stack>}
                {upload==='info'&& <Stack pr={6} component="form">
                  <Typography sx={{color:"white",fontSize:17,fontFamily:'msi'}}>ذخیره اطلاعات</Typography>
                  <Paper sx={{mt:2,bgcolor:'#1d1d1d',maxWidth:1290,borderRadius:2,p:3,mb:6}}>
                    <Stack>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid2 container columnSpacing={5}>
                          <Grid2 container rowSpacing={4.5} xs={7.8} sx={{justifyContent:'space-between'}}>
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
                          <Grid2 xs={4.2}>
                            <Card sx={{maxWidth:425.5,maxHeight:304.5,width:'100%',height:'100%',borderRadius:4,bgcolor:'#292929'}}>
                              <CardMedia  component='img' image={imageUrl} sx={{width:'25%',height:'36%',position:'absolute',borderRadius:4}} />
                              <CardActions >
                                <Button variant="contained" component='label'
                                  sx={{position:'relative',width:425.5,bgcolor:'transparent',':hover':{bgcolor:'transparent'}}}>
                                  بارگذاری عکس  
                                  <input hidden accept='image/*' multiple type="file" onChange={handleImageChange}/>
                                </Button>
                              </CardActions>
                            </Card>
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
