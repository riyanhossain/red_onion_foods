import React, { useState } from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import ImageViewer from './ImageViewer';
import './ViewFoodItem.css'
import logo3 from '../../images/Breakfast/breakfast1.png'

function CarouselFoodItem(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    console.log(index)

    return (
        <div>
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={null} indicators={false}>
            {props.im.map(image=><CarouselItem>
                    <img src={image} style={{ height: '150px', marginLeft: '50%' }} onClick={()=>props.setImage(image)}/>
                </CarouselItem>)
            }
                


            </Carousel>
        </div>
    )
}

export default CarouselFoodItem