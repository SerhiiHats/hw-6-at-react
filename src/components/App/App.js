import './App.css';
import Header from "../Header/Header";
import {connect} from "react-redux";
import React, {Component} from 'react';
import FormAuthorization from "../FormAuthorization/FormAuthorization";

class App extends Component {
  render() {
    const {headerReducer} = this.props;
    return (
      <div className="App">
        <Header nameTask={headerReducer.task1} descriptionTask={headerReducer.description1}/>
        <FormAuthorization/>
        <Header nameTask={headerReducer.task2} descriptionTask={headerReducer.description2}/>

      </div>
    );
  }
}

export const mapStoreToProps = (store) => {
  // console.log(store)
  return {
    headerReducer: store.headerReducer
  }
}
export default connect(mapStoreToProps)(App);
