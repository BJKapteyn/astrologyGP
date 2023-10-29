import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { useState } from "react";
import { CardInfoData } from "./CardInfoData";

export function BioCards() {
    const [bioData, selectBioData] = useState(null);

    // 
    function deSelectBioCard() {
        selectBioData(null);
    }

    function selectBioCard(bioData) {
        if(bioData != null) 
            selectBioData(bioData);
    }

    return (
        <section className="biocard-section">
            <div className="biocard-flex-container">
                {CardInfoData.map((card) => {
                    return <BioCard
                                key={card.id} 
                                callbackSelect={selectBioCard}
                                // id={card.id} 
                                // description={card.description} 
                                // image={card.image} 
                                cardData={card}
                                />;
                                
                    })}
            </div>
            {bioData !== null ? (<CardModal cardData={bioData} callBackDeselect={deSelectBioCard} ></CardModal>) : null}
        </section>
    );
}