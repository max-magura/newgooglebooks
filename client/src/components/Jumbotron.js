import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';

function Jumbo() {
  return(
    <Jumbotron fluid>
      <Container>
        <h1>React/Google Book Search</h1>
        <p>
         Search for books and save the ones you are interested in.
        </p>
      </Container>
    </Jumbotron>

  )
}

export default Jumbo;