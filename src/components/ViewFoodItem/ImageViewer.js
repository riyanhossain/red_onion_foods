import React from 'react'
import './ViewFoodItem.css'

function ImageViewer(props) {
  return (
    <div>
        <img src={props.image} className='imageCon' alt="" />
    </div>
  )
}

export default ImageViewer