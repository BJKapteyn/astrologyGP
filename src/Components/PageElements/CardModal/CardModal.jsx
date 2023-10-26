import './CardModal.css';

export const CardModal = ({cardData, callBackDeselect}) => {

    return (
        <div>
            <section className="cardmodal-container">
                <div className="cardmodal-card">
                    <span onClick={callBackDeselect} className="cardmodal-exit">X</span>
                    <div className="cardmodal-biocard">
                        <img className="cardmodal-image" alt={cardData.description} src={require('../../../Pics/BioCardPics/' + cardData.image + '.jpg')}></img>
                        <div className="cardmodal-description">
                            <p className="cardmodal-description-text">{cardData.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cardmodal-background" onClick={callBackDeselect}></div>

        </div>
    );
}

