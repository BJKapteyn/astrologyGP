import { useEffect, useState } from "react";

export function usePostAzureFunction(endpointUrl, requestBody) {
    const [currentData, setCurrentData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl, {
                    method: "post",
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(requestBody)
                })
                .then(response => response.json())
                .then(responseData => {
                    if (active){
                        setCurrentData(responseData);
                    }
                })
                .catch(err => console.debug(err));
        }
        
        if(endpointUrl && requestBody) {
            getAllItems();
        }

        return () => {
            active = false;
        }
    }, [endpointUrl, requestBody]);

    return currentData;
}