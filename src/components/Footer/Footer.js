import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './Footer.css'
import logo2 from '../../images/logo.png'

function Footer() {
  return (
    <div className='Container'>
      <Container>
        <Row>
          <Col sm={6}>
            <img src={logo2} alt="logo" className='logo2' />
          </Col>
          <Col sm={6}>
            <div className='footCon'>
              <Col sm={6} >
                <ul className='listFoot'>
                  <li>About Online food</li>
                  <li> Read our blog</li>
                  <li> Sign uo to deliver</li>
                  <li> Add your restaurant</li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul className='listFoot'>
                  <li>About Online food</li>
                  <li> Read our blog</li>
                  <li> Sign uo to deliver</li>
                  <li> Add your restaurant</li>
                </ul>
              </Col>
            </div>

          </Col>
        </Row>
        <Row>
          <div className='resFoot'>
            <Col sm={8} >
              <p style={{ fontSize: '15px' }}>Copyright @ 2022 Riyan Hossain</p>
            </Col>
            <Col sm={4} className='policy'>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Terms of use</a>
              <a href='#'>Pricing</a>
            </Col>

          </div>

        </Row>
      </Container>

    </div>
  )
}

export default Footer