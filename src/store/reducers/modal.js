// Actions
const OPEN_MODAL = 'OPEN_MODAL';

const initialState = {
    show: false,
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case OPEN_MODAL: {
            return { ...state, show: !state.show,  };
        }
        default:
            return state;
    }
}

// Actions Creators
export function handleModal() {
    return {
        type: OPEN_MODAL,
    };
}
