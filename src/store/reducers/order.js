// Actions
const CHANGE_HANDLER = 'CHANGE_HANDLER';
const CHANGE_CHECKHBOX = 'CHANGE_CHECKHBOX';
const CHANGE_ADDRESS = 'CHANGE_ADDRESS';

const initialState = {
    name: '',
    lastName: '',
    number: '',
    meals: [],
    totalCost: 0,
    email: '',
    address: '',
    location: null,
    dummyMeals: [
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        }
    ],
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case CHANGE_HANDLER: {
            return { ...state, [action.payload.name]: action.payload.value,  };
        }
        case CHANGE_ADDRESS: {
            return { ...state, [initialState.address]: action.payload,  };
        }
        case CHANGE_CHECKHBOX: {
            return {
                ...state,
                dummyMeals: state.dummyMeals.map(
                    (meal, i) => i === action.payload ? {...meal,  checked: !meal.checked} : meal,
                ),
                  };
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
export function handleCheckbox( index ) {
    return {
        type: CHANGE_CHECKHBOX,
        payload: index,
    };
}
export function changeAddress( address ) {
    return {
        type: CHANGE_ADDRESS,
        payload: address,
    };
}
