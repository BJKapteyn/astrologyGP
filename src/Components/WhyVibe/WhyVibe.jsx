import { WhyVibeCardData } from './WhyVibeCardData.jsx';
import { ValueCards } from './ValueCards.jsx';
import { TitleCard } from '../PageElements/TitleCard/TitleCard.jsx';
import { VideoSection } from './VideoSection/VideoSection.jsx';
import { CareerSection } from './CareerSection/CareerSection.jsx';
import backgroundImage from '../../Pics/Landscapes/moonFade.png';

import './WhyVibe.css';
export const WhyVibe = () => {
    const titleData = {
        titleText: 'Why Vibe?',
        backgroundimage: backgroundImage,
        styleId: 'whyvibe-titlecard'
    };

    return (
        <main className="whyvibe">
            <TitleCard titleData={titleData}></TitleCard>
            <VideoSection></VideoSection>
            <CareerSection></CareerSection>
            <ValueCards cardDatas={WhyVibeCardData}></ValueCards>
            <h4 id="whyvibe-footnote">Join The Vibe Collective and experience a workplace where diversity is celebrated, talents are nurtured, and every day is an opportunity to make a positive impact. Might be a great time to vibe</h4>
        </main>
    )
}