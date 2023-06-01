import { Box, Stack,Button, Typography, Paper, List, ListItemButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import neshan from '../assets/neshan.jpg'
import img1 from '../assets/Masoud-Roohnikan-Dastband.jpg'
import img3 from '../assets/img3.jpg'
import img2 from '../assets/eybi-nadare.jpg'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';


const musicList = [
  {id: '1',name:'دستبند',singer:'روح نیکان', img:img1},
  {id: '2',name:'عیبی نداره',singer:'روح نیکان', img:img2},
  {id: '3',name:'باطل',singer:'شادمهر عقیلی', img:img3},
  {id: '4',name:'عیبی نداره',singer:'روح نیکان', img:img2},
  {id: '5',name:'باطل',singer:'شادمهر عقیلی', img:img3},
  {id: '1',name:'دستبند',singer:'روح نیکان', img:img1},
  {id: '1',name:'دستبند',singer:'روح نیکان', img:img1},

]

const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  borderRadius: 16,  //theme.shape.borderRadius
  // maxWidth : 165,
  // maxHeight : 55,
  width:'50%',
  height:'100%',
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

const musicsList = {
  mb:2,
  borderRadius:3,
  // '&:hover': {
  //   backgroundColor: 'inherit',
  //   boxShadow: 'none',
  // },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#2a2a2a',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#2a2a2a',
  },
}
const title ={
  fontSize:'0.9em',fontFamily:'msi' ,fontWeight:500,
  color:'white',
  '&:hover': {
    color: '#fe9743',
    boxShadow: 'none',
  },
  '&:active': {
    color: '#fe9743',
  },
  '&:focus': {
    color: '#fe9743',
  },
}

const Leftbar = () => {
  return (
    <div>
      <Stack sx={{maxWidth: 335,backgroundColor:'#1e1e1e' ,borderRadius:4,height:309,alignItems:'center',justifyContent:'center',mt:2.5}}>
        <Box
            component="img"
            sx={{width: '30%',mb:2}}
            alt="cover"
            src={neshan}
        />
        <Typography sx={{fontSize:'100%' ,fontWeight:400,color:'white',mb:2}}>خرید اکانت ویژه 6 ماهه</Typography>
        <Typography sx={{fontSize:'190%' ,fontWeight:600,color:'white'}}>65000 تومان</Typography>
        <Typography sx={{fontSize:'0.8em' ,fontWeight:300,color:'#999999',textAlign:'center'}}>لورم ایپسوم متن ساختگی با تولید<br/> سادگی نامفهوم از صنعت چاپ <br/>و با استفاده از طراحان گرافیک است.</Typography>
      </Stack>
      <Stack>
        <Paper sx={{display: 'flex',alignItems: 'center',height : 55,backgroundColor:'#1e1e1e',borderRadius:4,maxWidth:300,color: 'white',mt:5}}>
          <CustomButton variant="contained" disableRipple>
            تاریخچه‌پخش
          </CustomButton>
          <CustomButton variant="contained" disableRipple>
            محبوب‌ترین‌آهنگ‌ها
          </CustomButton>
        </Paper>
        <Stack sx={{maxWidth: 320,backgroundColor:'#1e1e1e' ,borderRadius:4,maxHeight:447,mt:5,mb:5,p:1}}>
          <List sx={{position: 'relative', overflow: 'auto',}}>
            {musicList.map(music =>(
              <ListItemButton key={music.id} sx={musicsList}>
                <Box
                  component="img"
                  sx={{maxHeight: 56,height:'100%',borderRadius:3,}}
                  alt="cover"
                  src={music.img}
                />
                <Stack spacing={2} sx={{pr:2,alignItems:'flex-start'}}>
                  <Typography  sx={title}>{music.name}</Typography>
                  <Stack direction='row' alignItems='center'>
                    <Stack direction='row' spacing={2} >
                      <FavoriteRoundedIcon sx={{color:'white',fontSize:15,pl:0.5}}/>
                      <Typography  sx={{fontSize:'0.7em',fontFamily:'msi' ,fontWeight:300,color:'#999999'}}>2,982</Typography>
                    </Stack>
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <PlayArrowRoundedIcon sx={{color:'white',fontSize:20,pl:0.5}}/>
                      <Typography  sx={{fontSize:'0.7em',fontFamily:'msi' ,fontWeight:300,color:'#999999'}}>157 هزار</Typography>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                      <CommentRoundedIcon sx={{color:'white',fontSize:14,pl:0.5}}/>
                      <Typography  sx={{fontSize:'0.7em',fontFamily:'msi' ,fontWeight:300,color:'#999999'}}>2,982</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Stack>
    </div>
  )
}

export default Leftbar

