import { client } from "./Client";

const candidateId = import.meta.env.VITE_CANDIDATE_ID;

/**
 * Gets the megaverse goal map result
 */
export const getGoal = async () => {
    const response = await client.get(`/map/${candidateId}/goal`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
    const json = await response.data;
    return json;
};

/**
 * Gets current result of the megaverse map
 */
// export const getCurrentMegaverseMap = async () => {
//     const response = await fetch(`${apiUrl}/map/${candidateId}`);
//     const json = await response.json();
//     return json;
// };