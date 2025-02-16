// import { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Items } from "../../PageElements/ItemCard/Items.jsx";
// import { SectionDivider } from "../../PageElements/SectionDivider/SectionDivider";
// import './Category.css';

// // View after clicking an offering category
// export const CategorizedOfferings = () => {
//     const appointmentItems = useRef(useLocation());
//     const [offeringName, setOfferingName] = useState(null);

//     // Get heading from url
//     useEffect(() => {
//         if(appointmentItems?.current?.pathname && !offeringName) {
//             const urlPathNames = appointmentItems.current.pathname.split('/');
//             let uriParams = urlPathNames[urlPathNames.length - 1]?.split('-');
//             let name = uriParams[0];
//             let id = uriParams[1];
//             name = name.replace(/%20/g, ' ');
            
//             setOfferingName(name);
//         } else if (!offeringName) {
//             setOfferingName('Offering');
//         }

//     }, [offeringName]);

//     return (
//         <section className="category-section">
//             <SectionDivider dividerData={{headingText: offeringName}}></SectionDivider>

//             <Items itemData={appointmentItems.current} />
//         </section>
//     );
// }

