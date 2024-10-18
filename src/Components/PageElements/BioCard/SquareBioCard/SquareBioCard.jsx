import { useEffect, useState } from "react";
import { buildAzureFunctionURL } from '../../../../Functions/azureFunctionsUtility';
import { BioCard } from "../BioCard";
import { CardModal } from "../../CardModal/CardModal";
import { ExpandedCard } from "../../ExpandedCard/ExpandedCard";
import '../BioCard.css';

export const SquareBioCard = () => {
    const [cardData, setCardData] = useState(null);
    const [bioData, setBioData] = useState(null);
    
    // Deselects data for modal
    function deSelectBioCard() {
        setBioData(null);
    }
    
    // Selects data for modal
    function selectBioCard(data) {
        if(data != null) {
            setBioData(data);
        }
    }

    useEffect(() => {
        let active = true;

        const getCardData = async () => {
            let url = buildAzureFunctionURL(process.env.REACT_APP_GET_EMPLOYEE, "getemployees");
            
            if(active){
                await fetch(url, {method: "GET"})
                    .then(response => response.json())
                    .then(json => {
                        let bioCardData = json.map(card => {
                            let bioCard = {
                                id: card.id,
                                imageURL: card.ImageURL,
                                image: null,
                                name: card.Name,
                                sign: card.Sign,
                                type: "Tarot Reader",
                                description: card.Description
                            };

                            return bioCard;
                        });

                        if(!cardData)
                            setCardData(bioCardData);
                    });
                }

                return () => {
                    active = false;
                }
            }
            getCardData();
        }, [cardData]);

    return (
        <div className="biocard-flex-container">
            {cardData?.map(data => {
                return <BioCard key={data.id} cardData={data} callbackSelect={selectBioCard}></BioCard>
            })}
            {bioData && (
                <CardModal containerStyleId={'biocard-modal-container'} callBackDeselect={deSelectBioCard} >
                    <ExpandedCard callBackDeselect={deSelectBioCard}  productItem={bioData}></ExpandedCard>
                </CardModal>
            )}
        </div>
    );
}