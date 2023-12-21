import { BioCards } from '../../PageElements/BioCard/BioCards.jsx';
import './ReaderTitle.css';

export const ReaderTitle = () => {
    return (
        <section className="reader-section">
            <h1 id="reader-title">Find Your Reader</h1>
            <h3 className="reader-header">Terrot Card Readers</h3>
            <div className="reader-terot">
                <BioCards></BioCards>
            </div>
        </section>
    );
}