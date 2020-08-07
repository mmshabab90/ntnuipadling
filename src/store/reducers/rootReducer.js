import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const { default: authReducer } = require("./authReducer");
const { default: eventReducer } = require("./eventReducer");

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
