import { useState, useRef } from "react";
import { DataCache } from "../Models/DataCache";

// Gets and verifies local cache
//    key:                       Key to retrieve and check data cache
//    timespanToCacheInMinutes:  Amount of time until cache needs to be refreshed
export function useLocalData(key, timespanToCacheInMinutes) {
    const [localCacheState, setLocalCacheState] = useState(null);
    const cacheKey = useRef(key);

    if(!key) {
        return null;
    }
     
    function setDataCache(data) {
        const dataCache = new DataCache(data);
        
        localStorage.setItem(cacheKey.current, JSON.stringify(dataCache));
    }

    const isCacheStateEmpty = !!localCacheState === false;
    let localCache = localStorage.getItem(key);
    let isCacheVerified = false;
    
    if(localCache && isCacheStateEmpty) {
        let currentTime = Date.now();
        let parsedData = JSON.parse(localCache);
        localCache = parsedData.cache;

        // Check if there is old data from before this hook was implemented
        if(!parsedData.time) {
            localStorage.clear();

        // Check if time lapsed since last cache exceeds the desired cache time
        } else {
            const millisecondsInASecond = 1000;
            const secondsInAMinute = 60;
            
            let minutesSinceDataCached = (currentTime - parsedData.time) / millisecondsInASecond / secondsInAMinute;
            let isTimeLapsed = minutesSinceDataCached >= timespanToCacheInMinutes

            if(isTimeLapsed) {
                localStorage.removeItem(key);
            }
            if(!isTimeLapsed) {
                isCacheVerified = true;
            }
        }
    }
    
    if(isCacheVerified && isCacheStateEmpty) {
        setLocalCacheState(localCache);
    }
    
    const hookMembers = {
        setCache: setDataCache,
        cache: localCacheState
    }
    return hookMembers;
}
