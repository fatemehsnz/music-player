import { Box, IconButton, Slider, Stack, styled, Typography, useTheme } from '@mui/material'
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
const TinyText = styled(Typography)({
  fontFamily:'msi',
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: 0.2,
  color:'white'
});

const Footer = () => {
  const [played,setPlayed] = useState(0)
  const handleSeekChange = e =>{
    setPlayed(parseFloat(e.target.value))
  }
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
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
        {/* <ReactPlayer url='' 
          playing 
          controls
          progressInterval={1000}
          onProgress={(state) => setPlayed(state.played)}
        />
        <input
          type='range' min={0} max={1} step='any'
          value = {played}
          onChange ={handleSeekChange}
        /> */}
         <TinyText>{formatDuration(position)}</TinyText>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            color: '#ff8f51',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <TinyText>{formatDuration(duration - position)}</TinyText>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1}}>
          <IconButton aria-label="previous">
            <SkipNextRoundedIcon  sx={{color:'white',fontSize: '1.7rem'}}/>
          </IconButton>
          <IconButton aria-label={paused ? 'play' : 'pause'}
            onClick={() => setPaused(!paused)}>
            {paused ? (
              <PlayArrowRoundedIcon
              sx={{color:'white',fontSize: '2rem'}} 
              />
            ) : (
              <PauseRoundedIcon sx={{color:'white', fontSize: '2rem' }} />
            )}
          </IconButton>
          <IconButton aria-label="next">
            <SkipPreviousRoundedIcon  sx={{color:'white',fontSize: '1.7rem'}}/>
          </IconButton>
        </Box>
        <IconButton >
            <MoreVertIcon  sx={{color:'white', fontSize: '1.8rem'}}/>
          </IconButton>
      </footer>
  )
}

export default Footer
