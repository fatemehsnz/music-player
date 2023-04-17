import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function UserItem(props) {
  return (
    <Link to={`/${props.user.id}/places`} style={{textDecoration: "none"}}>
    <Card sx={{ maxWidth: 270 , m: 3 } } >
        <Avatar alt={props.user.userName} src={props.user.img} sx={{ m: 3 }}/>
        <CardContent >
            <Typography gutterBottom variant="h5" component="div">
                {props.user.userName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {props.user.firstName} {props.user.lastName}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                placeCount : {props.user.places}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">follow</Button>
        </CardActions>
    </Card>
    </Link>
  )
}

export default UserItem
