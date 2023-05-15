import {Component} from "react";
import {ADD_REQUEST, addAC, formAction} from "./formAction";
import {connect} from "react-redux";
import styles from "./FormAuthorization.module.scss";

class FormAuthorization extends Component {
  state = {
    userName: "",
    userLastName: "",
    userEmail: "",
    userAuth: false,
    validate_userName: true,
    validate_userLastName: true,
    validate_userEmail: true,
  }

  handlerValue(e, valueName) {
    this.setState({[valueName]: e.target.value});
  }

  isValidate() {
    const VALIDATE_USER_NAME = /^[a-zA-Zа-яА-ЯІіЇїҐґ]+$/.test(this.state.userName);
    const VALIDATE_USER_LAST_NAME = /^[a-zA-Zа-яА-ЯІіЇїҐґ]+$/.test(this.state.userLastName);
    const VALIDATE_USER_EMAIL = /^\S+@\S+\.\S+$/.test(this.state.userEmail);
    const USER_AUTH = VALIDATE_USER_NAME && VALIDATE_USER_LAST_NAME && VALIDATE_USER_EMAIL;

    this.setState({
      userAuth: USER_AUTH,
      validate_userName: VALIDATE_USER_NAME,
      validate_userLastName: VALIDATE_USER_LAST_NAME,
      validate_userEmail: VALIDATE_USER_EMAIL,
    });

    return USER_AUTH;
  }

  cleanForm() {
    this.setState({
      userName: "",
      userLastName: "",
      userEmail: "",
    });
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
                     }} value={this.state.userName}/>
            </label>
          </div>

          <div className={styles.row}>
            <label>Прізвище<span>*</span>
              <input className={stylesInvalidLastName} type={"text"} name={"lastName"} id={"lastName"}
                     placeholder={"Enter your last name..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userLastName");
                     }} value={this.state.userLastName}/>
            </label>
          </div>

          <div className={styles.row}>
            <label>E-mail<span>*</span>
              <input className={stylesInvalidEmail} type={"email"} name={"email"} id={"email"}
                     placeholder={"Enter your e-mail..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userEmail");
                     }} value={this.state.userEmail} required/>
            </label>
          </div>

          <div className={styles.row}>
            <input className={styles.btnSubmit} type={"submit"} value={"Зареєструватися"}
                   onClick={(e) => {
                     e.preventDefault();
                     const validate = this.isValidate();

                     if(validate){
                       const {userName, userLastName, userEmail} = this.state;
                       this.setState({userAuth: {userName, userLastName, userEmail}});
                       dispatch(formAction({userName, userLastName, userEmail}));
                       this.cleanForm();
                     }
                   }}/>
          </div>
        </form>

        <div className={styles.answer}>
          <p>From State: {this.state.userAuth ? '"submit success"' : "is not sent request for authorization"}</p>
          <p>{this.state.userAuth && JSON.stringify(this.state.userAuth)}</p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    dataRequest: store.dataRequest,
    formReducer: store.formReducer,
  }
}

export default connect(mapStateToProps)(FormAuthorization);