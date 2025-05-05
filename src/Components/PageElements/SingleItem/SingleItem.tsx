import { useState } from "react";
import { ItemData } from "Models/Interfaces/ItemData";
import { Link } from "react-router-dom";
import { useRandomImageUrl } from "CustomHooks/useRandomImageUrl";
import { ActionButton } from "Components/PageElements/ActionButton/ActionButton";
import './SingleItem.css';
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";

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
        printVariationBuyButtons = false 
    }) => {

    const [purchaseLink, setPurchaseLink] = useState(itemData?.buyNowLink);
    const hasVariation: boolean = !!itemData?.variations; 
    const imageUrl: string | null = useRandomImageUrl();

    if(!!purchaseLink === false && !!itemData?.buyNowLink) {
        setPurchaseLink(defaultBuyNowURL);
    }

    const purchaseButtonSettings = {
        buttonText: purchaseButtonText,
        buttonStyleId: 'singleitem-bookbutton',
        action: null
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
                    <p id="singleitem-name">{itemData.name.toUpperCase()}</p>
                    {!!printVariationBuyButtons === false
                        ? <Link target='_blank' to={purchaseLink}><ActionButton buttonSettings={purchaseButtonSettings}></ActionButton></Link>
                        : itemData.variations.map(variation => {
                            return (
                                <div key={variation.id+variation.name} className="singleitem-variation-container">
                                    <p className="singleitem-variation">{variation.name.toUpperCase()}</p>
                                    <Link target='_blank' to={purchaseLink}><ActionButton buttonSettings={purchaseButtonSettings}></ActionButton></Link>
                                </div>
                            );
                        })
                    }
                    {itemData.description && (hasVariation ? <p id="singleitem-descriptiontitle">DESCRIPTION</p> : <p style={{borderTop: 'none'}} id="singleitem-descriptiontitle">DESCRIPTION</p>)}
                    {itemData.description && <p id="singleitem-description">{itemData.description}</p>}
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                {/* <ActionButton buttonSettings={backButtonSettings}></ActionButton> */}
            </div>
        </section>

    );
};
