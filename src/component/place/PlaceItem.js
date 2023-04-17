import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function PlaceItem(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 445 , m : 3}}>
      <CardMedia
        sx={{ height: 240 }}
        image={props.place.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.place.title}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {props.place.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.place.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">like</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default PlaceItem
