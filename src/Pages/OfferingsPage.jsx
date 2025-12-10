import { useState, useRef, useEffect } from 'react';
import { OfferingCategories } from '../Components/OfferingsPage/CategorySection/OfferingCategories';
import { LoadingIndicator } from '../Components/PageElements/LoadingIndicator/LoadingIndicator';
import { buildAzureFunctionURL } from '../UtilityFunctions/urlUtility.js';
import { ParentCategoryIds } from '../Enums/ParentCategoryIds.js';
import { FunctionNames } from '../Enums/FunctionNames.js';
import { usePostAzureFunction } from '../CustomHooks/usePostAzureFunction.jsx';
import { CategoryId } from '../Models/CategoryId.js';
import { addPageHeaderInfo } from 'UtilityFunctions/pageUtility.js';

// Page that shows all of the offered services
export default function Offerings() {
    const [serviceItems, setServiceItemData] = useState(null);
    const endpointUrl = useRef(buildAzureFunctionURL(FunctionNames.GetCategoriesByCategoryId, process.env.REACT_APP_GET_CATEGORIES_BY_CATEGORY_ID));
    const categoryId = useRef(new CategoryId(ParentCategoryIds.Services));
    const azureItems = usePostAzureFunction(endpointUrl.current, categoryId.current, categoryId.current.Id);
    const keywords = 'Spiritual Services, Astrology Readings, Tarot Readings, Wellness Coaching, Spiritual Counseling, Energy Healing, Meditation Sessions, Holistic Services, Personal Growth Services, Vibe Collective Offerings';
    const description = 'Explore our diverse range of spiritual services at The Vibe Collective. From astrology and tarot readings to wellness coaching and energy healing, find the perfect offering to support your personal growth and holistic well-being.';
    const title = 'Offerings - The Vibe Collective';

    useEffect(() => {   
        addPageHeaderInfo(description, keywords, title);
    }, []);

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