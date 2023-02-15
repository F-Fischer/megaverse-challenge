import { useMutation } from "react-query";
import { Polyanet } from "../models/Polyanet";
import { createPolyanet } from "../services/PolyanetsService";

const PolyanetObject = (props: Polyanet) => {
    const { mutate, isLoading, isError, isSuccess } = useMutation(createPolyanet, {
        onSuccess: (data) => {
            console.log('Cometh created successfully', data);
        },
        onError: (error) => {
            console.log('Error creating Cometh', error);
        }
    });

    mutate(props);

    if (isSuccess) {
        return <div>
            Polyanet - {'row:' + props.row + ' col:' + props.column }
        </div>
    } else {
        return <div>Polyanet not created</div>
    }
};

export default PolyanetObject;