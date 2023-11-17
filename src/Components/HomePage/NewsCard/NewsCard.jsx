import './NewsCard.css';
import '../../../App.css'

export const NewsCard = () => {

    return (
        <section className="newscard-section">
            <div className="newscard-card">
                <div>
                    <h1 id='newscard-title' className="title-container">Recent News</h1>
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
            </div>

        </section>
    )
}