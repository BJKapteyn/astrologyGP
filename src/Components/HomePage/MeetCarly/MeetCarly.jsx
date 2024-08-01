import { Link } from 'react-router-dom';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import './MeetCarly.css';

export const MeetCarly = () => {
    const buttonSettings = {
        buttonText: 'LEARN MORE',
        buttonStyleId: 'meet-morebutton',
        action: null
    }

    return (
        <section className="meet-flex">
            <div className="meet-flexitem">
                <video className="meet-video" controls>
                    <source src="https://vibecollectivevideos.blob.core.windows.net/vibevideos/Recruiting Video V1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="meet-button-container">
                <Link to={'/WhyVibe'}>
                    <ActionButton buttonSettings={buttonSettings}></ActionButton>
                </Link>
            </div>
        </section>
    );
}