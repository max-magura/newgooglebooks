import React, {Component} from "react";
import Navtop from "./Nav";
import Jumbo from "./Jumbotron";
import SearchForm from "./SearchForm";
import SavedBooks from "./SavedBooks";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerShowSaved = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isShowSaved: true,
      isShowSearch: false
    })
  };

  triggerShowSearch = () => {
    this.setState({
      ...this.state,
      isEmptyState: true,
      isShowSaved: false,
      isShowSearch: true
    })
  };

  componentDidMount() {
    this.triggerShowSearch();
  };

  render() {
    return (
      <React.Fragment>
        <Navtop showSaved={this.triggerShowSaved} showSearch={this.triggerShowSearch}/>
        <Jumbo />
        {this.state.isShowSearch && <SearchForm />}
        {this.state.isShowSaved && <SavedBooks />}
      </React.Fragment>
    );
  };
};
