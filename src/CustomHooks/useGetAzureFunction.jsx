import { useEffect, useState } from "react";

export function useGetAzureFunction(endpointUrl) {
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(responseData => {
                    if (active){
                        setCurrentData(responseData);
                    }
                })
                .catch(err => console.debug(err));
        }

        getAllItems();

        return () => {
            active = false;
        }
    }, [endpointUrl]);

    return currentData;
}