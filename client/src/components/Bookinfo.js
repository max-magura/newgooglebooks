import React from "react";
import {Card, Button} from "react-bootstrap";

function BookInfo(props) {
  return (
    <React.Fragment>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img src={props.imageUrl} />
          <Card.Title>Title: {props.title}</Card.Title>
          <Card.Text>
            Written By: {props.author}
          </Card.Text>
          <Card.Text>
          Published On: {props.publishedDate}
          </Card.Text>
          <Button variant="primary" onClick={props.onClick}>Save Book</Button>
        </Card.Body>
    </Card>
      <br/> 
    </React.Fragment>

  );
}

{/* <div className="text-center">
<img alt={props.title} className="img-fluid" src={props.imageUrl} style={{ margin: "0 auto" }} />
<h3>Title: {props.title}</h3>
<h3>Author: {props.author}</h3>
<h3>Published Date: {props.publishedDate}</h3>
</div> */}

// onClick={props.saveBook(props.id)}

export default BookInfo;