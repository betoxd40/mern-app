import { combineReducers } from 'redux';
import OrderReducer from './order';
import ModalReducer from './modal';

const rootReducer = combineReducers( {
    order: OrderReducer,
    modal: ModalReducer,
} );

export default rootReducer;