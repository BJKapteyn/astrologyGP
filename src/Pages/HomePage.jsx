import {BioSection} from '../Components/HomePage/BioSection/BioSection.jsx'
import { TitleCard } from '../Components/HomePage/TitleCard/TitleCard.jsx';
import { InfoCard } from '../Components/PageElements/InfoCard/InfoCard';
import { NewsCard } from '../Components/HomePage/NewsCard/NewsCard.jsx';
import { Testimonials } from '../Components/HomePage/Testimonials/Testimonials.jsx';

export default function HomePage() {
    return (
        <>
            <TitleCard></TitleCard>
            <InfoCard></InfoCard>
            <NewsCard></NewsCard>
            <BioSection></BioSection>
            <Testimonials></Testimonials>
        </>
    )
}