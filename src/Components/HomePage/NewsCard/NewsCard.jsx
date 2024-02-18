import { NewsCards } from './NewsCards.jsx';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton.jsx';
import { Link } from 'react-router-dom';
import './NewsCard.css';
import '../../../App.css';

export const NewsCard = () => {

    const moreButtonSettings = {
        buttonText: 'MORE',
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
                <div className="newscard-more-container">
                    <Link to={'/News'}><ActionButton buttonSettings={moreButtonSettings}></ActionButton></Link>
                </div>
            </div>
            <NewsCards numberOfCards={2}></NewsCards>
        </section>
    )
}