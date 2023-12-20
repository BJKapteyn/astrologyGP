import { BioCards } from '../../PageElements/BioCard/BioCards.jsx';

export const ReaderTitle = () => {
    return (
        <section className="readers-section">
            <h1 className="readers-title">Find Your Reader</h1>
            <h2 className="readers-header">Terrot Card Readers</h2>
            <div className="readers-terot">
                <BioCards></BioCards>
            </div>
        </section>
    );
}