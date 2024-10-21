import { useRef } from "react";
import { Items } from "../Items/Items";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import './Category.css';

export const OfferingCategories = ({ serviceItemData }) => {
    const serviceItems = useRef(serviceItemData);

    return (
        <>
            <section className="category-section">
                <SectionDivider dividerData={{headingText: 'Our Offerings'}}></SectionDivider>

                <Items itemData={serviceItems.current} />
            </section>
        </>
    );
}


