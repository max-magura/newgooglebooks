import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Navtop (props) {

  return(
   
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={props.showSearch}>Google Books App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={props.showSearch}>Search</Nav.Link>
        <Nav.Link onClick={props.showSaved}>Saved</Nav.Link>
      </Nav>
    </Navbar>
  )

}


export default Navtop;
