import { useEffect } from "react";
import { addPageHeaderInfo } from "../Functions/pageUtility";
import { WhyVibe } from "../Components/WhyVibe/WhyVibe";

export default function WhyVibePage() {

    useEffect(() => {
        const descriptionText = 'Join The Vibe Collective as an Astrology Medium or Tarot Reader';
        const keywordsText = 'The Vibe Collective, astrology, readers, mediums';

        addPageHeaderInfo(null, descriptionText, keywordsText, null);
    });

    return (
        <main className="whyvibe">
            <WhyVibe></WhyVibe>
        </main>
    )
}