import { useState } from "react";
import { ParentCategoryIds } from "../Enums/CategoryIds.js";
import { usePostAzureFunction } from "../CustomHooks/usePostAzureFunction.jsx";
import { FunctionNames } from "../Enums/FunctionNames.js";
import { SectionDivider } from "../Components/PageElements/SectionDivider/SectionDivider";
import { StoreCategories } from '../Components/StorePage/StoreCategories/StoreCategories.jsx';
import { LoadingIndicator } from "../Components/PageElements/LoadingIndicator/LoadingIndicator.jsx";
import { buildAzureFunctionURL } from "../Functions/urlBuilders.js";

export default function StorePage() {
    const [itemData, setItemData] = useState(null);
    const getCategoriesByCategoryIdURL = buildAzureFunctionURL(FunctionNames.GetCategoriesByCategoryId, process.env.REACT_APP_GET_CATEGORIES_BY_CATEGORY_ID)
    const azureItemData = usePostAzureFunction(getCategoriesByCategoryIdURL, ParentCategoryIds.Products);

    const storetitleSettings = {
        headingText: 'STORE'
    }

    if(azureItemData && !itemData) {
        setItemData(azureItemData);
    }

    if(itemData === null) {
        return <LoadingIndicator></LoadingIndicator>
    }
    return (
        <div className="store-page">
            <SectionDivider dividerData={storetitleSettings} />
            <StoreCategories squareStoreItems={itemData} />
        </div>
    );
};
