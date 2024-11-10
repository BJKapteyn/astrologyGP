import { useEffect, useState } from "react";
import { buildAzureFunctionURL } from '../../../../Functions/urlBuilders.js';
import { BioCard } from "../BioCard";
import { CardModal } from "../../CardModal/CardModal";
import { LoadingIndicator } from '../../LoadingIndicator/LoadingIndicator.jsx'
import { ExpandedCard } from "../ExpandedCard/ExpandedCard";
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
            let url = buildAzureFunctionURL("getemployees", process.env.REACT_APP_GET_EMPLOYEE);
            
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
                                description: card.Description,
                                threeWords: card.ThreeWordsToDescribe,
                                expertise: card.Expertise
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

    if(!cardData){
        return <LoadingIndicator></LoadingIndicator>
    }
    

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