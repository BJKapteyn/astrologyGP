import { useEffect, useState, useRef } from 'react';
import { OfferingCategories } from '../Components/OfferingsPage/CategorySection/OfferingCategories';
import { LoadingIndicator } from '../Components/PageElements/LoadingIndicator/LoadingIndicator';
import { buildAzureFunctionURL } from '../Functions/urlBuilders.js';
import { GetServiceItems } from '../Enums/FunctionNames.js';

// Page that shows all of the services and products
export default function Offerings() {
    const endpointUrl = useRef(buildAzureFunctionURL(GetServiceItems, process.env.REACT_APP_GET_SERVICE_ITEMS));
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
    }, [endpointUrl]);

    if(!serviceItems || !Array.isArray(serviceItems)) {

        return <LoadingIndicator />
    } else {

        return (
            <main>
                <OfferingCategories serviceItemData={serviceItems} />
            </main>
        );
    }
}