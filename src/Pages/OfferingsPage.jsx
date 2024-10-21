import { CategorySection } from '../Components/OfferingsPage/CategorySection/CategorySection';
import { LoadingIndicator } from '../Components/PageElements/LoadingIndicator/LoadingIndicator';
import { useEffect, useState } from 'react';

// Page that shows all of the services and products
export default function Offerings() {
    const endpointUrl = `${process.env.REACT_APP_FUNCTIONS_URL}/GetServiceItems?code=${process.env.REACT_APP_GET_SERVICE_ITEMS}`;
    const [serviceItems, setServiceItemData] = useState(null);

    useEffect(() => {
        let active = true;

        const getAllItems = async () => {
            await fetch(endpointUrl)
                .then(response => response.json())
                .then(data => {
                    if (active){
                        setServiceItemData(data);
                        console.log(data);
                    }
                })
                .catch(err => console.log(err));
        }

        getAllItems();

        return () => {
            active = false;
        }
    }, []);

    if(!serviceItems || !Array.isArray(serviceItems)) {

        return <LoadingIndicator />
    } else {

        return (
            <main>
                <CategorySection serviceItemData={serviceItems} />
            </main>
        );
    }
}