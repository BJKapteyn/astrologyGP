import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider.jsx';
import { TitleDivider } from '../Components/PageElements/SectionDivider/TitleDivider.jsx';
import { TitleCard } from '../Components/PageElements/TitleCard/TitleCard.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { MeetCarly } from '../Components/HomePage/MeetCarly/MeetCarly.jsx';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { OfferingSection } from '../Components/HomePage/OfferingSection/OfferingSection.jsx';
import { titleCardData } from '../Components/HomePage/TitleCard/TitleCardData.jsx';

export default function HomePage() {
    const videoDivider = {
        id: 1,
        classname: 'divider-text',
        headingText: ['THE VIBE']
    }
    const offeringsDividerData = {
        id: 1,
        classname: 'divider-text',
        headingText: ['OFFERINGS']
    }

    return (
        <main id="homepage">
            <meta name="author" content="Brad Kapteyn"></meta>
            <meta name="description" content="The Vibe Collective is an online platform for metaphysical services, spiritual healing, and holistic wellness"></meta>
            <meta name="keywords" content="The Vibe Collective, online metaphysical services, spiritual, healing, holistic wellness, tarot readings, virtual spiritual consultations"></meta>
            <TitleCard titleData={titleCardData}></TitleCard>
            <TitleDivider></TitleDivider>
            <JoinUs></JoinUs>
            <MeetCarly></MeetCarly>
            <SectionDivider dividerData={videoDivider}></SectionDivider>
            <NewsCardSection></NewsCardSection>
            <SectionDivider dividerData={offeringsDividerData}></SectionDivider>
            <OfferingSection></OfferingSection>
        </main>
    )
}