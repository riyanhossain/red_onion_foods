import React from 'react'
import Caard from '../Card/Caard'

import breakfast1 from '../../images/Breakfast/breakfast1.png'
import breakfast2 from '../../images/Breakfast/breakfast2.png'
import breakfast3 from '../../images/Breakfast/breakfast3.png'
import breakfast4 from '../../images/Breakfast/breakfast4.png'
import breakfast5 from '../../images/Breakfast/breakfast5.png'
import breakfast6 from '../../images/Breakfast/breakfast6.png'
import './FContainer.css'

function Breakfast() {
  const images=[breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
     breakfast5,
    breakfast6]
  return (
    <div className='cardGrp'>
      {
        images.map(i=><Caard image={i}></Caard>)
      }
    </div>
  )
}

export default Breakfast