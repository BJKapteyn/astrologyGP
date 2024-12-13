import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { buyButtonActivated } from '../../../FeatureFlags/launchFeatures.js';
import { ActionButton } from '../ActionButton/ActionButton.jsx';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator.jsx';
import { buildSingleItemURL } from '../../../Functions/urlBuilders.js';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import '../../../App.css';
import './SingleItem.css';

// View detailed item information
export const SingleItem = ({ needsVariation: hasVariation = false}) => {
    const defaultItemURL = 'https://the-vibe-collective.square.site/';
    const [imageUrl, setImageUrl] = useState(moon);
    const [itemData, setItemData] = useState(useLocation().state);
    const [squareItemURL, setSquareURL] = useState(defaultItemURL);

    const urlParam = useParams().singleiteming;

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
    
    if(!localStorage.getItem(urlParam)) {
        localStorage.setItem(itemData.name, JSON.stringify(itemData));
    }

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
        const localData = localStorage.getItem(urlParam);
        const localDataJson = JSON.parse(localData);
        setItemData(localDataJson);
        
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
    )
}