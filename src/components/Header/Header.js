import {Component} from "react";
import "./Header.css"

class Header extends Component {
  render() {
    const {nameTask, descriptionTask} = this.props;
    return (
      <header className="App-header">
        <h1>{nameTask}</h1>
        <p>{descriptionTask}</p>
      </header>
    );
  }
}

export default Header;