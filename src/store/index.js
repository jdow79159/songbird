import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import birdsReducer from './reducers/birds';

export const rootReducer = combineReducers({
  birds: birdsReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
