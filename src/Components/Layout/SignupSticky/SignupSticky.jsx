import { useState, useEffect } from 'react';
import { ReactComponent as CloseSticky } from '../../../Pics/Logos/MenuRetract.svg';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import { Link } from 'react-router-dom';
import './SignupSticky.css';
import '../../../App.css';

// pop up bar at the bottom of all pages for signing up for promotions
export const SignupSticky = () => {
    const [signupSticky, setSignupSticky] = useState(<></>);
    const [timeoutIsComplete, setTimeoutIsComplete] = useState(false);
    // const logoSource = require('../../../Pics/Logos/MainLogoYellow.png');

    // const logo = (
    //     <div className="signup-logocontainer">
    //         <img src={logoSource} alt="The Vibe Collective Logo" className="signup-logo" />
    //     </div>
    // )

    const signUpButtonSettings = {
        buttonText: 'SIGN UP',
        buttonStyleId: 'signup-signupbutton'
    }

    const closeButtonSettings = {
        buttonText: <CloseSticky />,
        buttonStyleId: 'signup-closeButton'
    }

    function close() {
        setSignupSticky(<></>);
    }

    const singupStickyComponent = (
        <div className="signup-stickymain">
            <div id="signup-textcontainer">
                <p>Sign up now and recieve a 10% off coupon when our offerings open in October</p>
            </div>
            <div className="signup-link">
                <Link target='_blank' to={'https://squareup.com/outreach/UurPKs/subscribe'}>
                    <ActionButton buttonSettings={signUpButtonSettings}></ActionButton>
                </Link>
            </div>
            <div id="signup-closecontainer">
                <ActionButton buttonSettings={closeButtonSettings} callback={() => close()}></ActionButton>
            </div>
        </div>
    );

    // Set the amount of time before the bar appears
    useEffect(() => {
        let timeout = setTimeout(() => {
            if(timeoutIsComplete === false) {
                setSignupSticky(singupStickyComponent);
                setTimeoutIsComplete(true);
            }
        }, 2000);

        return () => clearTimeout(timeout);
    });

    return (
        <div>
            {signupSticky}
        </div>
    );
}