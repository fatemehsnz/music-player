import { Box, Paper, Stack, Toolbar, Typography,Button ,BottomNavigation } from '@mui/material'
import React from 'react'
import Header from './Header'
import { styled } from '@mui/material/styles';
import img1 from '../assests/Masoud-Roohnikan-Dastband.jpg'
import img2 from '../assests/eybi-nadare.jpg'
import MusicItem from './MusicItem'


const musicList = [
  {id: '1',name:'دستبند',singer:'روح نیکان', img:img1},
  {id: '2',name:'دستبند',singer:'روح نیکان', img:img2},
  {id: '3',name:'دستبند',singer:'روح نیکان', img:img1},
  {id: '4',name:'دستبند',singer:'روح نیکان', img:img2},
  {id: '5',name:'دستبند',singer:'روح نیکان', img:img1},
]
const musicslist = {
  justifyContent:'space-between',
  width: '100%', maxWidth: 940,
  backgroundColor:'#1e1e1e' ,
  borderRadius:4,mr:8,padding:2
}
const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  fontSize: 16,
  borderRadius: 16,  //theme.shape.borderRadius
  width : 165,
  height : 55,
  backgroundColor: '#1e1e1e',
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

function Content() {
  return ( 
    <div>
    <Box sx={{ backgroundColor :'#111' , height:'100vh'}}>
      <Header/> 
      <Stack direction='row' sx={{mt:5}}>
        <Paper sx={{width:'100%', maxWidth: 975,backgroundColor:'#1e1e1e' ,borderRadius:4,mr:8,height:330}}>
        </Paper>
        <Stack sx={{width:'100%', maxWidth: 330,backgroundColor:'#1e1e1e' ,borderRadius:4,mr:8,height:330,alignItems:'center',justifyContent:'center'}}>
          <Box
              component="img"
              sx={{height: '60px',mb:2}}
              alt="cover"
              src={img1}
          />
          <Typography sx={{fontSize:'1.2em' ,fontWeight:400,color:'white',mb:2}}>خرید اکانت ویژه 6 ماهه</Typography>
          <Typography sx={{fontSize:'2em' ,fontWeight:600,color:'white'}}>65000 تومان</Typography>
          <Typography sx={{fontSize:'0.8em' ,fontWeight:300,color:'#999999',textAlign:'center'}}>لورم ایپسوم متن ساختگی با تولید<br/> سادگی نامفهوم از صنعت چاپ <br/>و با استفاده از طراحان گرافیک است.</Typography>
        </Stack>
      </Stack>
      <Stack direction='row' sx={{backgroundColor :'#111' }}>
        <Stack >
          <Stack direction='row' sx={{width : 970,mr:8, justifyContent:'space-between',alignItems:'flex-end',mt:3}} > 
            <Typography sx={{fontSize:'1.4em',fontWeight:550,color:'white'}}>جدید‌ترین‌آهنگ‌های‌این‌هفته</Typography>
            <Typography sx={{fontSize:'1.3em',fontWeight:500,color :'#ffab40'}}>مشاهده‌همه</Typography>
          </Stack>
          <Stack direction='row' sx={musicslist}>
            {musicList.map(music =>(
              <Box key={music.id}>
                <MusicItem music={music}/>
              </Box>
            ))}
          </Stack>
          <Stack direction='row' sx={{width : 970,mr:8, justifyContent:'space-between',alignItems:'flex-end',mt:3}} > 
            <Typography sx={{fontSize:'1.4em',fontWeight:550 , color:'white'}}>لیست‌پخش‌منتخب</Typography>
            <Typography sx={{fontSize:'1.3em',fontWeight:500,color :'#ffab40'}}>مشاهده‌همه</Typography>
          </Stack>
          <Stack direction='row' sx={{...musicslist, mb:5}}>
            {musicList.map(music =>(
              <Box key={music.id}>
                <MusicItem music={music}/>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Paper sx={{display: 'flex',alignItems: 'center',height : 55,backgroundColor:'#1e1e1e',borderRadius:4 ,width:'100%',maxWidth:330,color: 'white',mr:8.5,mt:5}}>
            <CustomButton variant="contained" disableRipple>
              تاریخچه‌پخش
            </CustomButton>
            <CustomButton variant="contained" disableRipple>
              محبوب‌ترین‌آهنگ‌ها
            </CustomButton>
          </Paper>
          <Stack sx={{width:'100%', maxWidth: 330,backgroundColor:'#1e1e1e' ,borderRadius:4,mr:8,maxHeight:500,height:'100%',mt:5,mb:5}}>

          </Stack>
        </Stack>
      </Stack>
    </Box>
    </div>
  )
}

export default Content
