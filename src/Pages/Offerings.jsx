import { CategorySection } from "../Components/Offerings/CategorySection/CategorySection";
import { x4tt116, buildIt } from "../Data/Temp/temp";
import { useEffect, useState } from "react";

// Page that shows all of the services and products
export default function Offerings() {
    const [endpointUrl, setEndpointUrl] = useState(null);
    const [products, setProductData] = useState(null);

    useEffect(() => {
        let active = true;
        let builtURL = `${process.env.REACT_APP_FUNCTIONS_URL}/getitems?code=${process.env.REACT_APP_GET_ITEMS}`
        setEndpointUrl(builtURL);

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(data => {
                    if (active)
                        setProductData(data);
                });
        }

        getAllItems();

        return () => {
            active = false;
        }
    });

    if(!products || !Array.isArray(products)) {

        return <span>Loading...</span>
    } else {

        return (
            <main>
                <CategorySection productData={products} />
            </main>
        );
    }
}