import { useEffect, useState } from "react";
import { useGetValvulaRiegoQuery } from "../http/httpRQ";
import { RiegoInfo } from "../config/entities/riegoInfo";

const useRiego = () => {
    
    const { data: valvulas, error, isLoading } = useGetValvulaRiegoQuery();
    const [valvulasRiego, setValvulasRiego] = useState<RiegoInfo[]>([]);
    const [fetchError, setFetchError] = useState<string | null>(null);

    if (error) {
        setFetchError('Error fetching data');
    }

    const loadValvulas = () => {
        if (valvulas) {
            setValvulasRiego(valvulas);
        }
    }

    useEffect(() => {
        loadValvulas();
    },
    );
};

export default useRiego;