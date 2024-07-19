import { useState, useRef } from "react";
import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { CardInfoData } from "./CardInfoData";
import { ExpandedCard } from "../ExpandedCard/ExpandedCard";

// lowerBound inclusive and upperBound exclusive, it refers to the sliced portion of the data
export const BioCards = ({lowerBound, upperBound}) => {
    const [bioData, selectBioData] = useState(null);
    const data = useRef(CardInfoData);

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

        return data.current.slice(sliceLowerBound, sliceUpperBound).map((card) => {
            
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