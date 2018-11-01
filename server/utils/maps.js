var axios = require('axios');

class MapClient {
    constructor() {
        this.axios = axios;
        this.apiKey = 'AIzaSyBlSJra2EH7VOfiT1rpA1ECoKigazcIePY';
        this.baseURL = 'https://maps.googleapis.com/maps/api';
        this.currentLocation = '-34.5974917,-58.4225502'
    }

    getETA(from, to) {
        // API EXAMPLE: https://developers.google.com/maps/documentation/distance-matrix/start
        var response = this.axios
            .get(`${this.baseURL}/distancematrix/json?units=imperial&origins=${from}&destinations=${to}&key=${this.apiKey}`);
        console.log(response.data.rows[0].elements[0].duration);
        return response.data.rows[0].elements[0].duration;
    }
}

module.exports = MapClient;