import { CategorySection } from "../Components/Offerings/CategorySection/CategorySection";
import { x4tt116, buildIt } from "../Data/Temp/temp";
import { useEffect, useState } from "react";

// Page that shows all of the services and products
export default function Offerings() {
    const url = buildIt(x4tt116);
    const [endpointUrl, setEndpointUrl] = useState(url);
    const [product, setProductData] = useState(null);

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
                
            return product;
        }

        getAllItems();

        return () => {
            active = false;
        }
    });

    if(!product || !Array.isArray(product)) {

        return <p>loading</p>
    } else {

        return (
            <main>
                <meta name="author" content="Brad Kapteyn"></meta>
                <meta name="description" content="Coming Soon, The Vibe Collective's products and services"></meta>
                <meta name="keywords" content="The Vibe Collective, online metaphysical services"></meta>
                <CategorySection productData={product} />
            </main>
        );
    }
}