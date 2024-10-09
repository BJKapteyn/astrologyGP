import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { TitleCard } from "../../PageElements/TitleCard/TitleCard.jsx";

export const SingleOffering = () => {
    const offeringData  = useLocation();
    const offeringTitleData = {
        titleText: offeringData.state.name,
        subText: null,
        backgroundimage: null, 
        styleId: 'singleoffering-titlecard'
    }

    return (
        <div className="singleoffer">
            <TitleCard titleData={offeringTitleData}></TitleCard>
        </div>
    )
}