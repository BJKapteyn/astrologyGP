import {titleDividerData} from './data/titleDividerData.jsx';
import { SectionDivider } from '../Components/PageElements/SectionDivider/SectionDivider.jsx';
import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { MeetCarly } from '../Components/HomePage/MeetCarly/MeetCarly.jsx';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { Testimonials } from '../Components/HomePage/Testimonials/Testimonials.jsx';
import { Subscribe } from '../Components/HomePage/Subscribe/Subscribe.jsx';
import { RecruitSection } from '../Components/HomePage/Recruit/RecruitSection.jsx';
import { AboutSection } from '../Components/HomePage/AboutSection/AboutSection.jsx';
import { Book } from '../Components/HomePage/Book/Book.jsx';

export default function HomePage() {

    return (
        <div className="scroll-snap">
            <TitleCard></TitleCard>
            <SectionDivider dividerData={titleDividerData} />
            <JoinUs></JoinUs>
            <MeetCarly></MeetCarly>
            <NewsCardSection></NewsCardSection>
            <AboutSection></AboutSection>
            <RecruitSection></RecruitSection>
            <Book></Book>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
        </div>
    )
}