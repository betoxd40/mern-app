import axios from 'axios';

const fetchOrder = () => axios.get('http://localhost:5000/api/');

const postOrder = (order) => {
    return axios.post('http://localhost:5000/api/', order);
};

export {
    fetchOrder,
    postOrder };