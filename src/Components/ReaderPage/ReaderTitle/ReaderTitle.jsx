import { BioCards } from '../../PageElements/BioCard/BioCards.jsx';
import './ReaderTitle.css';

export const ReaderTitle = () => {
    return (
        <section className="reader-section">
            <div className='reader-title-section'>
                <h1 id="reader-title">Work with the Collective</h1>
                <div className="reader-info">
                    <p className="reader-infotext">
                        Are you yearning to reconnect with the souls who have touched your heart? Book a session with us, and together, we will open the door to the infinite wisdom and love that exists in the spirit realm. Whether you are seeking closure, understanding, or simply a reaffirmation of the eternal bond with your loved ones, I am here to guide you on this sacred journey.
                        Thank you for entrusting me with your spiritual path. May the messages from the other side bring you comfort, healing, and the undeniable knowledge that love never dies.
                    </p>
                </div>
            </div>
            <h3 className="reader-header">Tarot Card Readers</h3>
            <div className="reader-terot">

                <BioCards lowerBound={0} upperBound={6}></BioCards>
                
            </div>
            <h3 id="reader-mediums" className="reader-header">Mediums</h3>
            <div id='reader-mediums' className="reader-terot">

                <BioCards lowerBound={6} upperBound={10}></BioCards>

            </div>
        </section>
    );
}