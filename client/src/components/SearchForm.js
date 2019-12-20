import React, {Component} from "react";
import GoogleAPI from "./../utils/GoogleAPI";
import BookInfo from "./Bookinfo";
import {Form, Button, Col, Row, Container} from "react-bootstrap";
import API from "./../utils/API";


export default class SearchForm extends Component {

  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    console.log("Welcome to the thunderdome");
    // console.log(this.state.books)
  };

  searchBooks = query => {
    GoogleAPI.search(query)
      .then(res => this.setState({ books: res.data.items[0].volumeInfo}))
      .catch(err => console.log(err))
      console.log(this.state.books)

      // const booksArray = this.state.books
      // console.log(booksArray)
  
      // const booksArray = this.state.books
      // console.log(booksArray)

      // const mapCocktail = function (booksArray) {
  
      //   const searchBooksArray = booksArray.map(volumeInfo  =>
      //       {
      //         return{
      //           title: volumeInfo.title
      //             // glass: drink.strGlass,
      //             // instructions: drink.strInstructions,
      //         }
      //       }
      //   );
      //   return searchBooksArray
      // }

      // this.setState({ books: searchBooksArray\))
        
  };

  // .then(res => console.log(res.data.items[1].volumeInfo ))
  // .then(res => this.setState({ books: res.data.items[1].volumeInfo }))

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

  loadSavedBooks = () =>{
    console.log("HEY I DID IT!!")
  }

  handleSaveBook = () =>{
    // event.preventDefault();
    console.log("hey hey hey")

    API.saveBook({
      title: this.state.books.title,
      author: this.state.books.authors,
      publishedDate: this.state.books.publishedDate,
      description: this.state.books.description,
      imageUrl: this.state.books.imageLinks.smallThumbnail,
      link: this.state.books.infoLink
      })
        .then((res) => {console.log(res.data);this.loadSavedBooks()})
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
            // handleInputChange={this.handleInputChange}
            // handleFormSubmit={this.handleFormSubmit}
            >
        Submit
        </Button>
        <br/>
        <br/>

        {this.state.books.title ? (
                <BookInfo
                  title={this.state.books.title}
                  author={this.state.books.authors}
                  publishedDate={this.state.books.publishedDate}
                  description={this.state.books.description}
                  imageUrl={this.state.books.imageLinks.smallThumbnail
                  }
                  link={this.state.books.infoLink}
                  onClick={this.handleSaveBook}
                  id={this.state.books.title}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
        
      </Col>
      </Row>
      </Container>
    );
  };

}