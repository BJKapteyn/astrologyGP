import { ValueCard } from "./ValueCard";
import '../../App.css';
import './WhyVibe.css';

export const ValueCards = ({cardDatas}) => {

    return (
        <div className="valuecards">
            {cardDatas.map(cardData => {
                return (
                    <ValueCard key={cardData.id} valueCardData={cardData}></ValueCard>
                );
            })}
        </div>
    );
}