import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { useState } from "react";
import { CardInfoData } from "./CardInfoData";

export function BioCards(numberOfCards) {
    const [bioData, selectBioData] = useState(null);
    let numberOfCardsToPrint = numberOfCards ?? CardInfoData.length;

    // Deselects data for modal
    function deSelectBioCard() {
        selectBioData(null);
    }
    
    // Selects data for modal
    function selectBioCard(bioData) {
        if(bioData != null) 
            selectBioData(bioData);
    }

    return (
        <section className="biocard-section">
            <div className="biocard-title-container">
                <h1 id="biocard-title">MEET OUR MEDIUMS</h1>
            </div>
            <div className="biocard-flex-container">
            
                {CardInfoData.concat(1, numberOfCardsToPrint).map((card) => {
                    return <BioCard
                                key={card.id} 
                                callbackSelect={selectBioCard}
                                cardData={card}
                                />;
                    })}

            </div>
            {/* This can deselect the modal */}
            {bioData !== null ? (<CardModal cardData={bioData} callBackDeselect={deSelectBioCard} ></CardModal>) : null}
        </section>
    );
}