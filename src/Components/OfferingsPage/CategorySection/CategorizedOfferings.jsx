import { useEffect, useRef, useState } from "react";
import { Items } from "../Items/Items";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import './Category.css';
import { useLocation } from "react-router-dom";

// View after clicking an offering category
export const CategorizedOfferings = ({ appointmentItemData }) => {
    const appointmentItems = useRef(useLocation());
    const [heading, setHeading] = useState(null);

    useEffect(() => {
        if(appointmentItems?.current?.pathname && !heading) {
            const paths = appointmentItems.current.pathname.split('/');
            let title = paths[paths.length - 1];
            title = title.replace(/%20/g, ' ');
            
            setHeading(title);
        } else if (!heading) {
            setHeading('Offering');
        }

    }, [heading]);

    return (
        <>
            <section className="category-section">
                <SectionDivider dividerData={{headingText: heading}}></SectionDivider>

                <Items itemData={appointmentItems.current} />
            </section>
        </>
    );
}

