import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import './SingleOffering.css';

export const SingleOffering = () => {
    const [imageUrl, setImageUrl] = useState(moon);
    const [offeringData, setOfferingData] = useState(useLocation().state);
    const urlParam = useParams().singleoffering;
    
    if(!localStorage.getItem(urlParam)) {
        localStorage.setItem(offeringData.name, JSON.stringify(offeringData));
    }

    useEffect(() => {
        if(offeringData.imageId) {
            setImageUrl(offeringData.imageId);
        }
        
    }, []);

    if(!offeringData) {
        let localData = localStorage.getItem(urlParam);
        const localData2 = JSON.parse(localData);
        setOfferingData(localData2);
        console.log(offeringData);
    }
    
    console.log(offeringData);
    if(!offeringData) {
        return <p>loading</p>
    }
    return (
        <main id="singleoffer">
            <div className="singleoffer-imagecontainer">
                <img id="singleoffer-image" src={imageUrl} alt={offeringData.name.toUpperCase()} />
            </div>
            <div className="singleoffer-information">
                <p id="singleoffer-name">{offeringData.name.toUpperCase()}</p>
                {offeringData.variations.map(variation => {
                    return (
                    <p className="singleoffer-variation">{variation.name.toUpperCase()}</p>
                )
                })}
                <p id="singleoffer-descriptiontitle">DESCRIPTION</p>
                <p id="singleoffer-description">{offeringData.description}</p>
            </div>
        </main>
    )
}