import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "../App.css"



export default function UserCard(props) {
  return (
    <div className = 'myCard'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.username}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small"> More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
