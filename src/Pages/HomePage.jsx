import { useEffect } from 'react';
import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider.jsx';
import { TitleDivider } from '../Components/PageElements/SectionDivider/TitleDivider.jsx';
import { TitleCard } from '../Components/PageElements/TitleCard/TitleCard.jsx';
import { MeetCarly } from '../Components/HomePage/MeetCarly/MeetCarly.jsx';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { OfferingSection } from '../Components/HomePage/OfferingSection/OfferingSection.jsx';
import { titleCardData } from '../Components/HomePage/HomePageTitleCard/TitleCardData.jsx';
import { addPageHeaderInfo } from '../UtilityFunctions/pageUtility.js';
import { LatestVideo } from '../Components/HomePage/LatestVideo/LatestVideo.tsx';
import '../Components/HomePage/HomePageTitleCard/HomePageTitleCard.css';

export default function HomePage() {
    const vibeVideoDivider = {
        id: 1,
        classname: 'divider-text',
        headingText: ['THE VIBE']
    }
    const offeringsDividerData = {
        id: 1,
        classname: 'divider-text',
        headingText: ['OFFERINGS']
    }
    const youtubeVideoDividerData = {
        id: 1,
        classname: 'divider-text',
        headingText: ['LATEST VIDEO']
    }

    useEffect(() => {
        const descriptionText = 'The Vibe Collective is an online platform for metaphysical services, spiritual healing, and holistic wellness';
        const keywordsText = 'The Vibe Collective, online metaphysical services, spiritual, healing, holistic wellness, tarot readings, virtual spiritual consultations';

        addPageHeaderInfo(descriptionText, keywordsText);
    });

    return (
        <main id="homepage">
            <TitleCard titleData={titleCardData}></TitleCard>
            <TitleDivider></TitleDivider>
            <SectionDivider dividerData={youtubeVideoDividerData}></SectionDivider>
            <LatestVideo></LatestVideo>
            <SectionDivider dividerData={vibeVideoDivider}></SectionDivider>
            <NewsCardSection></NewsCardSection>
            <SectionDivider dividerData={offeringsDividerData}></SectionDivider>
            <OfferingSection></OfferingSection>
            <MeetCarly></MeetCarly>
        </main>
    )
}