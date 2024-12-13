import { useState } from 'react';
import { RiegoInfo } from '../config/entities/riegoInfo';
import { usePostValvulaRiegoMutation } from '../http/httpRQ';

const useStateValvula = (initialValvula: RiegoInfo) => {
    const [valvula, setValvula] = useState(initialValvula);
    const [postValvulaRiego] = usePostValvulaRiegoMutation();

    const toggleState = async () => {
        const newValvula = { ...valvula };
        newValvula.values[0].state = !newValvula.values[0].state;
        setValvula(newValvula);
        await postValvulaRiego(newValvula);
    }
    return { valvula, toggleState };
};

export default useStateValvula;