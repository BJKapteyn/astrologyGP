import { SectionDivider } from "../Components/PageElements/SectionDivider/SectionDivider";
import { StoreCategories } from '../Components/StorePage/StoreCategories/StoreCategories.jsx';

export const StorePage = () => {
    const storetitleSettings = {
        classname: '',
        headingText: 'STORE'
    }

    return (
        <div className="store-page">
            <SectionDivider dividerData={storetitleSettings} />
            <StoreCategories />
        </div>
    );
};
