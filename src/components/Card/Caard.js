import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Caard.css'

function Caard(props) {
    return (
        <div className='cardGrp'>
            <Card className='card'>
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