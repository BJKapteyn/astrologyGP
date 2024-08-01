import { Link } from 'react-router-dom';
import { ActionButton } from '../../PageElements/ActionButton/ActionButton';
import './VideoSection.css';

export const VideoSection = ({ buttonSettings = null, videoSource }) => {

    return (
        <section className="video-flex">
            <div className="video-flexitem">
                <video className="video-video" controls>
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>
            {buttonSettings && (
                <div className="video-button-container">
                    <Link to={'/WhyVibe'}>
                        <ActionButton buttonSettings={buttonSettings}></ActionButton>
                    </Link>
                </div>
            )}
        </section>
    );
}