import { useState, useRef } from 'react';
import { OfferingCategories } from '../Components/OfferingsPage/CategorySection/OfferingCategories';
import { LoadingIndicator } from '../Components/PageElements/LoadingIndicator/LoadingIndicator';
import { buildAzureFunctionURL } from '../Functions/urlBuilders.js';
import { ParentCategoryIds } from '../Enums/CategoryIds.js';
import { FunctionNames } from '../Enums/FunctionNames.js';
import { usePostAzureFunction } from '../CustomHooks/usePostAzureFunction.jsx';
import { CategoryId } from '../Models/CategoryId.js';

// Page that shows all of the offered services
export default function Offerings() {
    const endpointUrl = useRef(buildAzureFunctionURL(FunctionNames.GetCategoriesByCategoryId, process.env.REACT_APP_GET_CATEGORIES_BY_CATEGORY_ID));
    const categoryId = useRef(new CategoryId(ParentCategoryIds.Services));
    const [serviceItems, setServiceItemData] = useState(null);
    const azureItems = usePostAzureFunction(endpointUrl.current, categoryId.current, categoryId.current.Id);

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