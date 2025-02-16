import { useEffect, useState, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { buyButtonActivated } from '../../../FeatureFlags/launchFeatures.js';
import { ActionButton } from '../ActionButton/ActionButton.jsx';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { getItemIdFromUrlPath } from '../../../UtilityFunctions/urlUtility.js';
import { usePostAzureFunction } from '../../../CustomHooks/usePostAzureFunction.jsx';
import { FunctionNames } from '../../../Enums/FunctionNames.js';
import { buildAzureFunctionURL, buildSingleServiceItemURL } from '../../../UtilityFunctions/urlUtility.js';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import '../../../App.css';
import './SingleItem.css';

// View detailed item information and book/buy now link 
//   rootPage:      the page to return to when the back button is clicked
//   hasVariation:  whether the item has variations
export const SingleItem = ({ rootPage, hasVariation = false, isService = false}) => {
    const defaultBuyNowUrl = 'https://the-vibe-collective.square.site/shop/products/HUMYRU6WAPVQ54PYRR4FEUAZ';

    const [imageUrl, setImageUrl] = useState(moon);
    const [itemData, setItemData] = useState(useLocation().state);
    const [purchaseLink, setPurchaseLink] = useState(itemData?.buyNowLink);
    const urlParams = useRef(useLocation());
    const itemId = getItemIdFromUrlPath(urlParams.current.pathname);
    const functionUrl = buildAzureFunctionURL(FunctionNames.GetItemByItemId, process.env.REACT_APP_GET_ITEM_BY_ITEM_ID);
    const usePostAzureFunctionData = usePostAzureFunction(functionUrl, {Id: itemId});
    const navigate = useNavigate();
    
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

    const bookButtonSettings = {
        buttonText: 'BOOK',
        buttonStyleId: 'singleitem-bookbutton',
        action: null
    }

    const buyButtonSettings = {
        buttonText: 'BUY NOW',
        buttonStyleId: 'singleitem-bookbutton',
        action: null
    }
    
    const backButtonSettings = {
        buttonText: 'BACK',
        buttonStyleId: 'singleItem-backbutton',
        action: () => navigate(rootPage)
    }

    // If no data is passed from the previous page, fetch it from the API
    useEffect(() => {
        let active = true;

        if(active) {
            let hasImageUrl = !!itemData?.imageURL;

            if(hasImageUrl) {
                setImageUrl(itemData.imageURL);
            }
        }

        return () => active = false;
    }, [purchaseLink, itemData])

    if(!!itemData === false) {
        
        return <LoadingIndicator />;
    }

    return (
        <main id="singleitem">
            <div className="singleitem-imagecontainer">
                <div id="singleitem-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <div className="singleitem-information-container">
                <div className="singleitem-information">
                    <p id="singleitem-name">{itemData.name.toUpperCase()}</p>
                    {!hasVariation && <Link target='_blank' to={purchaseLink}><ActionButton buttonSettings={buyButtonSettings}></ActionButton></Link>}
                    {hasVariation && itemData.variations.map(variation => {
                        return (
                            <div key={variation.id+variation.name} className="singleitem-variation-container">
                                <p className="singleitem-variation">{variation.name.toUpperCase()}</p>
                                {buyButtonActivated &&
                                    <Link target='_blank' to={purchaseLink}><ActionButton buttonSettings={bookButtonSettings}></ActionButton></Link>
                                }
                            </div>
                        )
                    })}
                    {itemData.description && (hasVariation ? <p id="singleitem-descriptiontitle">DESCRIPTION</p> : <p style={{borderTop: 'none'}} id="singleitem-descriptiontitle">DESCRIPTION</p>)}
                    {itemData.description && <p id="singleitem-description">{itemData.description}</p>}
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <ActionButton buttonSettings={backButtonSettings}></ActionButton>
            </div>
        </main>
    )
}