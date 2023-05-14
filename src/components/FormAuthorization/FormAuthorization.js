import "./FormAuthorization.scss"
import {Component} from "react";
import {addAC} from "./formAction";
import {connect} from "react-redux";

class FormAuthorization extends Component {
  state = {
    userName: "",
    userEmail: "",
    userComment: "",
  }

  handlerValue(e, valueName) {
    this.setState({[valueName]: e.target.value})
  }

  cleanForm() {
    this.setState({
      userName: "",
      userEmail: "",
      userComment: "",
    })
  }

  render() {

    const {dispatch} = this.props;

    return (
      <div className={"containerForm"}>
        <form className={"formFeedback"}>

          <div className={"row"}>
            <label>Ім'я<span>*</span>
              <input type={"text"} name={"name"} id={"name"} placeholder={"Enter your name..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userName")
                     }} value={this.state.userName}/>
            </label>
          </div>

          <div className={"row"}>
            <label>Прізвище<span>*</span>
              <input type={"text"} name={"name"} id={"name"} placeholder={"Enter your name..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userName")
                     }} value={this.state.userName}/>
            </label>
          </div>

          <div className={"row"}>
            <label>E-mail<span>*</span>
              <input type={"email"} name={"email"} id={"email"} placeholder={"Enter your e-mail..."}
                     onChange={(e) => {
                       this.handlerValue(e, "userEmail")
                     }} value={this.state.userEmail}/>
            </label>
          </div>

          <div className={"row"}>
            <input className={"btnSubmit"} type={"submit"} value={"Зареєструватися"}
                   onClick={(e) => {
                     e.preventDefault();
                     dispatch(addAC(this.state));
                     this.cleanForm();
                   }}/>
          </div>
        </form>

      </div>);
  }
}

const mapStateToProps = (store) => {
  return {
    dataRequest: store.dataRequest
  }
}

export default connect(mapStateToProps)(FormAuthorization);