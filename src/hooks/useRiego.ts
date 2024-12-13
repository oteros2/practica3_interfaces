import { useEffect, useState } from "react";
import { useGetValvulaRiegoQuery } from "../http/httpRQ";
import { RiegoInfo } from "../config/entities/riegoInfo";

const useRiego = () => {
    const { data: valvulas, error, isLoading } = useGetValvulaRiegoQuery();
    const [valvulasRiego, setValvulasRiego] = useState<RiegoInfo[]>([]);
    
    useEffect(() => {
        if (valvulas) {
            setValvulasRiego(valvulas);
        }
    }, [valvulas]);
    return { valvulas: valvulasRiego, error, isLoading };
};

export default useRiego;