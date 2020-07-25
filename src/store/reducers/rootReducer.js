import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
const { default: authReducer } = require("./authReducer");
const { default: eventReducer } = require("./eventReducer");

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
