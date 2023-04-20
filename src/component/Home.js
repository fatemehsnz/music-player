// import { ImageList, ImageListItem } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import Rightbar from './Rightbar'
import Content from './Content'
import Footer from './Footer'
import { Box, Stack } from '@mui/material'



function Home() {
  return (
    <Box>
    {/* <Grid2 container>
      <Grid2 sm={1.6} xl={1.4} sx={{display : {xs: 'none',sm:'block'}}}>
        <Rightbar/>
      </Grid2>
      <Grid2 sm={10.4} xl={10.6}>
        <Content/>
      </Grid2>
    </Grid2> */}
    <Stack direction='row'>
      <Rightbar/>
      <Content/>
    </Stack>
    {/* <Footer/> */}
    </Box>
  )
}

export default Home
