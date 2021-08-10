const BASE_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:5001' : 'https://ski-be-hgfltltt5a-de.a.run.app'

const cache = {};

export const api = {
    getSnowDepth: async () => {
        if (cache.getSnowDepth) {
            return cache.getSnowDepth;
        } else {
            const response = await fetch(`${BASE_URL}/api/snowDepth`);
            const jsonResponse = await response.json();
            cache.getSnowDepth = jsonResponse;
            return jsonResponse;
        }
    }
}