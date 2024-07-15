import { useEffect, useState } from "react";
import { Items } from "../Items/Items";
import { TitleCard } from "../../PageElements/TitleCard/TitleCard";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import backgroundImage from '../../../Pics/Landscapes/tableHand_dark.png'
import './Category.css';

export const CategorySection = ({ productData }) => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const categoryTitleCardData = {
        titleText: 'OFFERINGS',
        backgroundimage: backgroundImage, 
        styleId: 'cat-section-titlecard'
    }


    useEffect(() => {
        let categoryData = [];
        let itemData = [];

        if(productData.length >= 0) {
            productData.forEach(data => {
                if(data?.Type === 'CATEGORY')
                    categoryData.push(data);
        
                if(data?.Type === 'ITEM')
                    itemData.push(data);
            }, [productData]);
        }
        
        setCategories(categoryData);
        setItems(itemData);
    }, [productData]);

    return (
        <>
            <TitleCard titleData={categoryTitleCardData}></TitleCard>
            {categories.map(category => {
                return (
                    <section key={category.Id} className="category-section">
                        <SectionDivider dividerData={{headingText: category.CategoryData.Name}}></SectionDivider>

                        <Items key={category.Id} itemData={items}></Items>

                    </section>
                );
            })}
        </>
    );
}


