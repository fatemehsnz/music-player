// import { ImageList, ImageListItem } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import Content from './Content'
import Header from './Header'
import {Box} from '@mui/material'
import Navbar from './Navbar'



function Home() {
  return (
    <Grid2 container>
      <Grid2 sm={1.6} xl={1.4} sx={{display : {xs: 'none',sm:'block'}}}>
        <Rightbar/>
      </Grid2>
      <Grid2 sm={10.4} xl={10.6}>
        <Content/>
      </Grid2>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid2 container >
          <Grid2 sm={12}>
            <Header/>
          </Grid2>
          <Grid2 sm={9} xs={10} xl={9}>
            <Content/>
          </Grid2>
          <Grid2 sm={3} xs={2} xl={3}>
          <Leftbar/>
          </Grid2>
        </Grid2>
      </Box> */}
    </Grid2>
  )
}

export default Home
