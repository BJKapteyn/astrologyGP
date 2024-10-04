import { WhyVibeCardData } from './WhyVibeCardData.jsx';
import { ValueCards } from './ValueCards.jsx';
import { TitleCard } from '../PageElements/TitleCard/TitleCard.jsx';
import { CareerSection } from './CareerSection/CareerSection.jsx';
import { VideoSection } from '../PageElements/VideoSection/VideoSection.jsx';
import backgroundImage from '../../Pics/Landscapes/moonFade.png';

import './WhyVibe.css';
export const WhyVibe = () => {
    const titleData = {
        titleText: 'Why Vibe?',
        backgroundimage: backgroundImage,
        styleId: 'whyvibe-titlecard'
    };

    const vidSource = 'https://vibecollectivevideos.blob.core.windows.net/vibevideos/TVCRecruitingV3CAPTIONS.mp4';

    return (
        <main className="whyvibe">
            <TitleCard titleData={titleData}></TitleCard>
            <VideoSection videoSource={vidSource}></VideoSection>
            <CareerSection></CareerSection>
            <ValueCards cardDatas={WhyVibeCardData}></ValueCards>
        </main>
    )
}