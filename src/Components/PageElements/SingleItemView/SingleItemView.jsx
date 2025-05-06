import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { getItemIdFromUrlPath } from '../../../UtilityFunctions/urlUtility.js';
import { usePostAzureFunction } from '../../../CustomHooks/usePostAzureFunction.jsx';
import { FunctionNames } from '../../../Enums/FunctionNames.js';
import { buildAzureFunctionURL, buildSingleServiceItemURL } from '../../../UtilityFunctions/urlUtility.js';
import { SingleItem } from '../SingleItem/SingleItem.tsx';
import '../../../App.scss';
import './SingleItemView.css';

// View detailed item information and book/buy now link 
//   rootPage:      the page to return to when the back button is clicked
//   hasVariation:  whether the item has variations
export const SingleItemView = ({ rootPage, hasVariation = false, isService = false, purchaseButtonText = null}) => {
    const defaultBuyNowUrl = 'https://the-vibe-collective.square.site/shop/products/HUMYRU6WAPVQ54PYRR4FEUAZ';
    const [itemData, setItemData] = useState(useLocation().state);
    const [purchaseLink, setPurchaseLink] = useState(itemData?.buyNowLink);
    const urlParams = useRef(useLocation());
    const itemId = getItemIdFromUrlPath(urlParams.current.pathname);
    const functionUrl = buildAzureFunctionURL(FunctionNames.GetItemByItemId, process.env.REACT_APP_GET_ITEM_BY_ITEM_ID);
    const usePostAzureFunctionData = usePostAzureFunction(functionUrl, {Id: itemId});
    
    if(!!itemData?.buyNowLink === false && !!purchaseLink === false) {
        if(isService) {
            setPurchaseLink(buildSingleServiceItemURL(itemId));
        }
        else {
            setPurchaseLink(defaultBuyNowUrl);
        }
    }

    if(!!itemData === false && !!usePostAzureFunctionData === true) {
        setItemData(usePostAzureFunctionData);
    }

    if(!!itemData === false) {
        
        return <LoadingIndicator />;
    }

    return (
        <main id="singleitem">
            <SingleItem itemData={itemData} defaultBuyNowURL={defaultBuyNowUrl}></SingleItem>
        </main>
    );
}