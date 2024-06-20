import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { InfoCard } from '../Components/PageElements/InfoCard/InfoCard';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { Testimonials } from '../Components/HomePage/Testimonials/Testimonials.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { Subscribe } from '../Components/HomePage/Subscribe/Subscribe.jsx';
import { RecruitSection } from '../Components/HomePage/Recruit/RecruitSection.jsx';
import { AboutSection } from '../Components/HomePage/AboutSection/AboutSection.jsx';
import { Book } from '../Components/HomePage/Book/Book.jsx';

export default function HomePage() {

    return (
        <div className="scroll-snap">
            <TitleCard></TitleCard>
            <JoinUs></JoinUs>
            <InfoCard></InfoCard>
            <NewsCardSection></NewsCardSection>
            <AboutSection></AboutSection>
            <RecruitSection></RecruitSection>
            <Book></Book>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
        </div>
    )
}