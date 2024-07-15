import { useState, useRef } from "react";
import { BioCard } from "./BioCard";
import { CardModal } from "../CardModal/CardModal";
import { CardInfoData } from "./CardInfoData";

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
        if(bioData != null) 
            selectBioData(bioData);
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
                <CardModal callBackDeselect={deSelectBioCard} >
                    <div className="biocard-modal-biocard">
                        <div className="biocard-modal-image-container">
                            <img className="biocard-modal-image" alt={bioData.description} src={require('../../../Pics/Headshots/' + bioData.image)}></img>
                        </div>
                        <div className="biocard-modal-info">
                            <div className="biocard-modal-infoitem">
                                <span id='biocard-modal-name'>{bioData.name}</span>
                            </div>
                            <div className="biocard-modal-infoitem">
                                <span className="biocard-modal-label">Sign:</span><span className='biocard-modal-data'>{bioData.sign}</span>
                            </div>
                            <div className="biocard-modal-infoitem">
                                <span className="biocard-modal-label">Email:</span><span className='biocard-modal-data'>{bioData.email}</span>
                            </div>
                        </div>
                        <div className="biocard-modal-description">
                            <p className="biocard-modal-description-text">{bioData.description}</p>
                        </div>
                    </div>
                </CardModal>
            )}
        </div>
    );
}