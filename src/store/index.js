import { createStore, combineReducers } from 'redux';
import birdsReducer from './reducers/birds';

export const rootReducer = combineReducers({
  birds: birdsReducer,
});
export default createStore(rootReducer);
