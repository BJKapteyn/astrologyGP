import { useEffect, useState, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { buyButtonActivated } from '../../../FeatureFlags/launchFeatures.js';
import { ActionButton } from '../ActionButton/ActionButton.jsx';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { buildSingleItemURL, getItemIdFromUrlPath } from '../../../UtilityFunctions/urlUtility.js';
import { usePostAzureFunction } from '../../../CustomHooks/usePostAzureFunction.jsx';
import { useLocalData } from '../../../CustomHooks/useLocalData.jsx';
import { FunctionNames } from '../../../Enums/FunctionNames.js';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import '../../../App.css';
import './SingleItem.css';

// View detailed item information
//   rootPage:      the page to return to when the back button is clicked
//   hasVariation:  whether the item has variations
export const SingleItem = ({ rootPage, hasVariation = false}) => {
    const defaultItemURL = 'https://the-vibe-collective.square.site/';
    const defaultBuyNowUrl = 'https://the-vibe-collective.square.site/shop/products/HUMYRU6WAPVQ54PYRR4FEUAZ';
    const [imageUrl, setImageUrl] = useState(moon);
    const [itemData, setItemData] = useState(useLocation().state);
    const [squareBookUrl, setSquareBookUrl] = useState(defaultItemURL);
    const buyNowButton = itemData.buyNowLink ?? defaultBuyNowUrl;
    const urlParams = useRef(useLocation());
    const navigate = useNavigate();
    const itemId = getItemIdFromUrlPath(urlParams.current.pathname);
    const usePostAzureFunctionData = usePostAzureFunction(FunctionNames.GetItemByItemId, {itemId: itemId});

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

    // If no data was passed from the previous page, 
    useEffect(() => {
        let active = true;

        if(active === true) {
            if(squareBookUrl === defaultItemURL && !!itemData === true) {
                let squareSingleItemURL = buildSingleItemURL(itemData.id);
                setSquareBookUrl(squareSingleItemURL);
            }
    
            if(!!itemData?.imageURL === true) {
                setImageUrl(itemData.imageURL);
            }
        }

        return () => active = false;
    }, [squareBookUrl, itemData])

    if(!!itemData === false) {
        // const localData = localStorage.getItem(urlParam);
        // const localDataJson = JSON.parse(localData);
        // setItemData(localDataJson);
        
        return <LoadingIndicator />;
    }

    return (
        <div className="singleitem-buttondivider">
            <main id="singleitem">
                <div className="singleitem-imagecontainer">
                    <div id="singleitem-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
                </div>
                <div className="singleitem-information-container">
                    <div className="singleitem-information">
                        <p id="singleitem-name">{itemData.name.toUpperCase()}</p>
                        {!hasVariation && <Link target='_blank' to={buyNowButton}><ActionButton buttonSettings={buyButtonSettings}></ActionButton></Link>}
                        {hasVariation && itemData.variations.map(variation => {
                            return (
                                <div key={variation.id+variation.name} className="singleitem-variation-container">
                                    <p className="singleitem-variation">{variation.name.toUpperCase()}</p>
                                    {buyButtonActivated &&
                                        <Link target='_blank' to={squareBookUrl}><ActionButton buttonSettings={bookButtonSettings}></ActionButton></Link>
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
                </div>
            </main>
            <ActionButton buttonSettings={backButtonSettings}></ActionButton>
        </div>
    )
}