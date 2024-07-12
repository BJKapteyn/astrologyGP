import { BioCards } from '../../PageElements/BioCard/BioCards.jsx';
import { TitleCard } from '../../PageElements/TitleCard/TitleCard.jsx';
import  { SectionDivider } from '../../PageElements/SectionDivider/SectionDivider.jsx'
import backgroundImageFile from '../../../Pics/Landscapes/girlsInField.png'
import './ReaderTitle.css';

export const ReaderTitle = () => {
    const readerTitleData = {
        titleText: 'Work with the Collective',
        backgroundimage: backgroundImageFile
    }

    const tarotData = {
        headingText: 'Tarot Card Readers'
    }

    const mediumData = {
        headingText: 'Mediums'
    }

    return (
        <section className="reader-section">
            <TitleCard titleData={readerTitleData} ></TitleCard>
            <SectionDivider dividerData={tarotData}></SectionDivider>
            <div className="reader-terot">
                <BioCards lowerBound={0} upperBound={6}></BioCards>
            </div>
            <SectionDivider dividerData={mediumData}></SectionDivider>
            <div id='reader-mediums' className="reader-terot">
                <BioCards lowerBound={6} upperBound={10}></BioCards>
            </div>
        </section>
    );
}