import { combineReducers } from 'redux';
import OrderReducer from './order';

const rootReducer = combineReducers( {
    user: OrderReducer,
} );

export default rootReducer;