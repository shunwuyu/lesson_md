import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from "redux-thunk";
import logger from 'redux-logger'
const composeEnhancers = 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    compose(
        composeEnhancers(applyMiddleware(thunk)),
        applyMiddleware(logger)
    )
  )

export default store