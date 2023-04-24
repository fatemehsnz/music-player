// import { ImageList, ImageListItem } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import Rightbar from './Rightbar'
import Content from './Content'
import Footer from './Footer'
import { Box, Stack } from '@mui/material'



function Home() {
  return (
    <Box >
    <Stack direction='row'>
      <Rightbar/>
      <Content/>
    </Stack>
    <Footer/>
    </Box>
  )
}

export default Home
