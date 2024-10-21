import { useRef } from "react";
import { Items } from "../Items/Items";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import './Category.css';

export const CategorizedOfferings = ({ appointmentItemData }) => {
    const appointmentItems = useRef(appointmentItemData);

    return (
        <>
            <section className="category-section">
                <SectionDivider dividerData={{headingText: null}}></SectionDivider>

                <Items itemData={appointmentItems.current} />
            </section>
        </>
    );
}

