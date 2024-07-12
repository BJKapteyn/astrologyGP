import '../../../App.css';
import './TitleCard.css';

export function TitleCard({ titleData }) {
    const {titleText, subText, backgroundimage} = titleData;

    return (
        <div>
            <section style={{backgroundImage:`url(${backgroundimage})`}} className="titleCard-container">
                <h2 className="titleCard-flexitem" id="titlecard-title">{titleText}</h2>
                
                {subText && <h4 className="titleCard-flexitem" id="titlecard-subtext">{subText}</h4>}

            </section>
        </div>
    );
}