import { SectionDivider } from '../../PageElements/SectionDivider/SectionDivider.jsx';
import { SquareBioCard } from '../../PageElements/BioCard/SquareBioCard/SquareBioCard.jsx';
import './ReaderTitle.css';

export const ReaderTitle = () => {
    const tarotData = {
        headingText: 'Meet The Collective'
    }

    return (
        <section className="reader-section">

            <SectionDivider dividerData={tarotData}></SectionDivider>
            <div className="reader-terot">
                <SquareBioCard></SquareBioCard>
            </div>
        </section>
    );
}