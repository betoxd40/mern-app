import reducers from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(mySaga);

export default store;