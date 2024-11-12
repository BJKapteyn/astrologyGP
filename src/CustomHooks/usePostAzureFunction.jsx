import { useEffect, useState } from "react";

export function usePostAzureFunction(endpointUrl, categoryId) {
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

                    body: JSON.stringify({
                      Id: categoryId,
                    })
                })
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
    }, [endpointUrl, categoryId]);

    return currentData;
}