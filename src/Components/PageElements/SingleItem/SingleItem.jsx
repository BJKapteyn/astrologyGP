import { useEffect, useState, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { buyButtonActivated } from '../../../FeatureFlags/launchFeatures.js';
import { ActionButton } from '../ActionButton/ActionButton.jsx';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { buildSingleItemURL, getItemIdFromUrlPath } from '../../../UtilityFunctions/urlUtility.js';
import { useLocalData } from '../../../CustomHooks/useLocalData.jsx';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import '../../../App.css';
import './SingleItem.css';

// View detailed item information
//   rootPage:      the page to return to when the back button is clicked
//   hasVariation:  whether the item has variations
export const SingleItem = ({ rootPage, hasVariation = false}) => {
    const defaultItemURL = 'https://the-vibe-collective.square.site/';
    const [imageUrl, setImageUrl] = useState(moon);
    const [itemData, setItemData] = useState(useLocation().state);
    const [squareItemURL, setSquareURL] = useState(defaultItemURL);
    const timeToCacheData = 120;
    const urlParams = useRef(useLocation());
    const navigate = useNavigate();
    const itemId = getItemIdFromUrlPath(urlParams.current.pathname);
    const localData = useLocalData(itemId, timeToCacheData);


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
    
    // if(!localStorage.getItem(urlParams)) {
    //     localStorage.setItem(itemData.name, JSON.stringify(itemData));
    // }

    useEffect(() => {
        if(itemData.imageURL) {
            setImageUrl(itemData.imageURL);
        }
        
    }, [itemData]);

    useEffect(() => {
        let active = true;
        if(squareItemURL === defaultItemURL && itemData && active === true) {
            let squareSingleItemURL = buildSingleItemURL(itemData.id);
            setSquareURL(squareSingleItemURL);
        }

        return () => active = false;
    }, [squareItemURL, itemData])

    if(!itemData) {
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
                        {!hasVariation && <Link target='_blank' to={"https://the-vibe-collective.square.site/shop/products/HUMYRU6WAPVQ54PYRR4FEUAZ"}><ActionButton buttonSettings={buyButtonSettings}></ActionButton></Link>}
                        {hasVariation && itemData.variations.map(variation => {
                            return (
                                <div key={variation.id+variation.name} className="singleitem-variation-container">
                                    <p className="singleitem-variation">{variation.name.toUpperCase()}</p>
                                    {buyButtonActivated &&
                                        <Link target='_blank' to={squareItemURL}><ActionButton buttonSettings={bookButtonSettings}></ActionButton></Link>
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