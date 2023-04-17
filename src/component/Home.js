// import { ImageList, ImageListItem } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Content from './Content'
import {Box} from '@mui/material'



function Home() {
  return (
  <Grid2 container>
    <Grid2 sm={1.6} xl={1.4} sx={{display : {xs: 'none',sm:'block'}}}>
      <Rightbar/>
    </Grid2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container >
        <Grid2 sm={12}>
          <div>xs</div>
        </Grid2>
        <Grid2 sm={9} xs={10} xl={9}>
          <Content/>
        </Grid2>
        <Grid2 sm={3} xs={2} xl={3}>
        <Leftbar/>
        </Grid2>
      </Grid2>
    </Box>
  </Grid2>
  )
}

export default Home