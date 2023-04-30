import { Box, Paper, Stack, Toolbar, Typography,Button ,BottomNavigation, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import Header from './Header'
import img1 from '../assets/Masoud-Roohnikan-Dastband.jpg'
import img2 from '../assets/eybi-nadare.jpg'
import pic from '../assets/pic.jpg'
import MusicItem from './MusicItem'
import Leftbar from './Leftbar';
const theme = createTheme ()


const musicList = [
  {id: '1',name:'دستبند',singer:'روح نیکان', img:img2},
  {id: '2',name:'دستبند',singer:'روح نیکان', img:img2},
  {id: '3',name:'دستبند',singer:'روح نیکان', img:img2},
  {id: '4',name:'دستبند',singer:'روح نیکان', img:img2},
  {id: '5',name:'دستبند',singer:'روح نیکان', img:img2},
]
const musicslist = {
  justifyContent:'space-between',
  maxWidth: 940,
  backgroundColor:'#1e1e1e' ,
  borderRadius:4,mr:3,padding:2
}


function Content() {
  return ( 
    <ThemeProvider theme={theme}>
    <Box flex={1} sx={{ backgroundColor :'black'}}>
      <Header/> 
      <Stack direction='row'>
        <Box flex={2.5} p={2} >
          <Box sx={{maxWidth: 975 ,borderRadius:4,mr:3,mb:2}}>
            <Box
              component="img"
              sx={{width:'100%'}}
              alt="cover"
              src={pic}
            />
          </Box>
          <Stack>
            <Stack direction='row' sx={{maxWidth:980,mr:3}} > 
              <Typography variant='span' sx={{width:'50%',fontSize:'1em',fontWeight:600,color:'white'}}>جدید‌ترین آهنگ‌های‌این هفته</Typography>
              <Typography variant='span' sx={{width:'50%',fontSize:'0.9em',fontWeight:600,color :'#ffab40',textAlign:'end'}}>مشاهده‌همه</Typography>
            </Stack>
            <Stack direction='row' sx={musicslist}>
              {musicList.map(music =>(
                <Box key={music.id}>
                  <MusicItem music={music}/>
                </Box>
              ))}
            </Stack>
            <Stack direction='row' sx={{maxWidth:980,mr:3,mt:3}} > 
              <Typography variant='span' sx={{width:'50%',fontSize:'1em',fontWeight:600,color:'white'}}>لیست‌پخش‌منتخب</Typography>
              <Typography variant='span' sx={{width:'50%',fontSize:'0.9em',fontWeight:600,color :'#ffab40',textAlign:'end'}}>مشاهده‌همه</Typography>
            </Stack>
            <Stack direction='row' sx={{...musicslist, mb:12}}>
              {musicList.map(music =>(
                <Box key={music.id}>
                  <MusicItem music={music}/>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
        <Box flex={1} p={3} sx={{ backgroundColor :'black' }}> 
          <Leftbar/>
        </Box>
      </Stack>
    </Box>
    </ThemeProvider>
  )
}

export default Content
