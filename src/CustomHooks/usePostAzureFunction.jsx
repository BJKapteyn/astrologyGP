import { useEffect, useState } from "react";
import { useLocalData } from "./useLocalData";
import { DataCache } from "../Models/DataCache";

// Makes a post request to azure function
//  endpointUrl              - azure function endpoint
//  requestBody              - object containing request body
//  localCacheKey (optional) - will cache the results locally if a key is provided
export function usePostAzureFunction(endpointUrl, requestBody, localCacheKey = null) {
    const [currentData, setCurrentData] = useState(null);
    const minutesToCacheData = 60;
    const localStorageData = useLocalData(localCacheKey, minutesToCacheData);

    if(!!currentData === false && localStorageData) {
        setCurrentData(localStorageData);
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
        
        if(!currentData && !localStorageData && endpointUrl && requestBody) {
            getAllItems();
        }

        return () => {
            active = false;
        }
    }, [endpointUrl, requestBody, localStorageData, currentData, localCacheKey]);

    if(!localStorageData && currentData && localCacheKey) {
        const localCache = new DataCache(currentData);
        localStorage.setItem(localCacheKey, JSON.stringify(localCache));
    }

    return currentData;
}