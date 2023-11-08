import {InfoCardData} from "./InfoCardData";
import '../../../App.css';
import "./InfoCard.css";

export function InfoCard() {
    return (
        <div>
            <div className="title-container">
                <h1 id="infocard-title">WHAT WE'RE ABOUT</h1>
            </div>
            <div className="infocard-flex-container">
                {InfoCardData.map((data) => {
                    const {id, image, keywordText} = data;

                    return (
                        <section className="infocard-flexbox" key={id}>
                            <div className="infocard-image-container">
                                <img className="infocard-image" alt={keywordText} src={require('../../../Pics/InfoCardPics/' + image + '.jpg')}/>
                                <div>
                                    <p className="infocard-keyword">{keywordText}</p>
                                </div>
                            </div>
                            
                        </section>
                    );
                })}
                <div className="blurb">
                    <p className="infocard-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia beatae quae fugit possimus dolores. Quisquam ea voluptatem pariatur quam sapiente repellat incidunt aperiam, quidem a eum iusto error voluptates. Perferendis?</p>
                </div>
            </div>
        </div>
    );
}   