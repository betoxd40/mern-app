// Actions
const CHANGE_HANDLER = 'CHANGE_HANDLER';

const initialState = {
    personalInfo: null,
    meals: [],
    totalCost: 0,
    email: '',
    address: '',
    location: null,
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case CHANGE_HANDLER: {
            return { ...state, [action.payload.name]: action.payload.value,  };
        }
        default:
            return state;
    }
}

// Actions Creators
export function handleChange( change ) {
    return {
        type: CHANGE_HANDLER,
        payload: change,
    };
}
