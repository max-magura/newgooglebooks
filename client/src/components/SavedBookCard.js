import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";

export default class SavedBook extends Component {

  deleteBook = event => {
    console.log ("MAAASX ", this.props.id)
    event.preventDefault();
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
          <Button variant="primary" onClick={this.deleteBook}>Delete Book</Button>
        </Card.Body>
    </Card>
      <br/> 
    </React.Fragment>

  );
}
}