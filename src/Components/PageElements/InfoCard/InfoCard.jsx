import {InfoCardData} from "./InfoCardData";
import blurbimage from '../../../Pics/Landscapes/groupYoga.png';
import "./InfoCard.css";

export function InfoCard() {
    return (
        <div>
            <div className="title-container">
                <h1 id="infocard-title">WELCOME!</h1>
            </div>
            <div className="infocard-joinflex">
                <div className="infocard-joinflexitem" id="infocard-blurbimage-container">
                    <img src={blurbimage} alt="yoga" id="infocard-blurbimage" />
                </div>
                <div className="infocard-joinflexitem" id="infocard-join">
                    <h2>JOIN US</h2>
                    <p className="infocard-description">Welcome to Vibe Collective, where we provide quality divination readings online to help you access various metaphysical and healing techniques. Our goal is to create an intimate and accessible user experience, so you can book your reading from anywhere in the world at any time of the day.</p>
                </div>
                <div className="infocard-joinflexitem" id="infocard-joinlink">
                    <p className="infocard-description">a</p>
                </div>
            </div>

            <div className="infocard-flex-container">
                {InfoCardData.map((data) => {
                    const {id, image, keywordText} = data;

                    return (
                        <section className="infocard-flexbox" key={id}>
                            <div className="infocard-image-container">
                                <img className="infocard-image" alt={keywordText} src={require('../../../Pics/InfoCardPics/' + image + '.jpg')}/>
                                <p className="infocard-keyword">{keywordText}</p>
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}   