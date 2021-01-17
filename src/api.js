const BASE_URL = 'http://localhost:5000'

console.error(process.env.NODE_ENV)

export const api = {
    getSpencersCreek: async () => {
        const response = await fetch(`${BASE_URL}/api/spencersCreek/a`);
        const jsonResponse = await response.json();
        return jsonResponse;    
    }
}