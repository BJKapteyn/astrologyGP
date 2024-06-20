import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import './Subscribe.css';

export const Subscribe = () => {

    // const actionButtonSettings = {
    //     buttonText: 'Book Now',
    //     action: () => {}
    // }
    const subscribeButtonSettings = {
        buttonText: 'Subscribe',
        buttonStyleId: 'subscribe-subscribebutton',
        action: () => {}
    }

    return (
        <section className="subscribe">
            {/* <div id="subscribe-header-id" className="subscribe-header">
                <h1 className="subscribe-headertext">JOIN OUR COLLECTIVE</h1>
                <img src={girlsInField} alt="women holding hands in a field" className="subscribe-headerimage" />
            </div> */}
            <div className="subscribe-flex">
                {/* <div className="subscribe-flexitem" >
                    <h3 className="subscribe-newsletter">WHY YOU SHOULD VIBE</h3>
                    <div className="subscribe-signupcontainer">
                        <p id="subscribe-signuptext" className="subscribe-description">At The Vibe Collective, we don't just offer jobs, we creaft careers within a dynamic and inclusive ecosystem. We're committed to fostering growth, embracing collaboration and achieving harmonious work-life balance.</p>
                    </div>
                    <div className="subscribe-button">
                        <Link to={'/Readers'}><ActionButton buttonSettings={actionButtonSettings}></ActionButton></Link>
                    </div>
                </div> */}
                <div className="subscribe-flexitem">
                    <h3 className="subscribe-newsletter">MONTHLY VIBE CHECK</h3>
                    <div className="subscribe-signupcontainer">
                        <div className="subscribe-subscribe-text">
                            <h4 className="subscribe-description">Subscribe to our monthly newsletter:</h4>
                            <p className="subscribe-descriptiontext">Be the first to learn about classes, special offers, and events</p>
                        </div>
                        <div className="subscribe-button">
                            <input type="text" className="subscribe-textinput" id="submitemail" placeholder="Enter Your Email..."></input>
                            <ActionButton  buttonSettings={subscribeButtonSettings}></ActionButton>
                        </div>
                        <p className="subscribe-subtext">We respect your privacy, and your inbox*</p>
                    </div>
                </div>
            </div>
        </section>
    );
}