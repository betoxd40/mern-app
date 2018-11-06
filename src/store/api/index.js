import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const fetchOrder = () => axios.get('http://localhost:5000/api/order');

const postOrder = (order) => {
    return axios.post(`${apiUrl}/order/`, order);
};

export {
    fetchOrder,
    postOrder };