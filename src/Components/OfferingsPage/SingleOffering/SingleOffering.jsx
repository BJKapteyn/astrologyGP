import { useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
import './SingleOffering.css';

export const SingleOffering = () => {
    let offeringData = useLocation();
    const urlParams = useParams();
    console.log(urlParams);

    useEffect(() => {
        localStorage.setItem(offeringData.name, offeringData);
    }, []);

    if(!offeringData) {
        offeringData = localStorage.getItem(urlParams.singleoffering);
    }

    return (
        <main id="singleoffer">
            <div className="singleoffer-imagecontainer">
                <img id="singleoffer-image" src={moon} alt={offeringData.name} />
            </div>
            <div className="singleoffer-information">
                <div id="singleoffer-name">
                    
                </div>
                <div id="singleoffer-name"></div>
                <div id="singleoffer-name"></div>
                <div id="singleoffer-name"></div>
            </div>
        </main>
    )
}