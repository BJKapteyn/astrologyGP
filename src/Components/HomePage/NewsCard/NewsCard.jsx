import './NewsCard.css';
import '../../../App.css'
import { NewsCardData } from './NewsCardData';

export const NewsCard = () => {
    function buildNewsCard(data) {
        if(data == null) {
            console.debug('News card data is null');
        }
        
        const imagePath = require('../../../Pics/Portraits/' + data.image)
        const imageAndContainer = (
            <div className="newscard-image-container">
                <img src={imagePath} alt={data.id} className="newscard-image" />
            </div>
        );
        const textAndContainer = (
            <div className="newscard-text-container">
                <p className="newscard-text">{data.text}</p>
            </div>
        );
        // set order of image and text
        const newsCard = (
            <div key={data.id} className="newscard">
                {data.imageLeftSide ? imageAndContainer : textAndContainer}
                {data.imageLeftSide ? textAndContainer : imageAndContainer}
            </div>
        );
        return newsCard;
    }
    return (
        <section className="newscard-section">
            <div className="newscard-card">
                <div>
                    <h1 id='newscard-title' className="title-container">RECENT NEWS</h1>
                </div>
                <div className="newscard-infoflex">
                    <div >
                        <p id="one" className="blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur debitis sapiente animi cupiditate cumque ducimus tenetur aliquam excepturi incidunt blanditiis vel officia optio labore rerum, temporibus molestiae suscipit eveniet!</p>
                    </div>
                    <div >
                        <p id="two" className="blurb">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vero! Deleniti quo ad a excepturi iure vel dolorum necessitatibus sint, praesentium, cupiditate libero? Nam reprehenderit aliquid pariatur debitis commodi modi!</p>
                    </div>
                    <div >
                        <p id="three" className="blurb">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vero! Deleniti quo ad a excepturi iure vel dolorum necessitatibus sint, praesentium, cupiditate libero? Nam reprehenderit aliquid pariatur debitis commodi modi!</p>
                    </div>
                    <div >
                        <p id="four" className="blurb">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, vero! Deleniti quo ad a excepturi iure vel dolorum necessitatibus sint, praesentium, cupiditate libero? Nam reprehenderit aliquid pariatur debitis commodi modi!</p>
                    </div>
                </div>
                <div className='button1'>MORE</div>
                    </div>
                {
                    NewsCardData.map(data => {
                        return buildNewsCard(data);
                            // <div key={data.id} className="newscard">
                            //     <div className="newscard-image-container">
                            //         <img src={imagePath} alt={data.id} className="newscard-image" />
                            //     </div>
                            //     <div className="newscard-text-container">
                            //         <p className="newscard-text">{data.text}</p>
                            //     </div>
                            // </div>
                        
                    })
                }

        </section>
    )
}