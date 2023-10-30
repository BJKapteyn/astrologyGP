import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { useState } from "react";
import { CardInfoData } from "./CardInfoData";

export function BioCards() {
    const [bioData, selectBioData] = useState(null);

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
                <h1 id="biocard-title">Meet Y Us ABCDEFGHIJKLMNOP</h1>
            </div>
            <div className="biocard-flex-container">
            
                {CardInfoData.map((card) => {
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