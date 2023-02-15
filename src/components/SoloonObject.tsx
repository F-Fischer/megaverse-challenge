import { useMutation } from "react-query";
import { Soloon } from "../models/Soloon";
import { createSoloon } from "../services/SoloonsService";

const SoloonObject = (props: Soloon) => {
    const { mutate, isLoading, isError, isSuccess } = useMutation(createSoloon, {
        onSuccess: (data) => {
            console.log('Cometh created successfully', data);
        },
        onError: (error) => {
            console.log('Error creating Cometh', error);
        }
    });
    
    mutate(props);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error</div>;
    }

    if (isSuccess) {
        return <div>
            Soloon - {'row:' + props.row + ' col:' + props.column }
        </div>
    } else {
        return <div>Soloon not created</div>
    }
};

export default SoloonObject;