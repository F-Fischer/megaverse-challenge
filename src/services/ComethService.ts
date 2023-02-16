import { Cometh } from "../models/Cometh";
import { client } from "./Client";

/**
 * Create a new cometh with the given position and direction in the megaverse
 */
export const createCometh = async (cometh: Cometh) => {
    const response =
        await client.post(`/comeths`, cometh, {});
    const json = response.data;
    return json;
};

// TODO implement delete cometh
export const deleteCometh = () => {

}