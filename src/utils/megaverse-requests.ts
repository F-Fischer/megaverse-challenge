import { MegaverseObjectType } from "../models/MegaverseObjectType";
import client from "../services/Client";

const defineRequest = (endpoint: string, payload: MegaverseObjectType) => {
    return client.post(`/${endpoint}`, payload, {})
}

const requestMegaverse = (megaverseObjects: MegaverseObjectType[]) => {
    let [polyanetsRequests, soloonsRequests, comethsRequests]: [Promise<unknown>[], Promise<unknown>[], Promise<unknown>[]] = [[], [], []];
    megaverseObjects.forEach((megaverseObject) => {
        if ('direction' in megaverseObject) {
            comethsRequests.push(
                defineRequest('comeths',megaverseObject)
            );
        } else if ('color' in megaverseObject) {
            soloonsRequests.push(
                defineRequest('soloons',megaverseObject)
            );
        } else {
            polyanetsRequests.push(
                defineRequest('polyanet',megaverseObject)
            );
        }
    });

    return [...polyanetsRequests, ...soloonsRequests, ...comethsRequests];
};



export default requestMegaverse;