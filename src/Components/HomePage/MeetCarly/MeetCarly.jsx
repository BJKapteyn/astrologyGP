import { VideoSection } from '../../PageElements/VideoSection/VideoSection';
import './MeetCarly.css';

export const MeetCarly = () => {
    const buttonSettings = {
        buttonText: 'LEARN MORE',
        buttonStyleId: 'meet-morebutton',
        action: null
    }
    const vidSource = 'https://vibecollectivevideos.blob.core.windows.net/vibevideos/Recruiting Video V1.mp4';

    return (
        <VideoSection videoSource={vidSource} buttonSettings={buttonSettings}></VideoSection>
    );
}