export const Card = () => {
    <section className="cardmodal-container">
        <span onClick={deSelect} className="cardmodal-exit">X</span>
        <div className="cardmodal-biocard">
            <img src={require('../../../Pics/BioCardPics/' + bioData.image + '.jpg')} className="cardmodal-image"></img>
            <div className="cardmodal-description"></div>
        </div>
    </section>
}