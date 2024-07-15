import { OfferingItem } from "../../HomePage/OfferingSection/OfferingItem.jsx";
import { TitleCard } from "../../PageElements/TitleCard/TitleCard.jsx";

export const SingleOffering = ({ singleOfferingData }) => {
    const { offeringItems, category, backgroundImage } = singleOfferingData;
    const offeringTitleData = {
        titleText: 'OFFERINGS:',
        subText: category,
        backgroundimage: backgroundImage,
        styleId: 'singleoffering-titlecard'
    }

    return (
        <div className="singleoffer">
            <TitleCard titleData={offeringTitleData}></TitleCard>

            <div className="singleoffer-offeringItems">
                {offeringItems.map(offeringItem => {
                    return (
                        <OfferingItem offeringItemData={offeringItem}></OfferingItem>
                    );
                })}

            </div>
        </div>
    )
}