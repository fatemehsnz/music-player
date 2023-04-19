import { Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import Leftbar from './Leftbar'
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
function Content() {
  return ( 
    <div>
    <Box sx={{ backgroundColor :'#111' , height:'100vh'}}>
      <Header/> 
      <Toolbar sx={{width : 980,mr:5, justifyContent:'space-between',}} > {/*'&.MuiToolbar-root':{padding:0}*/}
        <Typography sx={{fontSize:'1.5em',fontWeight:500,color:'white'}}>جدید‌ترین‌آهنگ‌های‌این‌هفته</Typography>
        <Typography sx={{fontSize:'1.2em',fontWeight:500,color :'#ffab40'}}>مشاهده‌همه</Typography>
      </Toolbar>
      <Toolbar sx={{justifyContent:'space-between',width: '100%', maxWidth: 925,backgroundColor:'#1e1e1e' ,borderRadius:4,mr:8,padding:2}}>
        {musicList.map(music =>(
          <Box key={music.id}>
            <MusicItem music={music}/>
          </Box>
        ))}
      </Toolbar>
      <Toolbar sx={{width : 980,mr:5, justifyContent:'space-between',}} > {/*'&.MuiToolbar-root':{padding:0}*/}
        <Typography sx={{fontSize:'1.5em',fontWeight:500 , color:'white'}}>لیست‌پخش‌منتخب</Typography>
        <Typography sx={{fontSize:'1.2em',fontWeight:500,color :'#ffab40'}}>مشاهده‌همه</Typography>
      </Toolbar>
      <Toolbar sx={{justifyContent:'space-between',width: '100%', maxWidth: 925,backgroundColor:'#1e1e1e' ,borderRadius:4,mr:8,padding:2}}>
        {musicList.map(music =>(
          <Box key={music.id}>
            <MusicItem music={music}/>
          </Box>
        ))}
      </Toolbar>
    </Box>
    </div>
  )
}

export default Content
