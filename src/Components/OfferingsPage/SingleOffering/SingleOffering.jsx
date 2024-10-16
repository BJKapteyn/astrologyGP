import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import './SingleOffering.css';

export const SingleOffering = () => {
    let offeringData = useLocation().state;
    const urlParams = useParams();
    console.log(urlParams);

    useEffect(() => {
        localStorage.setItem(offeringData.name, offeringData);
    });

    if(!offeringData) {
        offeringData = localStorage.getItem(urlParams.singleoffering);
    }

    console.log(offeringData);
    return (
        <main id="singleoffer">
            <div className="singleoffer-imagecontainer">
                <img id="singleoffer-image" src={moon} alt={offeringData.name.toUpperCase()} />
            </div>
            <div className="singleoffer-information">
                <p id="singleoffer-name">{offeringData.name.toUpperCase()}</p>
                    {offeringData.variations.map(variation => {
                        return <p className="singleoffer-variation">{variation.name.toUpperCase()}</p>
                    })}
                <p id="singleoffer-descriptiontitle">DESCRIPTION</p>
                <p id="singleoffer-description">{offeringData.description}</p>
            </div>
        </main>
    )
}