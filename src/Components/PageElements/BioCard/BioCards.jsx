import { useState } from "react";
import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { CardInfoData } from "./CardInfoData";

export const BioCards = ({lowerBound, upperBound}) => {
    const [bioData, selectBioData] = useState(null);
    const data = CardInfoData;

    // Deselects data for modal
    function deSelectBioCard() {
        selectBioData(null);
    }
    
    // Selects data for modal
    function selectBioCard(bioData) {
        if(bioData != null) 
            selectBioData(bioData);
    }

    function renderCards(sliceLowerBound = 0, sliceUpperBound = CardInfoData.length) {
        return data.slice(sliceLowerBound, sliceUpperBound).map((card) => {
            return <BioCard
                        key={card.id} 
                        callbackSelect={selectBioCard}
                        cardData={card}
                        />;
            });
    }

    return (
        // <section className="biocard-section">
        //     <div className="biocard-title-container">
        //         <h1 id="biocard-title">MEET OUR MEDIUMS</h1>
        //     </div>
        <div className="biocard-flex-container">
            {renderCards(lowerBound, upperBound)}
            {bioData !== null ? (<CardModal cardData={bioData} callBackDeselect={deSelectBioCard} ></CardModal>) : null}
        </div>

        // </section>
    );
}