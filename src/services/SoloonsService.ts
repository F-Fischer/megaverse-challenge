import { Soloon } from "../models/Soloon";
import { client } from "./Client";

/**
 * Create a new soloon with the given position and color in the megaverse
 */
export const createSoloon = async (soloon: Soloon) => {
    const response =
        await client.post(`/soloons`, soloon, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
    const json = await response.data;
    return json;
};

// TODO implement delete soloon
export const deleteSoloon = () => {

}