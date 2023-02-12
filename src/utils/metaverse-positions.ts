import { Cometh } from "../models/Cometh";
import { MegaverseObjectType } from "../models/MegaverseObjectType";
import { Polyanet } from "../models/Polyanet";
import { Soloon } from "../models/Soloon";
const candidateId = import.meta.env.VITE_CANDIDATE_ID;

export const getPositions = (megaverse: any) => {
    const megaverseObjects: MegaverseObjectType[] = [];

    for (let i = 0; i < megaverse.goal.length; i++) {
        const row = megaverse.goal[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 'POLYANET') {
                const polyanet: Polyanet = {
                    row: i,
                    column: j,
                    candidateId: candidateId
                };
                megaverseObjects.push(polyanet);
            } else if (row[j].includes('COMETH')) {
                const direction = row[j].split('_')[0];
                const cometh: Cometh = {
                    row: i,
                    column: j,
                    candidateId: candidateId,
                    direction: direction.toLowerCase()
                };
                megaverseObjects.push(cometh);
            } else if (row[j].includes('SOLOON')) {
                const color = row[j].split('_')[0];
                const cometh: Soloon = {
                    row: i,
                    column: j,
                    candidateId: candidateId,
                    color: color.toLowerCase()
                };
                megaverseObjects.push(cometh);
            }
        }
    }
    return megaverseObjects;
};