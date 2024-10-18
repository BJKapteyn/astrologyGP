import '../../../../App.css';
import './Item.css';
import moon from '../../../../Pics/Landscapes/moonClouds.png';

export const Item = ({ itemData, callBackSelect }) => {
    const image = itemData.imageURL ?? moon;

    return (
        <div className="item-container">
            <div onClick={() => callBackSelect(itemData)} style={{backgroundImage: `url(${image})`}} className="item"></div>
            <div className="item-header">
                <h3 className="item-name">{itemData.name}</h3>
            </div>
        </div>
    );    
}