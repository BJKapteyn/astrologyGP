import { OfferingSectionData } from './OfferingSectionData.jsx';
import { OfferingItem } from './OfferingItem.jsx';
import './OfferingsSection.css'

export const OfferingSection = () =>  {
    
    return (
        <section className="offering-sectionmain">
            <div className="offering-section-flex">
                {OfferingSectionData.map(data => {
                    return (
                        <OfferingItem key={data.id} offeringItemData={data}></OfferingItem>
                    );
                })}
            </div>
        </section>
    );
}