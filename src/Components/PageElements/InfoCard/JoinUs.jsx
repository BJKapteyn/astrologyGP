import girlsInField from '../../../Pics/Landscapes/girlsInField.png'
import { ActionButton } from '../ActionButton/ActionButton';

export const JoinUs = () => {

    const actionButtonSettings = {
        buttonText: 'book now',
        action: () => {}
    }
    const subscribeButtonSettings = {
        buttonText: 'subscribe',
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
                    <div className="infocard-signupcontainer">
                        <p className="infocard-description">Our goal is to create an intimate and accessible user experience, so you can book your reading from anywhere in the world at any time of the day.</p>
                    </div>
                    <div className="joinus-button">
                        <ActionButton  buttonSettings={actionButtonSettings}></ActionButton>
                    </div>
                </div>
                <div className="joinus-flexitem">
                    <h3>MONTHLY NEWSLETTER</h3>
                    <div className="infocard-signupcontainer">
                        <p className="infocard-description">Subscribe to our monthly newsletter</p>
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