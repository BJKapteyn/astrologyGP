import { useState } from "react";

// Gets and verifies local cache
//    key                      - Key to retrieve and check data cache
//    timespanToCacheInMinutes - Amount of time until cache needs to be refreshed
export function useLocalData(key, timespanToCacheInMinutes) {
    const [cachedItemState, setCachedItemState] = useState(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    if(!key) {
        return null;
    }

    if(isFirstRender)
        setIsFirstRender(false);

    const cacheStateIsEmpty = !!cachedItemState === false;
    let cachedData = localStorage.getItem(key);
    let isCacheVerified = false;
    
    if(cachedData && cacheStateIsEmpty) {
        let currentTime = Date.now();
        let parsedData = JSON.parse(cachedData);
        cachedData = parsedData.cache;

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
    
    if(isCacheVerified && cacheStateIsEmpty) {
        setCachedItemState(cachedData);
    }

    if(cachedData && isCacheVerified && isFirstRender)
        return cachedData
    
    return cachedItemState;
}
