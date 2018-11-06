import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const fetchOrder = () => axios.get('http://localhost:5000/api/orders');

const postOrder = (order) => {
    return axios.post(`${apiUrl}/orders/`, order);
};

export {
    fetchOrder,
    postOrder };