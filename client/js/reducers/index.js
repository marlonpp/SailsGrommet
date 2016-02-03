import { combineReducers } from 'redux';
import customer from './customer.reducers';

const rootReducer = combineReducers({
  customer
});

export default rootReducer;
