import React from 'react'
import { Row } from 'react-bootstrap'
import './About.css'
import AboutCon from './AboutCon'

function About() {
  return (
    <div>
      <div className='aboutCon'>
        <div className='checkbtndiv'>
          <button className='checkbtn'>Checkout your food</button>
        </div>
        <h3>Why you choose us</h3>
        <p>Barton waited twenty always repair in within we do.An delighted offering
          <br/>
          curiosity my is dashwoods at. Boy prosperous increasing surrounded.
        </p>
      </div>
      <div className='conF'>
      <AboutCon/>
      </div>

    </div>
  )
}

export default About