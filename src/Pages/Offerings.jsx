import { CategorySection } from "../Components/Offerings/CategorySection/CategorySection";
import { useEffect, useState } from "react";

// Page that shows all of the services and products
export default function Offerings() {
    const [endpointUrl, setEndpointUrl] = useState(`${process.env.REACT_APP_FUNCTIONS_URL}/getitems?code=${process.env.REACT_APP_GET_ITEMS}`);
    const [products, setProductData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(data => {
                    if (active){
                        setProductData(data);
                        console.log(data);
                    }
                        
                }).catch(err => console.log(err));
        }

        getAllItems();

        return () => {
            active = false;
        }
    }, []);

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