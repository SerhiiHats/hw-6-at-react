import styles from './App.scss';
import Header from "../Header/Header";
import {connect} from "react-redux";
import React, {Component} from 'react';
import FormAuthorization from "../FormAuthorization/FormAuthorization";
import formReducer from "../FormAuthorization/formReducer";

class App extends Component {
  render() {
    const {headerReducer, formReducer} = this.props;
    return (
      <div className={"app"}>
        <Header nameTask={headerReducer.task1} descriptionTask={headerReducer.description1}/>
        <Header nameTask={headerReducer.task2} descriptionTask={headerReducer.description2}/>
        <FormAuthorization/>
        <div className={"answerRedux"}>
          <p>From REDUX: {formReducer.request ? '"submit success"' : "is not sent request for authorization"}</p>
          <p>{formReducer.request && JSON.stringify(formReducer.request)}</p>
        </div>

      </div>
    );
  }
}

export const mapStoreToProps = (store) => {

  return {
    headerReducer: store.headerReducer,
    formReducer: store.formReducer,

  }
}
export default connect(mapStoreToProps)(App);
