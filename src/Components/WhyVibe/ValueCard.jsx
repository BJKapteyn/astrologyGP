import './WhyVibe.css';

export const ValueCard = ({ valueCardData }) => {
    const {title, text} = valueCardData;

    return (
        <div className="valuecard">
            <div className="valucard-titleContainer">
                <h3 className="valuecard-title">{title}</h3>
            </div>
            <p className="valucard-text">{text}</p>
        </div>
    );
}