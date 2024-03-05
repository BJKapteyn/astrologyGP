import { NewsCards } from './NewsCards.jsx';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton.jsx';
import { NewsCardData } from './NewsCardData.jsx';
import { Link } from 'react-router-dom';
import './NewsCard.css';
import '../../../App.css';

export const NewsCard = () => {

    const moreButtonSettings = {
        buttonText: 'MORE',
    }

    const newsToPrint = NewsCardData.slice(0, 4);

    return (
        <section className="newscard-section">
            <div className="newscard-card">
                <div>
                    <h1 id='newscard-title' className="title-container">RECENT NEWS</h1>
                </div>
                <div className="newscard-infoflex">
                    {
                        newsToPrint.map(x => {
                            return (
                                <div className="newscard-newsblurb">
                                    <p className='blurb'>{x.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="newscard-more-container">
                    <Link to={'/News'}><ActionButton buttonSettings={moreButtonSettings}></ActionButton></Link>
                </div>
            </div>
            <NewsCards numberOfCards={2}></NewsCards>
        </section>
    )
}