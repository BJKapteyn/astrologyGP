import { VideoSection } from '../../PageElements/VideoSection/VideoSection';
import './MeetCarly.css';

export const MeetCarly = () => {
    const buttonSettings = {
        buttonText: 'LEARN MORE',
        buttonStyleId: 'meet-morebutton',
        action: null
    }
    const vidSource = 'https://vibecollectivevideos.blob.core.windows.net/vibevideos/TVC Welcome V2 CAP.mp4';

    return (
        <VideoSection videoSource={vidSource} buttonSettings={buttonSettings}></VideoSection>
    );
}