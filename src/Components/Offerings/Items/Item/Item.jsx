import '../../../../App.css';
import './Item.css';
import moon from '../../../../Pics/Landscapes/moonClouds.png';

export const Item = ({ itemData }) => {

    return (
            <div className="item">
                <div style={{backgroundImage: `url(${moon})`}} className="item-header">
                    <h3 className="item-name">{itemData.Name}</h3>
                </div>
                <div className="item-booknowbutton">
                    <button className="item-booknow">+</button>
                </div>
            </div>
    );      
}