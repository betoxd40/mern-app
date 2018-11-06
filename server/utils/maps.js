const axios = require('axios');

const apiKey = 'AIzaSyBL_cJazufR-tcFeYMmFpCK7iSC1nmw-vU';
const baseURL = 'https://maps.googleapis.com/maps/api';
// This current location is for restaurant location
const currentLocation = '-34.5974917,-58.4225502';

 module.exports = getETA = async (from) => {
    // API EXAMPLE: https://developers.google.com/maps/documentation/distance-matrix/start
    const response = await axios
        .get(`${baseURL}/distancematrix/json?units=imperial&origins=${from}&destinations=${currentLocation}&key=${apiKey}`);
    return response.data.rows[0].elements[0].duration.text;
};