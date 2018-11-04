// Actions
const ORDER_FETCH_REQUESTED = 'ORDER_FETCH_REQUESTED';
const ORDER_FETCH_SUCCEEDED = 'ORDER_FETCH_SUCCEEDED';
const ORDER_FETCH_FAILED = 'ORDER_FETCH_FAILED';

const ORDER_POST_REQUESTED = 'ORDER_POST_REQUESTED';
const ORDER_POST_SUCCEEDED = 'ORDER_POST_SUCCEEDED';
const ORDER_POST_FAILED = 'ORDER_POST_FAILED';

const initialState = {
    loading: false,
    eta: null,
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case ORDER_FETCH_REQUESTED: {
            return {...state, loading: true}
        }
        case ORDER_FETCH_SUCCEEDED: {
            return {...state, loading: false}
        }
        case ORDER_FETCH_FAILED: {
            return {...state, loading: false}
        }
        case ORDER_POST_REQUESTED: {
            return {...state, loading: true}
        }
        case ORDER_POST_SUCCEEDED: {
            return {...state, loading: false, eta: action.payload}
        }
        case ORDER_POST_FAILED: {
            return {...state, loading: false}
        }
        default:
            return state;
    }
}