import { ReaderTitle } from '../Components/ReaderPage/ReaderTitle/ReaderTitle.jsx';
import { useEffect } from 'react';
import { addPageHeaderInfo } from '../UtilityFunctions/pageUtility.js';

export default function CollectivePage() {
    useEffect(() => {
        const descriptionText = 'Meet The Vibe Collective!';
        const keywordsText = 'The Vibe Collective, astrology, readers, mediums';

        addPageHeaderInfo(descriptionText, keywordsText);
    }); 

    return (
        <main>
            <ReaderTitle></ReaderTitle>
        </main>
    )
}