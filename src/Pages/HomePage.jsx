import { meetCarlyDividerData } from './data/meetCarlyDividerData.jsx';
import { offeringsDividerData } from './data/offeringsDividerData.jsx';
import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider.jsx';
import { TitleDivider } from '../Components/PageElements/SectionDivider/TitleDivider.jsx';
import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { MeetCarly } from '../Components/HomePage/MeetCarly/MeetCarly.jsx';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { Subscribe } from '../Components/HomePage/Subscribe/Subscribe.jsx';
import { OfferingSection } from '../Components/HomePage/OfferingSection/OfferingSection.jsx';

export default function HomePage() {

    return (
        <div className="scroll-snap">
            <TitleCard></TitleCard>
            <TitleDivider></TitleDivider>
            <JoinUs></JoinUs>
            <MeetCarly></MeetCarly>
            <SectionDivider dividerData={meetCarlyDividerData}></SectionDivider>
            <NewsCardSection></NewsCardSection>
            <SectionDivider dividerData={offeringsDividerData}></SectionDivider>
            <OfferingSection></OfferingSection>
            <Subscribe></Subscribe>
        </div>
    )
}