import '../../../App.scss';
import './TitleCard.css';

export function TitleCard({ titleData }) {
    const {titleText, subText, backgroundimage, styleId, svgElement} = titleData;

    return (
        <div>
            <section id={styleId} style={{backgroundImage:`url(${backgroundimage})`}} className="titleCard-container">
                {svgElement && svgElement}
                <h2 className="titleCard-flexitem" id="titlecard-title">{titleText}</h2>
                {subText && <h4 className="titleCard-flexitem" id="titlecard-subtext">{subText}</h4>}
            </section>
        </div>
    );
}