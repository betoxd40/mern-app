import axios from 'axios';

const fetchOrder = () => axios.get('http://localhost:5000/api/');

const dumbData = {
    personalInfo: {
        name: 'test',
        lastName: 'test',
        number: '1231231231'
    },
    meals: [
        {
            name: 'test',
            cost: 1231313
        }
    ],
    totalCost: 1231313,
    email: 'test',
    address: 'test',
    location: {
        lat: '-34.5995939',
        lng: '-58.3805763'
    }
};

const postOrder = () => {
    console.log(JSON.stringify(dumbData));
    return axios.post('http://localhost:5000/api/', dumbData)
};

export {
    fetchOrder,
    postOrder };