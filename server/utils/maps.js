const axios = require('axios');

class MapClient {
    constructor() {
        this.axios = axios;
        this.apiKey = 'AIzaSyBL_cJazufR-tcFeYMmFpCK7iSC1nmw-vU';
        this.baseURL = 'https://maps.googleapis.com/maps/api';
        // This current location is for restaurant location
        this.currentLocation = '-34.5974917,-58.4225502'
    }
    async getETA(from) {
        // API EXAMPLE: https://developers.google.com/maps/documentation/distance-matrix/start
        const response = await this.axios
            .get(`${this.baseURL}/distancematrix/json?units=imperial&origins=${from}&destinations=${this.currentLocation}&key=${this.apiKey}`);
        return response.data.rows[0].elements[0].duration.text;
    }
}

module.exports = MapClient;