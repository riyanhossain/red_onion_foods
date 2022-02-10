import React from 'react'
import Caard from '../Card/Caard'

import dinner1 from '../../images/Dinner/dinner1.png'
import dinner2 from '../../images/Dinner/dinner2.png'
import dinner3 from '../../images/Dinner/dinner3.png'
import dinner4 from '../../images/Dinner/dinner4.png'
import dinner5 from '../../images/Dinner/dinner5.png'
import dinner6 from '../../images/Dinner/dinner6.png'
import './FContainer.css'

function Dinner() {
  const images=[
    dinner1,
    dinner2,
    dinner3,
    dinner4,
    dinner5,
    dinner6]
  return (
    <div className='cardGrp'>
      {
        images.map(i=><Caard image={i}></Caard>)
      }
    </div>
  )
}


export default Dinner