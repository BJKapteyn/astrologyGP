import './NewsCard.css';
import '../../../App.css'
import { NewsCardData } from './NewsCardData';

export const NewsCard = () => {
    function leftOrRight(data) {
        
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
                        const imagePath = require('../../../Pics/Portraits/' + data.image)
                        return (
                            <div key={data.id} className="newscard">
                                <div className="newscard-image-container">
                                    <img src={imagePath} alt={data.id} className="newscard-image" />
                                </div>
                                <div className="newscard-text-container">
                                    <p className="newscard-text">{data.text}</p>
                                </div>
                            </div>
                        );
                    })
                }

        </section>
    )
}