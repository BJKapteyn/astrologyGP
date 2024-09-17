import './SignupSticky.css';

export const SignupSticky = () => {
    const logoSource = require('../../../Pics/Logos/MainLogoYellow.png');

    return (
        <div className="signup-stickymain">
            <div className="signup-logocontainer">
                <img src={logoSource} alt="The Vibe Collective Logo" className="signup-logo" />
            </div>
            <div className="signup-text">
                <p>Click Here to sign up and recieve a 10% off coupon when our store opens in October 2024</p>

            </div>
            <div className="signup-link">

            </div>
            <div className="signup-close">X</div>
        </div>
    );
}