import { NewsCards } from './NewsCards.jsx';
import './NewsCard.css';
import '../../../App.scss';

export const NewsCardSection = () => {
    return (
        <section className="newscard-section">
            <NewsCards numberOfCards={3}></NewsCards>
        </section>
    )
}