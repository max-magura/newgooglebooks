import React, { Component } from "react";
import {Card, Button} from "react-bootstrap";


export default class BookInfo extends Component {

  addBook = event => {
    event.preventDefault();
    console.log(this.props.id)
    this.props.onClick(this.props.id)
  }
  
  render () {
    return (
    <React.Fragment>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img src={this.props.imageUrl} />
          <Card.Title>Title: {this.props.title}</Card.Title>
          <Card.Text>
            Written By: {this.props.author}
          </Card.Text>
          <Card.Text>
          Published On: {this.props.publishedDate}
          </Card.Text>
          <Button variant="primary" onClick={this.addBook}>Save Book</Button>
        </Card.Body>
    </Card>
      <br/> 
    </React.Fragment>
    )
  }
}