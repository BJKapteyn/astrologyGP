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
                <iframe 
                    className="meet-video"
                    src="https://www.youtube.com/embed/videoseries?si=TkHSyUQp42M11451&amp;list=PL22DFF37B18C4F943&amp;origin=https://the-vibe-collective-2024.web.app"
                    title="YouTube video player" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen></iframe>
            </div>
            <div className="meet-button-container">
                <Link to={'/WhyVibe'}>
                    <ActionButton buttonSettings={buttonSettings}></ActionButton>
                </Link>
            </div>
        </section>
    );
}