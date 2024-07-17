import { ActionButton } from '../../../PageElements/ActionButton/ActionButton';
import './Subscribe.css';

export const Subscribe = () => {
    const subscribeButtonSettings = {
        buttonText: 'Subscribe',
        buttonStyleId: 'subscribe-subscribebutton',
        action: () => {}
    }

    return (
        <section className="subscribe">
            <div className="subscribe-flex">
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