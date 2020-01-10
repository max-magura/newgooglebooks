import React,  {Component} from "react";
import SavedBook from "./SavedBookCard";
import {Col, Row, Container} from "react-bootstrap";
import API from "../utils/API";


export default class SavedBooks extends Component {
  
  state = {
    books: [],
    search: ""
  };

  componentDidMount(){
    this.loadBooks();
  }

  loadBooks =  () => {
    API.getBooks().then(
        res => {
            this.setState(
              {
                books: res.data,
                title: "",
                author: "",
                publishedDate: "",
                description: "",
                imageUrl: "",
                link: ""
              });
            console.log("the state is", this.state.books);
        }).catch(
            err => console.log(err)
        )
  }

  deleteBook = id => {
    console.log("HEEEEY" + id);
    API.deleteBook(id)
     .then(res => this.loadBooks())
     .catch(err => console.log(err));
  };


  render()
      {
        return(
          <Container>
          <Row className="justify-content-md-center">
          <Col>
          
          <div class="card-columns">
          {this.state.books.length ? (
            <div>
            {this.state.books.map(book =>
              (
                  <SavedBook
                    title={book.title}
                    author={book.author}
                    publishedDate={book.publishedDate}
                    description={book.description}
                    imageUrl={book.imageUrl}
                    link={book.infoLink}
                    onClick={this.deleteBook}
                    id={book._id}
                    key={book.key}
                  />
                )
    
                )}  </div>
                ) : (
                  <h3>No Books Saved</h3>
                )}
            </div>
          </Col>
          </Row>
          </Container>
      );
    }
}