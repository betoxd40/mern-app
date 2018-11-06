import { get } from '../../config/default.json';

const GA_KEY = get('googleKeys');

const GA_SCRIPT = `https://maps.googleapis.com/maps/api/js?key=${GA_KEY}&libraries=places`;

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBRc0hU3-fbV5xAHnEc-PxK-cHIVZaMWkg&libraries=places

// Load Google API in script tag and append
const loadScript = () => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = GA_SCRIPT;
        script.addEventListener('load', function() {
            resolve();
        });
        script.addEventListener('error', function(e) {
            reject(e);
        });
        document.body.appendChild(script);
    });
};

export default loadScript;