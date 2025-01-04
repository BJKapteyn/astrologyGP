import { VideoSection } from '../../PageElements/VideoSection/VideoSection';
import './MeetCarly.css';

export const MeetCarly = () => {
    const buttonSettings = {
        buttonText: 'BOOK NOW',
        buttonStyleId: 'meet-morebutton',
        action: null
    }
    const vidSource = 'https://vibecollectivevideos.blob.core.windows.net/vibevideos/TVCWelcomeV3CAPTIONS.mp4';

    return (
        <VideoSection videoSource={vidSource} buttonSettings={buttonSettings}></VideoSection>
    );
}