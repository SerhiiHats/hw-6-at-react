import {Component} from "react";
import {addAC} from "./formAction";
import {connect} from "react-redux";
import styles from "./FormAuthorization.module.scss";

class FormAuthorization extends Component {
  state = {
    userName: "",
    userLastName: "",
    userEmail: "",
    userAuth: false,
    validate_userName: false,
    validate_userLastName: false,
    validate_userEmail: false,
  }

  handlerValue(e, valueName) {
    this.setState({[valueName]: e.target.value});
  }

  handlerValidateName(e, valueName) {
    const isValidName = /^[a-zA-Zа-яА-ЯІіЇїҐґ]+$/.test(e.target.value);
    isValidName ? this.setState({[`validate_${valueName}`]: true})
      : this.setState({[`validate_${valueName}`]: false});
    console.log(isValidName)
  }

  handlerValidateEmail(e, valueName) {
    const isValidEmail = /^\S+@\S+\.\S+$/.test(e.target.value);
    isValidEmail ? this.setState({[`validate_${valueName}`]: true})
      : this.setState({[`validate_${valueName}`]: false});
    console.log(isValidEmail)
  }

  cleanForm() {
    this.setState({
      userName: "",
      userLastName: "",
      userEmail: "",
    })
  }

  render() {

    const {dispatch} = this.props;
    const stylesInvalidName = (!this.state.validate_userName) ? styles.invalid : "";
    const stylesInvalidLastName = (!this.state.validate_userLastName) ? styles.invalid : "";
    const stylesInvalidEmail = (!this.state.validate_userEmail) ? styles.invalid : "";

    return (
      <div className={styles.containerForm}>
        <form className={styles.formFeedback}>

          <div className={styles.row}>
            <label>Ім'я<span>*</span>
              <input className={stylesInvalidName} type={"text"} name={"name"} id={"name"}
                     placeholder={"Enter your name..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userName");
                       this.handlerValidateName(e, "userName");
                     }} value={this.state.userName}/>
            </label>
          </div>

          <div className={styles.row}>
            <label>Прізвище<span>*</span>
              <input className={stylesInvalidLastName} type={"text"} name={"lastName"} id={"lastName"}
                     placeholder={"Enter your last name..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userLastName");
                       this.handlerValidateName(e, "userLastName");
                     }} value={this.state.userLastName}/>
            </label>
          </div>

          <div className={styles.row}>
            <label>E-mail<span>*</span>
              <input className={stylesInvalidEmail} type={"email"} name={"email"} id={"email"}
                     placeholder={"Enter your e-mail..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userEmail");
                       this.handlerValidateEmail(e, "userEmail");
                     }} value={this.state.userEmail} required/>
            </label>
          </div>

          <div className={styles.row}>
            <input className={styles.btnSubmit} type={"submit"} value={"Зареєструватися"}
                   onClick={(e) => {
                     e.preventDefault();
                     const {userName, userLastName, userEmail} = this.state;
                     this.setState({userAuth: {userName, userLastName, userEmail}});
                     // dispatch(addAC(this.state));
                     this.cleanForm();
                   }}/>
          </div>
        </form>

        {this.state.userAuth && <p>{JSON.stringify(this.state.userAuth)}</p>}
        <p>{this.state.validate_userName && "true UserName"}</p>
        <p>{this.state.validate_userLastName && "true LastName"}</p>
        <p>{this.state.validate_userEmail && "true UserEmail"}</p>

      </div>);
  }
}

const mapStateToProps = (store) => {
  return {
    dataRequest: store.dataRequest
  }
}

export default connect(mapStateToProps)(FormAuthorization);