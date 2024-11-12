import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Items } from "../../PageElements/ItemCard/Items.jsx";
import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
import './Category.css';

// View after clicking an offering category
export const CategorizedOfferings = () => {
    const appointmentItems = useRef(useLocation());
    const [heading, setHeading] = useState(null);

    // Get heading from url
    useEffect(() => {
        if(appointmentItems?.current?.pathname && !heading) {
            const urlPathNames = appointmentItems.current.pathname.split('/');
            let headingText = urlPathNames[urlPathNames.length - 1];
            headingText = headingText.replace(/%20/g, ' ');
            
            setHeading(headingText);
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

