import { combineReducers } from "redux";

import counterReducer from "../reducers/counter.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
