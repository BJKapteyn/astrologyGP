import { Link } from 'react-router-dom';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import logo from '../../../Pics/Logos/THE_VIBE_COLLECTIVE_SOCIAL_-02.jpg';
import './VideoSection.css';

export const VideoSection = ({ buttonSettings = null, videoSource }) => {

    return (
        <section className="video-flex">
            <div className="video-flexitem">
                <video poster={logo} className="video-video" controls>
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>
            {buttonSettings && (
                <div className="video-button-container">
                    <Link to={'/Readers'}>
                        <ActionButton buttonSettings={buttonSettings}></ActionButton>
                    </Link>
                </div>
            )}
        </section>
    );
}