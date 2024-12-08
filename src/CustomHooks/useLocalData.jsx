import { useEffect, useState } from "react";

// Gets and verifies local cache. A`ttempts to refresh the cache if verification fails
//    key                      - Key to retrieve and check data cache
//    timespanToCacheInMinutes - Amount of time until cache needs to be refreshed
//    callBackGetData          - Callback function used to refresh cache
export function useLocalData(key, timespanToCacheInMinutes, callBackGetData = () => {}) {
    const [isCacheVerified, setIsCacheVerified] = useState(false);
    const [cachedItemState, setCachedItemState] = useState(null);

    useEffect(() => {
        let cachedData = localStorage.getItem(key);
        let currentTime = Date.now();
        let shouldResetCache = false;

        if(cachedData) {
            let jsonData = JSON.parse(cachedData);

            // Check if there is old data from before this hook was implemented
            if(!jsonData.time) {
                localStorage.clear();
                shouldResetCache = true;

            // Check if time lapsed since last cache exceeds the desired cache time
            } else {
                const millisecondsToSeconds = 1000;
                const secondsToMinutes = 60;
                
                let minutesSinceDataCached = (currentTime - jsonData.time) / millisecondsToSeconds / secondsToMinutes;

                if(minutesSinceDataCached >= timespanToCacheInMinutes) {
                    localStorage.removeItem(key);
                    shouldResetCache = true;

                } else {
                    setIsCacheVerified(true);
                }
            }
        }

        if(shouldResetCache) {
            cachedData = null;
        }
        
        if(!cachedData) {
            let refreshedData = callBackGetData();

            if(refreshedData) {
                let dataToCache = {
                    time: currentTime,
                    itemData: refreshedData
                }
                localStorage.setItem(key, JSON.stringify(dataToCache));
                setIsCacheVerified(true);
            }
        }

        if(isCacheVerified) {
            setCachedItemState(cachedData);
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return cachedItemState;
}
