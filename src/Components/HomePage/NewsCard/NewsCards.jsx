import { NewsCardData } from "./NewsCardData";
import { NewsCard } from "./NewsCard";
import '../../../App.css';
import './NewsCard.css';

export const NewsCards = ({numberOfCards}) => {
    let cardsToDisplay = numberOfCards ? NewsCardData.slice(0, numberOfCards) : NewsCardData;

    return(
        <section className="newscards">
            {
                cardsToDisplay.map(data => {
                    return <NewsCard key={data.id} newsCardData={data}></NewsCard>
                })
            }
        </section>
    );
}