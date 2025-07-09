import { useState } from "react";
import { ItemData } from "Models/Types/types";
import { Link } from "react-router-dom";
import { useRandomImageUrl } from "CustomHooks/useRandomImageUrl";
import { ActionButton } from "Components/PageElements/ActionButton/ActionButton";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import './SingleItem.css';

interface SingleItemProps {
    itemData: ItemData;
    defaultBuyNowURL?: string;
    purchaseButtonText?: string;
    printVariationBuyButtons?: boolean;
}

export const SingleItem: React.FC<SingleItemProps> = ({ 
        itemData,
        defaultBuyNowURL = '', 
        purchaseButtonText = 'BUY NOW', 
    }) => {

    const [purchaseLink, setPurchaseLink] = useState(defaultBuyNowURL);
    const randomImageUrl = useRandomImageUrl();
    const [imageUrl, setImageUrl] : [string | null, React.Dispatch<React.SetStateAction<string | null>>] = useState<string | null>(randomImageUrl);
    const hasVariation: boolean = !!itemData.variations === true && itemData.variations.length > 0; 
    let currentImageURL = imageUrl;
    let currentPurchaseLink = purchaseLink;
    const purchaseButtonSettings = {
        buttonText: purchaseButtonText,
        buttonStyleId: 'singleitem-bookbutton',
        action: null
    }

    if(itemData?.imageURL && currentImageURL !== itemData?.imageURL) {
        setImageUrl(itemData?.imageURL);
    }

    if(itemData?.imageURL && currentPurchaseLink !== itemData?.buyNowLink) {
        setPurchaseLink((itemData?.buyNowLink));
    }

    if(!itemData) {
        return <LoadingIndicator />;
    }
    return (
         <section id="singleitem">
            <div className="singleitem-imagecontainer">
                <div id="singleitem-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>
            <div className="singleitem-information-container">
                <div className="singleitem-information">
                    <p id="singleitem-name">{itemData.name?.toUpperCase()}</p>
                    {!hasVariation && <Link target='_blank' to={purchaseLink}><ActionButton buttonSettings={purchaseButtonSettings}></ActionButton></Link>}
                    {hasVariation && itemData.variations.map(variation => {
                        return (
                            <div key={variation.id+variation.name} className="singleitem-variation-container">
                                <p className="singleitem-variation">{variation.name.toUpperCase()}</p>
                                <Link target='_blank' to={purchaseLink}><ActionButton buttonSettings={purchaseButtonSettings}></ActionButton></Link>
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
        </section>
    );
};
