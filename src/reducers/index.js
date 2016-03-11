import {combineReducers} from 'redux';
import {counter} from '../events/counter';

const reducer = combineReducers({
  counter,
});

export default reducer;
