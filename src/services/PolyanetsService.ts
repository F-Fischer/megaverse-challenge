const apiUrl = import.meta.env.VITE_API_URL;
const candidateId = import.meta.env.VITE_CANDIDATE_ID;
import axios from 'axios';

/**
 * Create a new polyanet with the given position in the megaverse
 */
export const createPolyanet = async (row: number, column: number) => {
    const response =
        await axios.post(`${apiUrl}/polyanets`, {
            row,
            column,
            candidateId,
        },{
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
    const json = await response.data;
    return json;
};

/**
 * Delete polyanet with the given position in the megaverse
 */
export const deletePolyanet = async (row: number, column: number) => {
    const response =
        await axios.delete(`${apiUrl}/polyanets`, {
            data: {
                column,
                row,
                candidateId,
            }
        });
    const json = await response.data;
    return json;
};