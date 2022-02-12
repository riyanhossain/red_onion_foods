import React from 'react'
import './AboutCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function AboutCard(props) {
  return (
    <div className='imageGrp1'>
      <img src={props.image} alt=""  className='imageGrp' />
      <h3>Fast Delivery</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eius dicta nemo porro at placeat labore laudantium magni delectus reiciendis, sit vitae facere voluptas, adipisci corporis. Expedita autem velit nemo?</p>
      <button className='seeBtn'>See more</button>
    </div>
  )
}

export default AboutCard