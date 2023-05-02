import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const MusicItem = (props) => {
  return (
    <Stack >
        <Box
            component="img"
            sx={{maxWidth:'169px',width:'100%',borderRadius:4}}
            alt="cover"
            src={props.music.img}
        />
        <Typography  sx={{fontSize:'1em',fontFamily:'msi' ,fontWeight:600,color:'white'}}>{props.music.name}</Typography>
        <Typography  sx={{fontSize:'0.7em' ,fontFamily:'msi',fontWeight:400,color:'#999999'}}>{props.music.singer}</Typography>
    </Stack>
  )
}

export default MusicItem
