export const Card = ({bioData}) => {

    <section className="cardmodal-container">
        <span onClick={deSelect} className="cardmodal-exit">X</span>
        <div className="cardmodal-biocard">
            <img src={require('../../../Pics/BioCardPics/' + bioData.image + '.jpg')} className="cardmodal-image"></img>
            <div className="cardmodal-description">
                <p className="cardmodal-description-text">{}</p>
            </div>
        </div>
    </section>
}