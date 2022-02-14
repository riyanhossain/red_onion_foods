import React, { useState } from 'react'
import Caard from '../Card/Caard'

import breakfast1 from '../../images/Breakfast/breakfast1.png'
import breakfast2 from '../../images/Breakfast/breakfast2.png'
import breakfast3 from '../../images/Breakfast/breakfast3.png'
import breakfast4 from '../../images/Breakfast/breakfast4.png'
import breakfast5 from '../../images/Breakfast/breakfast5.png'
import breakfast6 from '../../images/Breakfast/breakfast6.png'
import './FContainer.css'
import ViewFoodItem from '../ViewFoodItem/ViewFoodItem'

function Breakfast() {
  const [view,setView]=useState(false)
  const [image,setImage]=useState([])
  const images=[breakfast1,
    breakfast2,
    breakfast3,
    breakfast4,
     breakfast5,
    breakfast6]
    console.log(view)

  return (
    <div className='cardGrp'>
      {
         view?<ViewFoodItem im={image} images={images}/>:
         images.map(i=>
          <Caard image={i} setView={setView} setImage={setImage} ></Caard>)
      }
    </div>
  )
}

export default Breakfast