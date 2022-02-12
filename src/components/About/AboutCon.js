import React from 'react'
import card1 from '../../images/Image/card1.png'
import card2 from '../../images/Image/card2.png'
import card3 from '../../images/Image/card3.png'
import AboutCard from './AboutCard'
import './AboutCon.css'
function AboutCon() {
  const images=[card1,card2,card3]
  return (
    <div className='aboutCon1'>
      {
        images.map(i=><AboutCard image={i}></AboutCard>)
      }
    </div>
  )
}

export default AboutCon