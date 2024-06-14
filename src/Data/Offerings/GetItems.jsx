import { useEffect, useState } from "react";

export default function GetItems(url) {
    [itemData, setItemData] = useState(null);
    
    useEffect(() => {
        let active = true; 

        const getAllItems = async () => {
            const request = await fetch(url);
            const data = await request.json();
            return data;
        }

        getAllItems();

    })
}