import { client } from "./Client";

const candidateId = import.meta.env.VITE_CANDIDATE_ID;

/**
 * Gets the megaverse goal map result
 */
export const getMegaverse = async () => {
    const response = await client.get(`/map/${candidateId}/goal`,{});
    const json = response.data;
    return json;
};
