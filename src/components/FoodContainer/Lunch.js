import React from 'react'
import Caard from '../Card/Caard'

import lunch1 from '../../images/lunch/lunch1.png'
import lunch2 from '../../images/lunch/lunch2.png'
import lunch3 from '../../images/lunch/lunch3.png'
import lunch4 from '../../images/lunch/lunch4.png'
import lunch5 from '../../images/lunch/lunch5.png'
import lunch6 from '../../images/lunch/lunch6.png'
import './FContainer.css'

function Lunch() {
  const images=[
    lunch1,
    lunch2,
    lunch3,
    lunch4,
    lunch5,
    lunch6]
  return (
    <div className='cardGrp'>
      {
        images.map(i=><Caard image={i}></Caard>)
      }
    </div>
  )
}

export default Lunch