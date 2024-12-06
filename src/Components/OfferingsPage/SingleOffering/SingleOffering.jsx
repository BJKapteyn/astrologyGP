// import { useEffect, useState } from 'react';
// import { useLocation, useParams, Link } from 'react-router-dom';
// import { buyButtonActivated } from '../../../FeatureFlags/launchFeatures.js'
// import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
// import { LoadingIndicator } from '../../PageElements/LoadingIndicator/LoadingIndicator';
// import { buildSingleOfferingURL } from '../../../Functions/urlBuilders';
// import moon from '../../../Pics/Portraits/portrait-sunsetWaves.png';
// import '../../../App.css';
// import './SingleOffering.css';

// // View detailed offering information
// export const SingleOffering = () => {
//     const defaultOfferingURL = 'https://the-vibe-collective.square.site/';
//     const [imageUrl, setImageUrl] = useState(moon);
//     const [offeringData, setOfferingData] = useState(useLocation().state);
//     const [squareOfferingURL, setSquareURL] = useState(defaultOfferingURL);

//     const urlParam = useParams().singleoffering;

//     const bookButtonSettings = {
//         buttonText: 'BOOK',
//         buttonStyleId: 'singleoffer-bookbutton',
//         action: null
//     }
    
//     if(!localStorage.getItem(urlParam)) {
//         localStorage.setItem(offeringData.name, JSON.stringify(offeringData));
//     }

//     useEffect(() => {
//         if(offeringData.imageURL) {
//             setImageUrl(offeringData.imageURL);
//         }
        
//     }, [offeringData]);

//     useEffect(() => {
//         let active = true;
//         if(squareOfferingURL === defaultOfferingURL && offeringData && active === true) {
//             let squareSingleOfferingURL = buildSingleOfferingURL(offeringData.id);
//             setSquareURL(squareSingleOfferingURL);
//         }

//         return () => active = false;
//     }, [squareOfferingURL, offeringData])

//     if(!offeringData) {
//         const localData = localStorage.getItem(urlParam);
//         const localDataJson = JSON.parse(localData);
//         setOfferingData(localDataJson);
        
//         return <LoadingIndicator />;
//     }

//     return (
//         <main id="singleoffer">
//             <div className="singleoffer-imagecontainer">
//                 <div id="singleoffer-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
//             </div>
//             <div className="singleoffer-information-container">
//                 <div className="singleoffer-information">
//                     <p id="singleoffer-name">{offeringData.name.toUpperCase()}</p>
//                     {offeringData.variations.map(variation => {
//                         return (
//                             <div key={variation.id+variation.name} className="singleoffer-variation-container">
//                                 <p className="singleoffer-variation">{variation.name.toUpperCase()}</p>
//                                 {buyButtonActivated &&
//                                     <Link target='_blank' to={squareOfferingURL}><ActionButton buttonSettings={bookButtonSettings}></ActionButton></Link>
//                                 }
//                             </div>
//                         )
//                     })}
//                     <p id="singleoffer-descriptiontitle">DESCRIPTION</p>
//                     <p id="singleoffer-description">{offeringData.description}</p>
//                     <br></br>
//                     <br></br>
//                     <br></br>
//                 </div>
//             </div>
//         </main>
//     )
// }
