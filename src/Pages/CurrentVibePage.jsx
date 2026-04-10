import { useEffect } from 'react';
import { BlogSection } from '../Components/CurrentVibePage/BlogSection/BlogSection.tsx';
import { addPageHeaderInfo } from '../UtilityFunctions/pageUtility.js';


function CurrentVibePage() {
    const keywords = 'Current Vibe, Vibe Collective Blog, Spiritual Blog, Astrology Articles, Wellness Tips, Mindfulness Practices, Holistic Living, Personal Growth, Spirituality Insights, Vibe Collective Updates';
    const description = 'Stay updated with the latest insights, articles, and news from The Vibe Collective. Explore our blog for tips on spirituality, wellness, and personal growth.';
    const title = 'Current Vibe - The Vibe Collective';

    useEffect(() => {   
        addPageHeaderInfo(description, keywords, title);
    }, []);

    return (
        <BlogSection />
    );
}

export default CurrentVibePage;