import { useEffect, useState } from "react";

export default function Offerings( {url} ) {
    const [endpointUrl, setEndpointUrl] = useState(url);
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            const response = await fetch(endpointUrl);
            const data = await response.json();

            if(active)
                setItemData(data);
                console.log(itemData);
            return data;
        }

        getAllItems();

        return () => {
            active = false;
        }
    }, [url])
    
    return (
        <section>
            
        </section>
    );
}