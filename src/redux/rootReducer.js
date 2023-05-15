import {combineReducers} from "redux";
import headerReducer from "../components/Header/headerReducer";
import formReducer from "../components/FormAuthorization/formReducer";


export default combineReducers({
  headerReducer,
  formReducer
});


