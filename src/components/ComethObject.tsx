import { useMutation } from "react-query";
import { Cometh } from "../models/Cometh";
import { createCometh } from "../services/ComethService";

const ComethObject = (props: Cometh) => {
    const { mutate, isLoading, isError, isSuccess } = useMutation(createCometh, {
        onSuccess: (data) => {
            console.log('Cometh created successfully', data);
        },
        onError: (error) => {
            console.log('Error creating Cometh', error);
        }
    });

    //mutate(props);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error</div>;
    }

    if (isSuccess) {
        return <div>
            Cometh - {'row:' + props.row + ' col:' + props.column }
        </div>
    } else {
        return <div>Cometh not created</div>
    }
}

export default ComethObject;