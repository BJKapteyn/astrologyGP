import girlsInField from '../../../Pics/Landscapes/girlsInField.png'
import { Link } from 'react-router-dom';
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
            <div id="joinus-header-id" className="joinus-header">
                <h1 className="joinus-headertext">JOIN OUR COLLECTIVE</h1>
                <img src={girlsInField} alt="women holding hands in a field" className="joinus-headerimage" />
            </div>
            <div className="joinus-flex">
                <div className="joinus-flexitem" >
                    <h3 className="joinus-newsletter">WHY YOU SHOULD VIBE</h3>
                    <div className="joinus-signupcontainer">
                        <p id="joinus-signuptext" className="joinus-description">At The Vibe Collective, we don't just offer jobs, we creaft careers within a dynamic and inclusive ecosystem. We're committed to fostering growth, embracing collaboration and achieving harmonious work-life balance.</p>
                    </div>
                    <div className="joinus-button">
                        <Link to={'/Readers'}><ActionButton buttonSettings={actionButtonSettings}></ActionButton></Link>
                    </div>
                </div>
                <div className="joinus-flexitem">
                    <h3 className="joinus-newsletter">MONTHLY NEWSLETTER</h3>
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