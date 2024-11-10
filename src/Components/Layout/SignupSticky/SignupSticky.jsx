import { useState, useEffect } from 'react';
import { ReactComponent as CloseSticky } from '../../../Pics/Logos/MenuRetract.svg';
import { Link } from 'react-router-dom';
import { CardModal } from '../../PageElements/CardModal/CardModal';
import { ReactComponent as Eye } from '../../../Pics/SvgDrawings/EYE-VECTOR.svg'
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import './SignupSticky.css';
import '../../../App.css';

// pop up bar at the bottom of all pages for signing up for promotions
export const SignupSticky = () => {
    const [signupSticky, setSignupSticky] = useState(<></>);
    const [timeoutIsComplete, setTimeoutIsComplete] = useState(false);

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
        <CardModal callBackDeselect={() => close()}>
            <div className="signup-stickymain">
                <div className="signup-graphiccontainer">
                    <Eye id="signup-eyegraphic"></Eye>
                </div>
                <div id="signup-textcontainer">
                    <p>Sign up today and be the first to learn about special offers, seasonal classes, new services, and events.</p>
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
        </CardModal>

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