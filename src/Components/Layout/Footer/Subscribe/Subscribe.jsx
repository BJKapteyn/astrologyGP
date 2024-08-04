import { ActionButton } from '../../../PageElements/ActionButton/ActionButton';
import { EmailForm } from './EmailForm';
import './Subscribe.css';

export const Subscribe = () => {
    const subscribeButtonSettings = {
        buttonText: 'Subscribe',
        buttonStyleId: 'subscribe-subscribebutton',
        action: () => {}
    }

    return (
        <section id="subscribe">
            <div className="subscribe-flex">
                <div className="subscribe-flexitem">
                    <h3 className="subscribe-newsletter">VIBE CHECK</h3>
                    <div className="subscribe-signupcontainer">
                        <div className="subscribe-subscribe-text">
                            <h4 className="subscribe-description">Subscribe to our monthly newsletter:</h4>
                            <p className="subscribe-descriptiontext">Be the first to learn about special offers, seasonal classes, new services, and events.</p>
                        </div>
                        <EmailForm></EmailForm>
                        <p className="subscribe-subtext">We respect your privacy and your inbox.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}