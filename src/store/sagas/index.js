import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchOrder, postOrder} from '../api';

function* fetchOrderSaga() {
    try {
        const response = yield call(fetchOrder);
        //response.setHeader('Access-Control-Allow-Origin','localhost:3000');
        console.log(response);
        yield call(delay, 3000);
        yield put({type: "ORDER_FETCH_SUCCEEDED"});
    } catch (e) {
        yield put({type: "ORDER_FETCH_FAILED", message: e.message});
    }
}

function* postOrderSaga(action) {
    try {
        const response = yield call(postOrder, action.payload);
        //response.setHeader('Access-Control-Allow-Origin','localhost:3000');
        yield call(delay, 3000);
        yield put({type: "ORDER_POST_SUCCEEDED", payload: response.data.ETA});
        yield put({type: "OPEN_MODAL"});
    } catch (e) {
        yield call(delay, 3000);
        yield put({type: "ORDER_POST_FAILED", payload: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("ORDER_FETCH_REQUESTED", fetchOrderSaga);
    yield takeEvery("ORDER_POST_REQUESTED", postOrderSaga);
}

export default mySaga;