import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import '../../../App.css';
import './SingleOffering.css';
// 
export const SingleOffering = () => {
    const [imageUrl, setImageUrl] = useState(moon);
    const [offeringData, setOfferingData] = useState(useLocation().state);

    const urlParam = useParams().singleoffering;

    const bookButtonSettings = {
        buttonText: 'BOOK',
        buttonStyleId: 'singleoffer-bookbutton',
        action: null
    }
    
    if(!localStorage.getItem(urlParam)) {
        localStorage.setItem(offeringData.name, JSON.stringify(offeringData));
    }

    useEffect(() => {
        if(offeringData.imageURL) {
            setImageUrl(offeringData.imageURL);
        }
        
    }, [offeringData]);

    if(!offeringData) {
        const localData = localStorage.getItem(urlParam);
        const localData2 = JSON.parse(localData);
        setOfferingData(localData2);
        console.log(offeringData);
    }
    
    if(!offeringData) {
        return <p>loading</p>
    }
    return (
        <main id="singleoffer">
            <div className="singleoffer-imagecontainer">
                <div className="singleoffer-image"></div>
                <img id="singleoffer-image" src={imageUrl} alt={offeringData.name.toUpperCase()} />
            </div>
            <div className="singleoffer-information-container">
                <div className="singleoffer-information">
                    <p id="singleoffer-name">{offeringData.name.toUpperCase()}</p>
                    {offeringData.variations.map(variation => {
                        return (
                            <div className="singleoffer-variation-container">
                                <p className="singleoffer-variation">{variation.name.toUpperCase()}</p>
                                <Link to={"https://the-vibe-collective.square.site/"}><ActionButton buttonSettings={bookButtonSettings}></ActionButton></Link>
                            </div>
                    )
                    })}
                    <p id="singleoffer-descriptiontitle">DESCRIPTION</p>
                    <p id="singleoffer-description">{offeringData.description}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </main>
    )
}