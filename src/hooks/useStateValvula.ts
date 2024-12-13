import { useState } from 'react';
import { usePostValvulaRiegoMutation } from '../http/httpRQ';
import { RiegoInfo } from '../config/entities/riegoInfo';

const useStateValvula = (initialValvula: RiegoInfo) => {
    const [valvula, setValvula] = useState(initialValvula);
    const [postValvulaRiego] = usePostValvulaRiegoMutation();

    const toggleState = async () => {
        const updatedValvula = {
            ...valvula,
            values: valvula.values.map(value => ({ ...value, state: !value.state })),
        };
        setValvula(updatedValvula);
        await postValvulaRiego(updatedValvula);
    };

    return { valvula, toggleState };
};

export default useStateValvula;