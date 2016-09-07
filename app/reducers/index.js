import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import challenges from './challenges';

const rootReducer = combineReducers({
  counter,
  challenges,
  routing
});

export default rootReducer;
