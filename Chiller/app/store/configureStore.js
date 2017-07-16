import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import profileReducers from '../reducers/profileReducers';
// import reducer from '../reducers'

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
const reducer = combineReducers({
    profile: profileReducers,
})

  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );


export const store = createStore(reducer, enhancer);;
