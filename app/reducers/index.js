import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import challenge from './challenge';

const rootReducer = combineReducers({
  counter,
  challenge,
  routing
});

export default rootReducer;
