import { useState, useRef } from 'react';
import { OfferingCategories } from '../Components/OfferingsPage/CategorySection/OfferingCategories';
import { LoadingIndicator } from '../Components/PageElements/LoadingIndicator/LoadingIndicator';
import { buildAzureFunctionURL } from '../Functions/urlBuilders.js';
import { FunctionNames } from '../Enums/FunctionNames.js';
import { useGetAzureFunction } from '../CustomHooks/useGetAzureFunction.jsx';

// Page that shows all of the offered services
export default function Offerings() {
    const endpointUrl = useRef(buildAzureFunctionURL(FunctionNames.GetServiceItems, process.env.REACT_APP_GET_SERVICE_ITEMS));
    const [serviceItems, setServiceItemData] = useState(null);
    const azureItems = useGetAzureFunction(endpointUrl.current);

    if(azureItems && !serviceItems) {
        setServiceItemData(azureItems)
    }

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