const BASE_URL = process.env.NODE_ENV === 'development' ?
'http://localhost:5000' : 'https://ski-be-hgfltltt5a-de.a.run.app'

export const api = {
    getSpencersCreek: async () => {
        const response = await fetch(`${BASE_URL}/api/spencersCreek`);
        const jsonResponse = await response.json();
        return jsonResponse;    
    }
}