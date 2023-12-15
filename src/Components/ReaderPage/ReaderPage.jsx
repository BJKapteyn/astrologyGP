import { CardInfoData } from '../PageElements/BioCard/CardInfoData.jsx';d

export const ReaderPage = () => {

    return (
        <main className="readers-section">
            <h1 className="readers-title">Meet our readers</h1>
            <div className="readers-terot">
                {CardInfoData.map(() => {
                    return (
                        <div className="readers-biocard">
                            
                        </div>
                    )
                })}
            </div>
        </main>
    );
}