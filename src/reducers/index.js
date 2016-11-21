import { combineReducers } from 'redux';

import route from './route';
import foods from './foods';


const rootReducer = combineReducers({
  route,
  foods,
});

export default rootReducer;
