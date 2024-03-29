import { BioSection } from '../Components/HomePage/BioSection/BioSection.jsx'
import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { InfoCard } from '../Components/PageElements/InfoCard/InfoCard';
import { NewsCardSection } from '../Components/HomePage/NewsCard/NewsCardSection.jsx';
import { Testimonials } from '../Components/HomePage/Testimonials/Testimonials.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { RecruitSection } from '../Components/HomePage/Recruit/RecruitSection.jsx';
import { AboutSection } from '../Components/HomePage/AboutSection/AboutSection.jsx';

export default function HomePage() {

    return (
        <div className="scroll-snap">
            <TitleCard></TitleCard>
            <InfoCard></InfoCard>
            <JoinUs></JoinUs>
            <NewsCardSection></NewsCardSection>
            <AboutSection></AboutSection>
            <RecruitSection></RecruitSection>
            <BioSection></BioSection>
            <Testimonials></Testimonials>
        </div>
    )
}