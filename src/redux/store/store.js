import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
/* import { productosReducers } from "../reducers/productosReducers";
import { userReducers } from "../reducers/UserReducers" */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  /* users: userReducers,
  productos: productosReducers, */
})

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);