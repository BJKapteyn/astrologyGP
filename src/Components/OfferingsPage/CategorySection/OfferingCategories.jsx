import { useRef } from "react";
import { Items } from "../../PageElements/ItemCard/Items.jsx";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import './Category.css';

// Landing page for all offering categories
export const OfferingCategories = ({ serviceItemData }) => {
    const serviceItems = useRef(serviceItemData);

    return (
        <section className="category-section">
            <SectionDivider dividerData={{headingText: 'Our Offerings'}}></SectionDivider>

            <Items itemData={serviceItems.current} />
        </section>
    );
}


