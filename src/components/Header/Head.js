import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import './Header.css'
function Head() {
  return (
    <div className='head'>
        <h1>Best food waiting for your bally</h1>
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
  )
}

export default Head