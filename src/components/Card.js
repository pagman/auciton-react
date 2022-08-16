import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import "../App.css"

const bull = (
  <Box 
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
  </Box>
);

export default function BasicCard(props) {
  return (
    <div className = 'myCard'>
    <Card sx={{ minWidth: 275 }}>
    <CardMedia
        component="img"
        height="160"
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.header}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.subtitle}
        </Typography>
        <Typography variant="body2">
          {props.text}.
          <br />
          {props.text}.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
