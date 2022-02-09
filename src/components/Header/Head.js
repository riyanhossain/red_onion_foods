import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import './Header.css'
import bg from '../../images/bannerbackground.png'

function Head() {
  return (
    <div className='bg'>
      <div className='head'>
        <h1>Best food waiting for your belly</h1>
        <div>
          <Form className="d-flex Searchform">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-0 SearchBar"
              aria-label="Search"
            />
            <Button variant="danger" className='SearchBtn'>Sign up</Button>
          </Form>
        </div>

      </div>
    </div>

  )
}

export default Head