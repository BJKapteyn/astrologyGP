import './CardModal.css';
import '../../../App.css';

export const CardModal = ({cardData, callBackDeselect}) => {

    return (
        <div>
            <section className="cardmodal-container">
                <div className="cardmodal-border">
                    <div className="cardmodal-card">
                        <span onClick={callBackDeselect} className="cardmodal-exit">X</span>
                        <div className="cardmodal-biocard">
                            <div className="cardmodal-image-container">
                                <img className="cardmodal-image" alt={cardData.description} src={require('../../../Pics/Headshots/' + cardData.image)}></img>
                            </div>
                            <div className="cardmodal-info">
                                <div className="cardmodal-infoitem">
                                    <span id='cardmodal-name'>{cardData.name}</span>
                                </div>
                                <div className="cardmodal-infoitem">
                                    <span className="cardmodal-label">Sign:</span><span className='cardmodal-data'>{cardData.sign}</span>
                                </div>
                                <div className="cardmodal-infoitem">
                                    <span className="cardmodal-label">Email:</span><span className='cardmodal-data'>{cardData.email}</span>
                                </div>
                            </div>
                            <div className="cardmodal-description">
                                <p className="cardmodal-description-text">{cardData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="cardmodal-background" onClick={callBackDeselect}></div>
        </div>
    );
}

