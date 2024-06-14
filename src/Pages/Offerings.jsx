import { useEffect, useState } from "react";
import { x4tt116, buildIt } from "../Data/Temp/temp";

export default function Offerings(  ) {
    const url = buildIt(x4tt116);
    const [endpointUrl, setEndpointUrl] = useState(url);
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(data => {
                    setItemData(data)
                    console.log(data);
                }).then(x => {

                });
            // const data = await response.then((data) => data);
                
            return itemData;
        }

        getAllItems();

        return () => {
            active = false;
        }
    }, [url]);

    
    return (
        <section>
            
        </section>
    );
}