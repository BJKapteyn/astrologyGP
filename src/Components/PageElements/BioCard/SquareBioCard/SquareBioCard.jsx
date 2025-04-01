import { useEffect, useState } from "react";
import { buildAzureFunctionURL } from '../../../../UtilityFunctions/urlUtility.js';
import { BioCard } from "../BioCard";
import { CardModal } from "../../CardModal/CardModal";
import { LoadingIndicator } from '../../LoadingIndicator/LoadingIndicator.jsx'
import { ExpandedCard } from "../ExpandedCard/ExpandedCard";
import { FunctionNames } from "../../../../Enums/FunctionNames.js";
import { useRandomImageUrl } from "../../../../CustomHooks/useRandomImageUrl.jsx";
import '../BioCard.css';

export const SquareBioCard = () => {
    const [cardData, setCardData] = useState(null);
    const [bioData, setBioData] = useState(null);
    const randomImage = useRandomImageUrl();
    
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
            let url = buildAzureFunctionURL(FunctionNames.GetAllTeamMembers, process.env.REACT_APP_GET_ALL_TEAM_MEMBERS);
            
            if(active){
                await fetch(url, {method: "GET"})
                    .then(response => response.json())
                    .then(json => {
                        let bioCardData = json.map(card => {
                            if(!!card.imageURL === false) {
                                card.imageURL = randomImage;
                            }

                            let bioCard = {
                                id: card.id,
                                imageURL: card.imageURL,
                                image: null,
                                name: card.name,
                                sign: card.sign,
                                type: "Tarot Reader",
                                description: card.description,
                                threeWords: null,
                                expertise: null
                            };

                            return bioCard;
                        });

                        if(!!cardData === false)
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