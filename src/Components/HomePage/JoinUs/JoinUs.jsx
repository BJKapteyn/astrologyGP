import girlsInField from '../../../Pics/Landscapes/girlsInField.png'
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import './JoinUs.css';

export const JoinUs = () => {

    const actionButtonSettings = {
        buttonText: 'Book Now',
        action: () => {}
    }
    const subscribeButtonSettings = {
        buttonText: 'Subscribe',
        action: () => {}
    }

    return (
        <section className="joinus">
            <div className="joinus-header">
                <h1 className="joinus-headertext">JOIN OUR COLLECTIVE</h1>
                <img src={girlsInField} alt="women holding hands in a field" className="joinus-headerimage" />
            </div>
            <div className="joinus-flex">
                <div className="joinus-flexitem" >
                    <h3>SCHEDULE A READING</h3>
                    <div className="joinus-signupcontainer">
                        <p id="joinus-signuptext" className="joinus-description">&emsp;At Vibe Collective, we believe that everyone deserves to live their best life, and we're here to support you on your journey. Our fun, vibrant, and unique approach to divination will leave you feeling uplifted and empowered. So why wait? Book your reading today and take the ﬁrst step towards a more fulﬁlling life.</p>
                    </div>
                    <div className="joinus-button">
                        <ActionButton buttonSettings={actionButtonSettings}></ActionButton>
                    </div>
                </div>
                <div className="joinus-flexitem">
                    <h3>MONTHLY NEWSLETTER</h3>
                    <div className="joinus-signupcontainer">
                        <p className="joinus-description">Subscribe to our monthly newsletter:</p>
                        <input type="text" className="textinput" id="submitemail" placeholder="Enter Your Email..."></input>
                    </div>
                    <div className="joinus-button">
                        <ActionButton  buttonSettings={subscribeButtonSettings}></ActionButton>
                    </div>
                </div>
            </div>
        </section>
    );
}