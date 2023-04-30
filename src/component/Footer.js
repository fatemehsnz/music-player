import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import img1 from '../assets/Masoud-Roohnikan-Dastband.jpg'
import img2 from '../assets/eybi-nadare.jpg'
import img3 from '../assets/img3.jpg'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const footer={
  backgroundColor:'#212121' , position:'fixed',
  width:'100%',height:80,left:0,bottom:0,
  display:'flex', flexDirection: 'row', alignItems: 'center'
}
const Footer = () => {
  const [played,setPlayed] = useState(0)
  const handleSeekChange = e =>{
    setPlayed(parseFloat(e.target.value))
  }
  return (
      <footer style={footer}>
        {/* <Box sx={{ display: 'flex', alignItems: 'center',}}> */}
          <Box
              component="img"
              sx={{height: '70%',borderRadius:3,mr:30}}
              alt="cover"
              src={img3}
          />
        {/* </Box> */}
        <Stack sx={{justifyContent:'center',pr:2}}>
          <Typography  sx={{fontSize:'1em',fontFamily:'msi' ,fontWeight:500,color:'white'}}>باطل</Typography>
          <Typography  sx={{fontSize:'0.9em' ,fontWeight:300,color:'#999999'}}>شادمهر عقیلی </Typography>
        </Stack>
        <ReactPlayer url='' 
          playing 
          controls
          progressInterval={1000}
          onProgress={(state) => setPlayed(state.played)}
        />
        <input
          type='range' min={0} max={1} step='any'
          value = {played}
          onChange ={handleSeekChange}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1}}>
          <IconButton aria-label="previous">
            <SkipNextRoundedIcon  sx={{color:'white', height: 29, width: 29,}}/>
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowRoundedIcon sx={{color:'white', height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            <SkipPreviousRoundedIcon  sx={{color:'white', height: 29, width: 29}}/>
          </IconButton>
        </Box>
        <IconButton >
            <MoreVertIcon  sx={{color:'white', height: 29, width: 29,}}/>
          </IconButton>
      </footer>
  )
}

export default Footer
