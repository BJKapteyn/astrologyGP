import { useEffect } from "react";
import { SectionDivider } from "../Components/PageElements/SectionDivider/SectionDivider";
import { StoreCategories } from '../Components/StorePage/StoreCategories/StoreCategories.jsx';

export default function StorePage() {

    const storetitleSettings = {
        classname: '',
        headingText: 'STORE'
    }

    useEffect(() => {
        fetch()
    })

    return (
        <div className="store-page">
            <SectionDivider dividerData={storetitleSettings} />
            <StoreCategories />
        </div>
    );
};
