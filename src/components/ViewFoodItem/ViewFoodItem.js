import React, { useState } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import './ViewFoodItem.css'

function ViewFoodItem(props) {
    let [quantity, setQuantity] = useState(0)
    const handleQuantity = (q) => {
        if (quantity >= 0) {
            if (q === 1)
                var newquantity = quantity + 1;
            else if (q === 2)
                var newquantity = quantity - 1;
            setQuantity(newquantity)
        }
        else {
            setQuantity(0)
        }


    }
    console.log(quantity)
    return (
        <div className='viewItem'>
            <Row className='Row'>
                <Col xs={6} className='col1'>
                    <h1>Light Breakfast</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, deleniti doloremque dolorum, optio libero soluta neque harum amet illum labore ab a ad rem nulla deserunt placeat culpa natus. Accusamus?</p>
                    <div className='stepper'>
                        <h3>$55</h3>
                        <button className='btn1' onClick={() => handleQuantity(1)}>+</button>
                        <h3>{quantity}</h3>
                        <button className='btn2' onClick={() => handleQuantity(2)}>-</button>
                    </div>

                    <button className='addBtn'>Add</button>
                </Col>
                <Col xs={6} className='col2'>
                    <img src={props.im} alt="" className='imageCon' />
                </Col>
            </Row>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="caroImage"
                        src={props.im}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroImage"
                        src={props.im}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroImage"
                        src={props.im}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default ViewFoodItem