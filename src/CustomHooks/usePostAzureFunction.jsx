import { useEffect, useState } from "react";
import { useLocalData } from "./useLocalData";

// Makes a post request to azure function 
//  endpointUrl              - azure function endpoint (required)
//  requestBody              - object containing request body (required)
//  localCacheKey (optional) - will cache the results locally if a key is provided
export function usePostAzureFunction(endpointUrl, requestBody, localCacheKey = null) {
    const [currentData, setCurrentData] = useState(null);
    const minutesToCacheData = 60;
    const localStorageData = useLocalData(localCacheKey, minutesToCacheData);
    const hasLocalCacheData = !!localStorageData?.cache;
    const hasCurrentData = !!currentData;
    const hasLocalCacheKey = !!localCacheKey;

    if(hasCurrentData === false && hasLocalCacheData) {
        setCurrentData(localStorageData.cache);
    }

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

        const hasEndpointUrl = !!endpointUrl;
        const hasRequestBody = !!requestBody;
        
        if(hasCurrentData === false && hasLocalCacheData === false && hasEndpointUrl && hasRequestBody) {
            getAllItems();
        }

        return () => {
            active = false;
        }
    }, [endpointUrl, requestBody, currentData, localCacheKey, hasCurrentData, hasLocalCacheData]);

    if(hasLocalCacheData === false && hasCurrentData && hasLocalCacheKey) {
        localStorageData.setCache(currentData);
    }

    return currentData;
}