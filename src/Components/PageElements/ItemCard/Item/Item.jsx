import { useRandomImageUrl } from '../../../../CustomHooks/useRandomImageUrl';
import '../../../../App.css';
import './Item.css';

export const Item = ({ itemData }) => {
    const randomImage = useRandomImageUrl();
    const image = () => {
        if(!itemData.imageURL)
            return randomImage;

        return itemData.imageURL;
    }

    return (
        <div className="item-container">
            <div style={{backgroundImage: `url(${image()})`}} className="item"></div>
            <div className="item-header">
                <h3 className="item-name">{itemData.name}</h3>
            </div>
        </div>
    );    
}