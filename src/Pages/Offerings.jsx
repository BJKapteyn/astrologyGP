import { CategorySection } from "../Components/Offerings/CategorySection/CategorySection";
import { x4tt116, buildIt } from "../Data/Temp/temp";
import { useEffect, useState } from "react";

// Page that shows all of the services and products
export default function Offerings() {
    const url = buildIt(x4tt116);
    const [endpointUrl, setEndpointUrl] = useState(url);
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(data => {
                    if (active)
                        setProductData(data);
                        setEndpointUrl(url);
                });
                
            return productData;
        }

        getAllItems();

        return () => {
            active = false;
        }
    });

    if(!productData || !Array.isArray(productData)) {

        return <p>loading</p>
    } else {

        return (
            <main>
                <CategorySection productData={productData} />
            </main>
        );
    }
}