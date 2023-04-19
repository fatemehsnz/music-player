import { Box, Typography } from '@mui/material'
import React from 'react'

const MusicItem = (props) => {
  return (
    <div>
        <Box
            component="img"
            sx={{height: '170px',borderRadius:4}}
            alt="cover"
            src={props.music.img}
        />
        <Typography sx={{fontSize:'1.2em' ,fontWeight:500,color:'white'}}>{props.music.name}</Typography>
        <Typography sx={{fontSize:'0.8em' ,fontWeight:300,color:'#999999'}}>{props.music.singer}</Typography>
    </div>
  )
}

export default MusicItem
