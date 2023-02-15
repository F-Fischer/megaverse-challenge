import { useQuery } from "react-query";
import { getMegaverse } from "../services/MegaverseService";
import { parseMegaverseObjects } from "../utils/metaverse-positions";
import ComethObject from "./ComethObject";
import PolyanetObject from "./PolyanetObject";
import SoloonObject from "./SoloonObject";

const Megaverse = () => {
    // const [megaverseObjects, setMegaverseObjects] = useState<MegaverseObjectType[]>([]);
    const { data, status } = useQuery('megaverse', getMegaverse);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'error') return <div>Error fetching data</div>;

    if (data.goal) {
        console.log(parseMegaverseObjects(data));
    }

    return <div>
        <h1>MEGAVERSE</h1>
        <div>
            {
                parseMegaverseObjects(data).map((megaverseObject) => {
                    if ('direction' in megaverseObject) {
                        return <ComethObject
                            key={megaverseObject.row + '-' + megaverseObject.column}
                            direction={megaverseObject.direction}
                            row={megaverseObject.row}
                            column={megaverseObject.column}
                            candidateId={megaverseObject.candidateId}></ComethObject>
                    } else if ('color' in megaverseObject) {
                        return <SoloonObject
                            key={megaverseObject.row + '-' + megaverseObject.column}
                            color={megaverseObject.color}
                            row={megaverseObject.row}
                            column={megaverseObject.column}
                            candidateId={megaverseObject.candidateId}
                        ></SoloonObject>
                    } else {
                        return <PolyanetObject
                            key={megaverseObject.row + '-' + megaverseObject.column}
                            row={megaverseObject.row}
                            column={megaverseObject.column}
                            candidateId={megaverseObject.candidateId}
                        ></PolyanetObject>
                    }
                })
            }
        </div>
    </div>;

};

export default Megaverse;