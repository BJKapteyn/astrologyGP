import { useEffect, useState } from "react";
import { Items } from "../Items/Items";
import { TitleCard } from "../../PageElements/TitleCard/TitleCard";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import backgroundImage from '../../../Pics/Landscapes/jpeg/yogaLivingRoom_dark.jpg';
import './Category.css';

export const CategorySection = ({ appointmentItemData }) => {
    const [items, setItems] = useState(appointmentItemData);
    const categoryTitleCardData = {
        titleText: 'OFFERINGS',
        backgroundimage: backgroundImage, 
        styleId: 'cat-section-titlecard'
    }

    useEffect(() => {
        setItems(appointmentItemData);
    }, [appointmentItemData]);

    return (
        <>
            <TitleCard titleData={categoryTitleCardData}></TitleCard>
            
            
            <section className="category-section">
                <SectionDivider dividerData={{headingText: 'Our Offerings'}}></SectionDivider>

                <Items itemData={items}></Items>
            </section>
            
        </>
    );
}


