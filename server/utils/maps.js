var axios = require('axios');

class MapClient {
    constructor() {
        this.axios = axios;
        this.apiKey = 'AIzaSyByZiohQQI0F6k_qtmF_J0DuMzQMALoOoY';
        this.baseURL = 'https://maps.googleapis.com/maps/api';
        // This current location is for restaurant location
        this.currentLocation = '-34.5974917,-58.4225502'
    }

    getETA(from) {
        // API EXAMPLE: https://developers.google.com/maps/documentation/distance-matrix/start
        this.axios
            .get(`${this.baseURL}/distancematrix/json?units=imperial&origins=${from}&destinations=${this.currentLocation}&key=${this.apiKey}`).then(function (response) {
                console.log(response.data);
                return response.data.rows[0].elements[0].duration;
        })
            .catch(function (error) {
                console.log(error);
            })
    }
}

module.exports = MapClient;