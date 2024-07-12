import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider.jsx';
import { TitleDivider } from '../Components/PageElements/SectionDivider/TitleDivider.jsx';
// import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { TitleCard } from '../Components/PageElements/TitleCard/TitleCard.jsx';
import { titleCardData } from '../Components/HomePage/TitleCard/TitleCardData.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { MeetCarly } from '../Components/HomePage/MeetCarly/MeetCarly.jsx';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { OfferingSection } from '../Components/HomePage/OfferingSection/OfferingSection.jsx';
import { meetCarlyDividerData } from './data/meetCarlyDividerData.jsx';
import { offeringsDividerData } from './data/offeringsDividerData.jsx';

export default function HomePage() {

    return (
        <div className="scroll-snap">
            <TitleCard titleData={titleCardData}></TitleCard>
            <TitleDivider></TitleDivider>
            <JoinUs></JoinUs>
            <MeetCarly></MeetCarly>
            <SectionDivider dividerData={meetCarlyDividerData}></SectionDivider>
            <NewsCardSection></NewsCardSection>
            <SectionDivider dividerData={offeringsDividerData}></SectionDivider>
            <OfferingSection></OfferingSection>
        </div>
    )
}