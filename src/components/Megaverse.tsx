import { useMemo } from "react";
import { useQuery } from "react-query";
import { getMegaverse } from "../services/MegaverseService";
import { parseMegaverseObjects } from "../utils/megaverse-positions";
import requestMegaverse from "../utils/megaverse-requests";

const Megaverse = () => {
    const { data, status } = useQuery('megaverse', getMegaverse);

    const parseObjectResult = useMemo(() => {
        if(data) {
            return parseMegaverseObjects(data);
        }
    }, [data]);

    const {isLoading, isSuccess, isError} = useQuery({
        queryKey: ['megaverse-query'],
        queryFn: () => {
            //check parseobjectresult
            if (parseObjectResult) {
                return requestMegaverse(parseObjectResult)    
            }
        },
        //condition 
        enabled: Boolean(parseObjectResult),
        staleTime: Infinity
    });

    return <div>
        <h1>MEGAVERSE</h1>
        <div> 
            { isLoading ? <div>Loading...</div> : 
                isError ? <div>Error</div> : 
                isSuccess ? <div>Success getting metaverse</div> : null }
        </div>
    </div>;

};

export default Megaverse;