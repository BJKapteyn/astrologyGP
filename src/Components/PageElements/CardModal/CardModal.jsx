
export const CardModal = ({cardData, callBackDeselect}) => {

    // // 
    // function deSelect() {
    //     selectBioData(null);
    // }

    // function select(bioData) {
    //     if(bioData != null) 
    //         selectBioData(bioData);
    // }

    return (
        <div className="cardmodal-background" onClick={callBackDeselect}>
            <section className="cardmodal-container">
                <span onClick={callBackDeselect} className="cardmodal-exit">X</span>
                <div className="cardmodal-biocard">
                <img alt={cardData.description} src={require('../../../Pics/BioCardPics/' + cardData.image + '.jpg')} className="cardmodal-image"></img>
                <div className="cardmodal-description">
                    <p className="cardmodal-description-text">{cardData.description}</p>
                </div>
                </div>
            </section>
        </div>
    );
}

