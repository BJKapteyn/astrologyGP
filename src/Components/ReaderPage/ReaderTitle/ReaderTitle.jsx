import { TitleCard } from '../../PageElements/TitleCard/TitleCard.jsx';
import { SectionDivider } from '../../PageElements/SectionDivider/SectionDivider.jsx';
import { SquareBioCard } from '../../PageElements/BioCard/SquareBioCard/SquareBioCard.jsx';
import backgroundImageFile from '../../../Pics/Landscapes/girlsInField.png';
import './ReaderTitle.css';

export const ReaderTitle = () => {
    const readerTitleData = {
        titleText: 'Work with the Collective',
        backgroundimage: backgroundImageFile,
        styleId: 'reader-titlecard'
    }

    const tarotData = {
        headingText: 'Meet The Collective'
    }

    const bridgeText = 'ARE YOU YEARNING TO RECONNECT WITH THE SOULS WHO HAVE TOUCHED YOUR HEART? BOOK A SESSION WITH US, AND ' +
                        'TOGETHER, WE WILL OPEN THE DOOR TO THE INFINITE WISDOM AND LOVE THAT EXISTS IN THE SPIRIT REALM. WHETHER YOU ARE ' +
                        'SEEKING CLOSURE, UNDERSTANDING, OR SIMPLY A REAFFIRMATION OF THE ETERNAL BOND WITH YOUR LOVED ONES, I AM HERE ' +
                        'TO GUIDE YOU ON THIS SACRED JOURNEY. THANK YOU FOR ENTRUSTING ME WITH YOUR SPIRITUAL PATH. MAY THE MESSAGES ' +
                        'FROM THE OTHER SIDE BRING YOU COMFORT, HEALING, AND THE UNDENIABLE KNOWLEDGE THAT LOVE NEVER DIES.'

    return (
        <section className="reader-section">
            <TitleCard titleData={readerTitleData} ></TitleCard>
            <div className="reader-bridge">
                <p className="reader-bridgetext">{bridgeText}</p>
            </div>
            <SectionDivider dividerData={tarotData}></SectionDivider>
            <div className="reader-terot">
                <SquareBioCard></SquareBioCard>
            </div>
        </section>
    );
}