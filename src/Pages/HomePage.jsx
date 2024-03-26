import { useRef } from 'react';
import { BioSection } from '../Components/HomePage/BioSection/BioSection.jsx'
import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { InfoCard } from '../Components/PageElements/InfoCard/InfoCard';
import { NewsCard } from '../Components/HomePage/NewsCard/NewsCard.jsx';
import { Testimonials } from '../Components/HomePage/Testimonials/Testimonials.jsx';
import { JoinUs } from '../Components/HomePage/JoinUs/JoinUs.jsx';
import { AboutSection } from '../Components/HomePage/AboutSection/AboutSection.jsx';

export default function HomePage() {
    const joinUsScrollRef = useRef(null);

    return (
        <div className="scroll-snap">
            <TitleCard></TitleCard>
            <InfoCard></InfoCard>
            <JoinUs></JoinUs>
            <AboutSection></AboutSection>
            <NewsCard></NewsCard>
            <BioSection></BioSection>
            <Testimonials></Testimonials>
        </div>
    )
}