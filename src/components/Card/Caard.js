import React, { useState } from 'react'
import ReactDOM from "react-dom";
import { Button, Card } from 'react-bootstrap'
import './Caard.css'

function Caard(props) {
    const handleClick = () => {
        props.setView(true)
        props.setImage(props.image)
        // document.getElementsById('cardGrp').style.height='600px';
        // document.getElementsById('cardGrp').style.display='block';
    }
    return (
        <div className='cardGrp' id='cardGrp'>
            <Card className='card' onClick={() =>handleClick()}>
                <Card.Img variant="top" className='card1' src={props.image} />
                <Card.Body>
                    <h5>Card title</h5>
                    <p>
                        Some quick example text to build on the card title.
                    </p>
                    <h5>$23.39</h5>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Caard