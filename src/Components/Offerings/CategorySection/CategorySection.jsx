import { useEffect, useState } from "react";
import { Items } from "../Items/Items";
import { TitleCard } from "../../PageElements/TitleCard/TitleCard";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import { OfferingCategory } from "../data/OfferingCategory";
import backgroundImage from '../../../Pics/Landscapes/yogaLivingRoom_dark.png';
import './Category.css';

export const CategorySection = ({ productData }) => {
    const [items, setItems] = useState([]);
    const categoryTitleCardData = {
        titleText: 'OFFERINGS',
        backgroundimage: backgroundImage, 
        styleId: 'cat-section-titlecard'
    }

    useEffect(() => {
        let itemData = [];

        if(productData.length >= 0) {
            productData.forEach(data => {

                if(data?.Type === 'ITEM')
                    itemData.push(data);
                
            }, [productData]);
        }
        
        setItems(itemData);
    }, [productData]);

    return (
        <>
            <TitleCard titleData={categoryTitleCardData}></TitleCard>
            
            {OfferingCategory.map(category => {
                return (
                    <section key={category.Id} className="category-section">
                        <SectionDivider dividerData={{headingText: category}}></SectionDivider>

                        <Items key={category.Id} itemData={items}></Items>
                    </section>
                );
            })}
        </>
    );
}


