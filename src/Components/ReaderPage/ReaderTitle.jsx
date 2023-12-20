import { BioCard } from '../PageElements/BioCard/BioCard.jsx';
import { CardInfoData } from '../PageElements/BioCard/CardInfoData.jsx';d

export default ReaderTitle = () => {

    return (
        <main className="readers-section">
            <h1 className="readers-title">Find Your Reader</h1>
            <div className="readers-terot">
                {CardInfoData.map((card) => {
                    return (
                        <div className="readers-biocard">
                            <BioCard 
                                key={card.id} 
                                callbackSelect={selectBioCard}
                                cardData={card}
                            />
                        </div>
                    )
                })}
            </div>
        </main>
    );
}