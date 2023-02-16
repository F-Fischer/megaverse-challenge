const apiUrl = import.meta.env.VITE_API_URL;
const candidateId = import.meta.env.VITE_CANDIDATE_ID;
import { Polyanet } from '../models/Polyanet';
import { client } from './Client';

/**
 * Create a new polyanet with the given position in the megaverse
 */
export const createPolyanet = async (polyanet: Polyanet) => {
    const response =
        await client.post(`${apiUrl}/polyanets`, polyanet,{});
    const json = await response.data;
    return json;
};

/**
 * Delete polyanet with the given position in the megaverse
 */
export const deletePolyanet = async (polyanet: Polyanet) => {
    const response =
        await client.delete(`${apiUrl}/polyanets`, {
            data: polyanet
        });
    const json = await response.data;
    return json;
};