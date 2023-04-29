import { Box, Stack,Button, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import neshan from '../assets/neshan.jpg'


const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  fontSize: 16,
  borderRadius: 16,  //theme.shape.borderRadius
  width : 165,
  height : 55,
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
const Leftbar = () => {
  return (
    <div>
      <Stack sx={{maxWidth: 300,backgroundColor:'#1e1e1e' ,borderRadius:4,height:309,alignItems:'center',justifyContent:'center',mt:2.5}}>
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
      {/* <Stack>
        <Paper sx={{display: 'flex',alignItems: 'center',height : 55,backgroundColor:'#1e1e1e',borderRadius:4,maxWidth:300,color: 'white',mt:5}}>
          <CustomButton variant="contained" disableRipple>
            تاریخچه‌پخش
          </CustomButton>
          <CustomButton variant="contained" disableRipple>
            محبوب‌ترین‌آهنگ‌ها
          </CustomButton>
        </Paper>
        <Stack sx={{maxWidth: 300,backgroundColor:'#1e1e1e' ,borderRadius:4,maxHeight:500,mt:5,mb:5}}>
          hi
        </Stack>
      </Stack> */}
    </div>
  )
}

export default Leftbar

