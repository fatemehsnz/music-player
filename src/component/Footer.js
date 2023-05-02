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
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';


const footer={
  backgroundColor:'#212121' , position:'fixed',
  width:'100%',height:80,left:0,bottom:0,
  display:'flex', flexDirection: 'row', alignItems: 'center',
  justifyContent:'space-around'
}
const TinyText = styled(Typography)({
  fontFamily:'msi',
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: 0.2,
  color:'white',
  marginRight:10,
  marginLeft:10
});

const Footer = () => {
  const [played,setPlayed] = useState(0)
  const handleSeekChange = e =>{
    setPlayed(parseFloat(e.target.value))
  }
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <footer style={footer}>
      <Stack direction='row' alignItems='center' sx={{pr:20}}>
        <Box
            component="img"
            sx={{maxHeight: 56,height:'100%',borderRadius:3,}}
            alt="cover"
            src={img3}
        />
        <Stack sx={{justifyContent:'center',pr:2}}>
          <Typography  sx={{fontSize:'0.9em',fontFamily:'msi' ,fontWeight:500,color:'white'}}>باطل</Typography>
          <Typography  sx={{fontSize:'0.7em',fontFamily:'msi' ,fontWeight:300,color:'#999999'}}>شادمهر عقیلی </Typography>
        </Stack>
      </Stack>
      <Stack direction='row' alignItems='center'>
        <Stack width={100} direction='row' alignItems="center" sx={{ml:3}}>
          <Slider
            aria-label="Volume"
            defaultValue={30}
            value={value} 
            onChange={handleChange}
            sx={{
              height: 5,
              color: 'white',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                display:'none'
              },
            }}
          />
          <VolumeDownRoundedIcon sx={{color:'white', fontSize: '1.8rem' }}/>
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
            height: 5,
            width:500,
            '& .MuiSlider-thumb': {
              width: 12,
              height: 12,
              backgroundColor:'white',
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: 'none '
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
      </Stack>
      <Stack direction='row' alignItems='center'>
        <IconButton >
            <MoreVertIcon  sx={{color:'white', fontSize: '1.8rem'}}/>
        </IconButton>
      </Stack>
    </footer>
  )
}

export default Footer
