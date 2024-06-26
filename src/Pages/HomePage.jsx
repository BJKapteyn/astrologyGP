import { titleDividerData } from './data/titleDividerData.jsx';
import { meetCarlyDividerData } from './data/meetCarlyDividerData.jsx';
import { offeringsDividerData } from './data/offeringsDividerData.jsx';
import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider.jsx';
import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { MeetCarly } from '../Components/HomePage/MeetCarly/MeetCarly.jsx';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { Testimonials } from '../Components/HomePage/Testimonials/Testimonials.jsx';
import { Subscribe } from '../Components/HomePage/Subscribe/Subscribe.jsx';
import { OfferingSection } from '../Components/HomePage/OfferingSection/OfferingSection.jsx';
import { DividerGraphic } from '../Components/PageElements/DividerGraphic/DividerGraphic.jsx';

export default function HomePage() {

    return (
        <div className="scroll-snap">
            <TitleCard></TitleCard>
            <DividerGraphic></DividerGraphic>
            <SectionDivider dividerData={titleDividerData} />
            <JoinUs></JoinUs>
            <MeetCarly></MeetCarly>
            <SectionDivider dividerData={meetCarlyDividerData}></SectionDivider>
            <NewsCardSection></NewsCardSection>
            <SectionDivider dividerData={offeringsDividerData}></SectionDivider>
            <OfferingSection></OfferingSection>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
        </div>
    )
}