// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducer';
// import thunkMiddleware from 'redux-thunk'

// const composed = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware))
// const store = createStore(
//   rootReducer,
//   composed
// );
// export default store;


import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer.js";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
