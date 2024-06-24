import { OfferingSectionData } from './OfferingSectionData.jsx';
import { OfferingItem } from './OfferingItem.jsx';

export const OfferingSection = () =>  {
    
    return (
        <section className="offering-section-section">
            <div className="offering-section-flex">
                {OfferingSectionData.map(data => {
                    return (
                        <OfferingItem key={data.id} recruitData={data}></OfferingItem>
                    );
                })}
            </div>
        </section>
    );
}