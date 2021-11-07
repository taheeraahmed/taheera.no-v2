import React from 'react';
import Typography from '@mui/material/Typography';
import './card.scss'

const Card = ({src, heading, children}) => {
  return (
      <div className="card">
        <img style={{borderTopLeftRadius: '0.6em', borderBottomLeftRadius: '0.6em'}}src={src} width="200" alt={heading}/>
        <div className="text">
        <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {children}
          </Typography>
          </div>
      </div>
          
  );
}
export default Card;