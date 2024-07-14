import { TitleCard } from "../Components/PageElements/TitleCard/TitleCard";
import {singleO}

export default function SingleOfferingPage({ singleOfferingData }) {
    const { offeringItems, subText, category, backgroundImage } = singleOfferingData;
    const offeringTitleData = {
        titleText: 'OFFERINGS:',
        subText: category,
        backgroundimage: backgroundImage,
        styleId: 'singleoffering-titlecard'
    }

    return (
        <div className="singleoffer">
            <TitleCard titleData={offeringTitleData}></TitleCard>
        </div>
    )
}