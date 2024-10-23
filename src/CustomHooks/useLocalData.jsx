import { useEffect } from "react";

export function useLocalData(key, data) {
    
    useEffect(() => {
        if(!localStorage.getItem(key)) {
            localStorage.setItem(data.name, JSON.stringify(data));
        }
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}