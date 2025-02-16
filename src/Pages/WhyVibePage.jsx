import { useEffect } from "react";
import { addPageHeaderInfo } from "../UtilityFunctions/pageUtility";
import { WhyVibe } from "../Components/WhyVibe/WhyVibe";

export default function WhyVibePage() {

    useEffect(() => {
        const descriptionText = 'Join The Vibe Collective as an Astrology Medium or Tarot Reader';
        const keywordsText = 'The Vibe Collective, astrology, readers, mediums';

        addPageHeaderInfo(descriptionText, keywordsText);
    });

    return (
        <main className="whyvibe">
            <WhyVibe></WhyVibe>
        </main>
    )
}