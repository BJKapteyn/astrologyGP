import { useEffect, useState } from "react";

export function useLocalData(key, data, timespanToCacheInMinutes) {
    const [isCachedDataVerified, setIsCachedDataVerified] = useState(false);
    const [cachedItemData, setCachedItemData] = useState(null);

    useEffect(() => {
        let cachedData = localStorage.getItem(key);
        let currentTime = Date.now();
        let shouldResetData = false;

        if(cachedData) {
            let jsonData = JSON.parse(cachedData);

            // Check if there is old data from before this hook was implemented
            if(!jsonData.time) {
                localStorage.clear();
                shouldResetData = true;

            // Check if time lapsed since last cache exceeds the desired cache time
            } else {
                const millisecondsInSecond = 1000;
                const secondsInMinute = 60;
                let minutesSinceDataCached = (currentTime - jsonData.time) / millisecondsInSecond / secondsInMinute;

                if(minutesSinceDataCached >= timespanToCacheInMinutes) {
                    localStorage.removeItem(key);
                    shouldResetData = true;

                } else {
                    setIsCachedDataVerified(true);
                }
            }
        }

        if(shouldResetData) {
            cachedData = null;
        }
        
        if(!cachedData && data) {
            let dataToCacheLocally = {
                time: currentTime,
                itemData: data
            }
            localStorage.setItem(key, JSON.stringify(dataToCacheLocally));
            setIsCachedDataVerified(true);
        }

        if(isCachedDataVerified) {
            setCachedItemData(cachedData);
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return cachedItemData;
}