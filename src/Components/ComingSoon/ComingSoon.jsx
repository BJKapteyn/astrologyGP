import './ComingSoon.css';

export const ComingSoon = ({ comingSoonData }) =>  {
    const { heading, subtext, backgroundimage} = comingSoonData;
    const imagePath = require(`../../Pics/Landscapes/${backgroundimage}`);

    return (
        <section style={{backgroundImage: `url(${imagePath})`}} className="comingsoon">
            <h1 className="comingsoon-heading">{heading}</h1>
            <p className="comingsoon-subtext">{subtext}</p>
        </section>
    );
}