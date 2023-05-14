import {Component} from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    const {nameTask, descriptionTask} = this.props;
    return (
      <header className={styles.AppHeader}>
        <h1>{nameTask}</h1>
        <p>{descriptionTask}</p>
      </header>
    );
  }
}

export default Header;