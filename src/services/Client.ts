import axios from 'axios';

/**
 * @description
 * This is the client that will be used to make requests to the API.
 * The base URL is set here not to be hardcoded in the components.
 * Any other common header could be added here.
 */
export const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 1000
});

export default client;