// Actions
const CHANGE_HANDLER = 'CHANGE_HANDLER';
const CHANGE_CHECKHBOX = 'CHANGE_CHECKHBOX';
const CHANGE_ADDRESS = 'CHANGE_ADDRESS';
const CHANGE_TOTAL = 'CHANGE_TOTAL';
const CHANGE_LOCATION = 'CHANGE_LOCATION';

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
            name: 'Meat in the shape of chihuahua with oyster sauce',
            price: 78,
            checked: false,
        },
        {
            name: 'Lamb alive burned at the moment',
            price: 120,
            checked: false,
        },
        {
            name: 'Face',
            price: 200,
            checked: false,
        },
        {
            name: 'Surprise dish',
            price: 99,
            checked: false,
        },
        {
            name: 'item',
            price: 100,
            checked: false,
        },
        {
            name: 'Salad with expired eggplant',
            price: 100,
            checked: false,
        },
        {
            name: 'Pigeon Cake',
            price: 70,
            checked: false,
        },
        {
            name: 'Donation jeje',
            price: 500,
            checked: false,
        }
    ],
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case CHANGE_HANDLER: {
            return { ...state, [action.payload.name]: action.payload.value,  };
        }
        case CHANGE_LOCATION: {
            return { ...state, location: action.payload,  };
        }
        case CHANGE_ADDRESS: {
            return { ...state, address: action.payload,  };
        }
        case CHANGE_TOTAL: {
            return { ...state, totalCost: state.totalCost + action.payload,  };
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
export function changeLocation( location ) {
    return {
        type: CHANGE_LOCATION,
        payload: location,
    };
}
export function changeTotal( price ) {
    return {
        type: CHANGE_TOTAL,
        payload: price,
    };
}
