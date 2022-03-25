import { combineReducers } from 'redux';
import { todoReducers, loginReducers } from './Reducer';

const RootReducer = combineReducers({
   todo: todoReducers,
   login: loginReducers
});

export default RootReducer;