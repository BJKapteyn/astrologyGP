import { useState, useEffect } from "react";
import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { CardInfoData } from "./CardInfoData";
import { ExpandedCard } from "../ExpandedCard/ExpandedCard";
import { buildAzureFunctionURL } from "../../../Functions/azureFunctionsUtility";

// lowerBound inclusive and upperBound exclusive, it refers to the sliced portion of the data
export const BioCards = ({lowerBound, upperBound}) => {
    const [bioData, selectBioData] = useState(null);
    const [carlyData, setCarlyData] = useState(null);
    const [cardData, setCardData] = useState(CardInfoData);

    useEffect(() => {
        async function s() {
            let url = buildAzureFunctionURL(process.env.REACT_APP_GET_EMPLOYEE, "getemployees");
    
            await fetch(url, {method: "GET"}).then(response => response.json()).then(json  => {
                let carly = [{
                    id: 100,
                    imageURL: json[0].ImageURL,
                    image: 'woman1.png',
                    name: json[0].Name,
                    sign: json[0].Sign,
                    type: "Tarot Reader",
                    email: json[0].Email,
                    info: '$100 | 1hr',
                    description: json[0].Description
                }]
                setCarlyData(carly)
                setCardData(carlyData?.concat(cardData));
            }, [])
        }

        s();
    })

    // Deselects data for modal
    function deSelectBioCard() {
        selectBioData(null);
    }
    
    // Selects data for modal
    function selectBioCard(bioData) {
        if(bioData != null) {
            selectBioData(bioData);
        }
    }

    function renderCards(sliceLowerBound = 0, sliceUpperBound = CardInfoData.length) {

        return cardData?.slice(sliceLowerBound, sliceUpperBound).map((card) => {
            
            return <BioCard
                        key={card.id} 
                        callbackSelect={selectBioCard}
                        cardData={card}
                        />;
            });
    }

    return (
        <div className="biocard-flex-container">
            {renderCards(lowerBound, upperBound)}
            {bioData && (
                <CardModal containerStyleId={'biocard-modal-container'} callBackDeselect={deSelectBioCard} >
                    <ExpandedCard callBackDeselect={deSelectBioCard}  productItem={bioData}></ExpandedCard>
                </CardModal>
            )}
        </div>
    );
}