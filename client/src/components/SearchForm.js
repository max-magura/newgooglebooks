import React, {Component} from "react";
import GoogleAPI from "./../utils/GoogleAPI";
import BookInfo from "./Bookinfo";
import {Form, Button, Col, Row, Container} from "react-bootstrap";
import API from "./../utils/API";
import './style.css';


export default class SearchForm extends Component {

  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    console.log("Welcome to the thunderdome");
  };

  searchBooks = query => {
    GoogleAPI.search(query)
      .then(res => {
        if (res.data.item === "error") {
          throw new Error(res.data.items);
      }
      else {
          // store response in a array
          let results = res.data.items
          //map through the array
          results = results.map(result => {
            //store each book information in a new object
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              publishedDate: result.volumeInfo.publishedDate,
              description: result.volumeInfo.description,
              imageUrl: result.volumeInfo.imageLinks.smallThumbnail,
              link: result.volumeInfo.infoLink
            }
            return result;
          })
          this.setState({ books: results, error: "" })
        }
      })
      .catch(err => console.log(err))        
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSaveBook = key => {
    console.log("hey I saved a book " + key)
    let bookSave = this.state.books.filter(b => b.key === key)
    console.log(bookSave[0])

    API.saveBook({
      title: bookSave[0].title,
      author: bookSave[0].author[0],
      publishedDate: bookSave[0].publishedDate,
      description: bookSave[0].description,
      imageUrl: bookSave[0].imageUrl,
      link: bookSave[0].infoLink
      })
        .then((res) => {console.log(res.data)})
        .catch(err => console.log(err));

  }

  render() {
    return(
      <Container>
      <Row className="justify-content-md-center">
      <Col>

        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Search Books Here</Form.Label>
            <Form.Control name="search"  value={this.state.search} type="text" onChange={this.handleInputChange} placeholder="Enter the title of the book you are searching for."/>
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>

        <Button disabled = {!(this.state.search)} 
            variant="primary" type="submit" 
            onClick={this.handleFormSubmit}
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            >
        Submit
        </Button>
        <br/>
        <br/>

        <div class="card-columns">
        {this.state.books.length ? (
          <div>
          {this.state.books.map(book =>
            (
                <BookInfo
                  title={book.title}
                  author={book.author}
                  publishedDate={book.publishedDate}
                  description={book.description}
                  imageUrl={book.imageUrl}
                  link={book.infoLink}
                  onClick={this.handleSaveBook}
                  id={book.key}
                  key={book.key}
                />
              )
  
              )}  </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
        </div>
             
      </Col>
      </Row>
      </Container>
    );
  };

}