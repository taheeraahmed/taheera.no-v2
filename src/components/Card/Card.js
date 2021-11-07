import React from 'react';
import {Card as CardMui} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Card = ({src, heading, text}) => {
  return (
    <CardMui sx={{ maxWidth: 345}} elevation={0}>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt={heading}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
    </CardMui>
  );
}
export default Card;