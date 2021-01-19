const BASE_URL = process.env.NODE_ENV === 'development' ?
'http://localhost:5000' : 'https://ski-be-hgfltltt5a-de.a.run.app'

export const api = {
    getSpencersCreek: async () => {
        console.error(1)
        const response = await fetch(`${BASE_URL}/api/spencersCreek/a`);
        console.error(2)
        const jsonResponse = await response.json();
        console.error(3)
        return jsonResponse;    
    }
}