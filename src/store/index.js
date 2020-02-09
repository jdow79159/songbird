import { createStore, combineReducers } from 'redux';
import { birdsReducer } from './reducers/birds';

const rootReducer = combineReducers({
  birds: birdsReducer,
});
export default createStore(rootReducer);
