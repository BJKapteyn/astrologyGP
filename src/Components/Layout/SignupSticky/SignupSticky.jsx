import { useState, useEffect } from 'react';
import { ReactComponent as CloseSticky } from '../../../Pics/Logos/MenuRetract.svg';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import './SignupSticky.css';
import '../../../App.css';

export const SignupSticky = () => {
    const [signupSticky, setSignupSticky] = useState(<></>);
    const logoSource = require('../../../Pics/Logos/MainLogoYellow.png');
    const closeButtonSettings = {
        buttonText: 'Sign Up'
    }

    function close() {
        setSignupSticky(<></>);
    }

    const singupStickyComponent = (
        <div className="signup-stickymain">
            <div className="signup-logocontainer">
                <img src={logoSource} alt="The Vibe Collective Logo" className="signup-logo" />
            </div>
            <div className="signup-text">
                <p>Sign up now and recieve a 10% off coupon when our store opens in October 2024</p>
            </div>
            <div className="signup-link">
                <Link to={'https://squareup.com/outreach/UurPKs/subscribe'}><ActionButton buttonSettings={closeButtonSettings}></ActionButton></Link>
            </div>
            <div className="signup-close"><CloseSticky></CloseSticky></div>
        </div>
    );

    useEffect(() => {
        setTimeout(() => {
            setSignupSticky(singupStickyComponent);
        }, 1000);
    });

    return (
        <div>
            {signupSticky}
        </div>
    );
}