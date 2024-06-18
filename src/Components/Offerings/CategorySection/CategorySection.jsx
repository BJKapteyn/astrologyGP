import { useEffect, useState } from "react";
import { Items } from "../Items/Items";
import './Category.css';

export const CategorySection = ({ productData }) => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let categoryData = [];
        let itemData = []
        console.log(productData);
        if(productData.length >= 0) {
            productData.forEach(data => {
                if(data?.Type === 'CATEGORY')
                    categoryData.push(data);
        
                if(data?.Type === 'ITEM')
                    itemData.push(data);
            }, [productData]);
        }
        console.log(productData);
        
        setCategories(categoryData);
        setItems(itemData);
    }, []);

    return (
        <>
            {categories.map(category => {
                return (
                    <section key={category.Id} className="category-section">
                        <h1 className="cat-section-heading">{category.CategoryData.Name}</h1>

                        <Items key={category.Id} itemData={items}></Items>

                    </section>
                );
            })}
        </>
    );
}


