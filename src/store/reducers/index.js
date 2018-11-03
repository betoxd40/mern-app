import { combineReducers } from 'redux';
import OrderReducer from './order';
import ModalReducer from './modal';
import SagaReducer from './sagas';

const rootReducer = combineReducers( {
    order: OrderReducer,
    modal: ModalReducer,
    saga: SagaReducer,
} );

export default rootReducer;